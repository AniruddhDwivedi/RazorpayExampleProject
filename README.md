# Razorpay Payment Integration (With pre-exisiting React + Vite Webpage)

This project serves as an example integration for Razorpay payment interface based on my template webpage.

---

## Features Implemented

* Razorpay Checkout integration
* Payment service abstraction (`services/payment.js`)

---

## Setup Instructions

### 1. Install Dependencies

```bash
npm install
```

---

### 2. Adding Environment Variables

Create a `.env` file in the root directory:

```env
VITE_RAZORPAY_KEY=rzp_test_xxxxxxxxx
```

> Must start with `VITE_` (as this is required by Vite)

---

### 3. Start Development Server

```bash
npm run dev
```

---

## Payment Service (`services/payment.js`)

Handles:

* Loading Razorpay SDK
* Creating payment instance
* Opening checkout

### Key Functions

#### Load Script

```js
loadRazorpayScript()
```

#### Trigger Payment

```js
doPayment({ amount, user })
```

---

## Payment Flow

1. User clicks **DONATE**
2. Modal opens
3. User enters:

   * Name
   * Email
   * Phone
   * Amount
4. On submit:

   * Amount converted to paise
   * `doPayment()` is called
5. Razorpay Checkout opens

---

## Amount Conversion

Razorpay expects amount in **subunits (paise)**:

```js
amount: amount_in_rupees * 100
```

Example:

* ₹500 → `50000`

---