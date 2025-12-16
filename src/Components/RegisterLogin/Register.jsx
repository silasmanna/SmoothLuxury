import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../../AuthProvider";
import "./Register.css";

const Register = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const { setIsAuthenticated } = useAuth();
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (password !== confirmPassword) {
      alert("Passwords do not match");
      return;
    }

    try {
      console.log("Submitting registration:", {
        firstName,
        lastName,
        email,
        password,
      });

      const response = await fetch("https://db.eneyiclothings.com/users", {
        // const response = await fetch("http://localhost:3000/users", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ firstName, lastName, email, password }),
      });

      console.log("Response status:", response.status);

      if (response.ok) {
        const data = await response.json();
        alert(
          data.message ||
            "User registered successfully, proceed to confirm email"
        );
        navigate("/confirm-email");
      } else {
        const errorData = await response.json();
        console.error("Error data:", errorData);
        alert(errorData.message || "Error registering user");
      }
    } catch (err) {
      console.error("Error registering user:", err);
      alert("Error registering user");
    }
  };

  return (
    <>
      <div className="full-background"></div>
      <div className="register-container">
        <h1>Register</h1>
        <form onSubmit={handleSubmit}>
          <label>
            First Name:
            <input
              type="text"
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
              required
            />
          </label>
          <label>
            Last Name:
            <input
              type="text"
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
              required
            />
          </label>
          <label>
            Email:
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </label>
          <label>
            Password:
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </label>
          <label>
            Confirm Password:
            <input
              type="password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              required
            />
          </label>
          <button type="submit">Register</button>
          <button>
            <Link to="/login">Already Have an Account</Link>
          </button>
        </form>
      </div>
    </>
  );
};

export default Register;
