import React, { useEffect, useState } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import "./Auth.css";

const ConfirmEmail = () => {
  const [isConfirmed, setIsConfirmed] = useState(false);
  const [loading, setLoading] = useState(true);
  const [email, setEmail] = useState(null);
  const [errorMsg, setErrorMsg] = useState("");
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();

  useEffect(() => {
    const confirmEmail = async () => {
      const token = searchParams.get("token");

      if (!token) {
        setLoading(false);
        return;
      }

      try {
        const response = await fetch(
          `https://db.eneyiclothings.com/confirm-email?token=${token}`,
          {
            method: "GET",
          }
        );

        const data = await response.json();

        if (response.ok) {
          setIsConfirmed(true);
          setEmail(data.email);
        } else {
          setErrorMsg(data.message || "Error confirming email.");
        }
      } catch (err) {
        setErrorMsg("Error confirming email.");
      } finally {
        setLoading(false);
      }
    };

    confirmEmail();
  }, [searchParams]);

  return (
    <div className="auth-page animate-fade-in">
      <div className="container">
        <div className="auth-wrapper glass-card text-center">
          <div className="auth-header">
            <h2>Email Confirmation</h2>
          </div>
          
          {errorMsg && (
            <div className="inline-message error">
              <span>⚠️</span>
              <p>{errorMsg}</p>
            </div>
          )}
          
          {loading ? (
            <div className="text-center">
              <span className="spinner spinner-gold mb-3"></span>
              <p className="text-white-muted">Confirming your email, please wait...</p>
            </div>
          ) : isConfirmed ? (
            <div>
              <div className="inline-message success mb-4" style={{justifyContent: 'center'}}>
                <span>✓</span>
                <p>Email successfully verified</p>
              </div>
              <p className="text-white-muted mb-4">
                Your email {email && <strong>({email})</strong>} has been successfully confirmed. 
                You now have full access to Smooth Luxury Logistics services.
              </p>
              <button className="btn-primary auth-submit-btn mt-4" onClick={() => navigate("/login")}>
                Proceed to Login
              </button>
            </div>
          ) : !errorMsg ? (
            <div>
              <p className="text-white-muted mb-4">
                Please check your email for the confirmation link to verify your account.
              </p>
              <button className="btn-outline mt-4" onClick={() => navigate("/")}>
                Return to Home
              </button>
            </div>
          ) : (
             <button className="btn-outline mt-4" onClick={() => navigate("/login")}>
                Return to Login
             </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default ConfirmEmail;
