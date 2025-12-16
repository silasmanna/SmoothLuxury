// PayPalButton.jsx

import React from "react";
import { PayPalButtons, PayPalScriptProvider } from "@paypal/react-paypal-js";

const PayPalButton = ({ amount, onPaymentSuccess }) => {
  const initialOptions = {
    "client-id":
      "AeIhdD-qarlOsLy-aVGNr-5lxhXNSz0Ne3WUp_mUa3PHf3Vha32z71-eoVQqJrTopB3iDcT6vAHhas2_",
    //   "AeeDSnOOaj7ua16IPTuG8M6Jt5qYCq0sowGifF9RXYoLpmoNsjI8hvf9doZ4H0VhKJ4VUEKZhmsOj_L-",
    currency: "USD",
    intent: "capture",
  };
  console.log("PayPal Button Amount:", amount); // Debugging line to check amount

  return (
    <PayPalScriptProvider options={initialOptions}>
      <PayPalButtons
        createOrder={(data, actions) => {
          return actions.order.create({
            purchase_units: [
              {
                amount: {
                  value: amount, // Use the dynamic amount passed as a prop
                },
              },
            ],
          });
        }}
        onApprove={(data, actions) => {
          return actions.order.capture().then((details) => {
            onPaymentSuccess(details);
          });
        }}
      />
    </PayPalScriptProvider>
  );
};

export default PayPalButton;
