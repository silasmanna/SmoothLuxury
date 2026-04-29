import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Auth.css";

const ResetPassword = () => {
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");
  const [errorMsg, setErrorMsg] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setMessage("");
    setErrorMsg("");

    try {
      const response = await fetch(
        "https://db.eneyiclothings.com/users/reset-password",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ email }),
        }
      );

      if (response.ok) {
        setMessage("Password reset instructions have been sent to your email.");
      } else {
        const errorData = await response.json();
        setErrorMsg(errorData.message || "Error resetting password");
      }
    } catch (error) {
      setErrorMsg("Error processing request. Please check your connection.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="auth-page animate-fade-in">
      <div className="container">
        <div className="auth-wrapper glass-card">
          <div className="auth-header text-center">
            <h2>Reset Password</h2>
            <p>Enter your email to receive recovery instructions.</p>
          </div>
          
          {errorMsg && (
            <div className="inline-message error">
              <span>⚠️</span>
              <p>{errorMsg}</p>
            </div>
          )}
          {message && (
            <div className="inline-message success">
              <span>✓</span>
              <p>{message}</p>
            </div>
          )}
          
          <form onSubmit={handleSubmit} className="auth-form">
            <div className="form-group">
              <label>Email Address</label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                disabled={loading}
              />
            </div>
            <button type="submit" className="btn-primary auth-submit-btn mt-4" disabled={loading}>
              {loading ? <span className="spinner spinner-sm"></span> : "Send Reset Instructions"}
            </button>
          </form>
          
          <div className="auth-footer text-center">
            <p>Remember your password? <Link to="/login" className="text-gold">Login</Link></p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ResetPassword;
