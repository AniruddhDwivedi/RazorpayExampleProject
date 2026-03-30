import React, {useState} from "react";
import { doPayment } from "../services/payment";

const GiveMoney = () => {
  const [showModal, setShowModal] = useState(false);
  const [form, setForm] = useState({
    name: "",
    email: "",
    contact: "",
    amount: ""
  });

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    doPayment({
      amount: String(Number(form.amount) * 100), // convert ₹ → paise
      user: {
        name: form.name,
        email: form.email,
        contact: form.contact
      }
    });

    setShowModal(false);
  };

  return (
    <div className="give-money-page">
      <h2>CAN YOU PUT A PRICE ON PEACE OF MIND?</h2>

      <div className="money-text">
        <p>
          The Epsilon Program does not ask for much. We only ask for everything
          you have and your total devotion to Kraff. In exchange, we offer you
          the 4th Paradigm and a life free from the shackles of logic and
          red-haired influence.
        </p>

        <p>
          Generosity is the highest form of enlightenment. By clicking the
          button below, you are not just spending money; you are investing in
          your own eternal happiness and the eventual construction of our great
          learning center.
        </p>

        <p>
          <em>
            "The person who gives the most is the person who is the most happy."
          </em>
          <br />— Cris Formage
        </p>
      </div>

      <div className="donation-container">
        <button className="donate-btn" onClick={() => setShowModal(true)}>
          DONATE
        </button>

        {showModal && (
          <div className="modal-overlay">
            <div className="modal">
              <h2>Enter Details</h2>

              <form onSubmit={handleSubmit}>
                <input
                  type="text"
                  name="name"
                  placeholder="Name"
                  onChange={handleChange}
                  required
                />

                <input
                  type="email"
                  name="email"
                  placeholder="Email"
                  onChange={handleChange}
                  required
                />

                <input
                  type="tel"
                  name="contact"
                  placeholder="Phone"
                  onChange={handleChange}
                  required
                />

                <input
                  type="number"
                  name="amount"
                  placeholder="Amount (₹)"
                  onChange={handleChange}
                  required
                />

                <button type="submit">Proceed to Pay</button>
                <button type="button" onClick={() => setShowModal(false)}>
                  Cancel
                </button>
              </form>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default GiveMoney;
