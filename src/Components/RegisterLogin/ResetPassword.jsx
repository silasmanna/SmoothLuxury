import React, { useState } from "react";
import "./Reset.css";

const ResetPassword = () => {
  const [email, setEmail] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
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
      alert("Password reset instructions sent to your email");
    } else {
      alert("Error resetting password");
    }
  };

  return (
    <>
      <div className="full-backgroundR"></div>
      <div className="reset-container">
        <h1>Reset Password</h1>
        <form onSubmit={handleSubmit}>
          <label>
            Email:
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </label>
          <button type="submit">Send Reset Instructions</button>
        </form>
      </div>
    </>
  );
};

export default ResetPassword;
