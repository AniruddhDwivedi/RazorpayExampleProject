export const loadRazorpayScript = () => {
  return new Promise((resolve) => {
    if (document.getElementById("razorpay-script")) {
      resolve(true);
      return;
    }

    const script = document.createElement("script");
    script.id = "razorpay-script";
    script.src = "https://checkout.razorpay.com/v1/checkout.js";
    script.onload = () => resolve(true);
    script.onerror = () => resolve(false);

    document.body.appendChild(script);
  });
};

export const doPayment = async ({ amount, user }) => {
  const isLoaded = await loadRazorpayScript();

  if (!isLoaded) {
    alert("Razorpay SDK failed to load.");
    return;
  }

  const options = {
    key: import.meta.env.VITE_RAZORPAY_KEY,
    amount: amount,
    currency: "INR",
    name: "Default",
    description: "Donation",

    handler: function (response) {
      console.log("SUCCESS", response);
    },

    prefill: {
      name: user.name,
      email: user.email,
      contact: user.contact,
    },

    theme: {
      color: "#3399cc",
    },
  };

  const rzp = new window.Razorpay(options);

  rzp.on("payment.failed", function (response) {
    console.error("FAILED", response.error);
  });

  rzp.open();
};