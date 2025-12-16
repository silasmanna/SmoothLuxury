import React from "react";
import { useNavigate } from "react-router-dom";
import PayPalButton from "./PayPalButton";

const PaymentPage = () => {
  const navigate = useNavigate();

  const handlePaymentSuccess = (details) => {
    // You can also save the transaction details to your server here
    alert(`Transaction completed by ${details.payer.name.given_name}`);
    navigate("/payment-success");
  };

  return (
    <div>
      <h1>Payment Page</h1>
      <PayPalButton onPaymentSuccess={handlePaymentSuccess} />
    </div>
  );
};

export default PaymentPage;
