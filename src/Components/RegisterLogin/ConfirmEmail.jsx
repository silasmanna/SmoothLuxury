// src/pages/ConfirmEmail.js
import React, { useEffect, useState } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import "./ConfirmEmail.css";

const ConfirmEmail = () => {
  const [isConfirmed, setIsConfirmed] = useState(false);
  const [loading, setLoading] = useState(true);
  const [email, setEmail] = useState(null);
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();

  useEffect(() => {
    const confirmEmail = async () => {
      const token = searchParams.get("token");

      //   if (!token) {
      //     alert("Invalid confirmation link.");
      //     navigate("/"); // Redirect to home if no token is present
      //     return;
      //   }

      try {
        const response = await fetch(
          `https://db.eneyiclothings.com/confirm-email?token=${token}`,
          {
            method: "POST",
          }
        );

        const data = await response.json();

        if (response.ok) {
          setIsConfirmed(true);
          setEmail(data.email);
          alert(
            data.message || "Email confirmed successfully. You can now log in."
          );
        } else {
          alert(data.message || "Error confirming email.");
        }
      } catch (err) {
        console.error("Error confirming email:", err);
        alert("Error confirming email.");
      } finally {
        setLoading(false);
      }
    };

    confirmEmail();
  }, [searchParams, navigate]);

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div className="confirmation-container">
      <h1>Email Confirmation</h1>
      {!isConfirmed ? (
        <div>
          <p>
            Your email ({email}) has been confirmed. You can now go to the
            homepage.
          </p>
          <button onClick={() => navigate("/login")}>Proceed to Login</button>
        </div>
      ) : (
        <p>Confirming your email, please wait...</p>
      )}
    </div>
  );
};

export default ConfirmEmail;
