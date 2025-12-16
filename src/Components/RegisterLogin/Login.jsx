// Login.js
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../../AuthProvider";
import "./Login.css";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { setIsAuthenticated } = useAuth();
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await fetch("https://db.eneyiclothings.com/users/login", {
      // const response = await fetch("http://localhost:3000/users/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email, password }),
    });

    if (response.ok) {
      const data = await response.json();
      localStorage.setItem("token", data.token); // Store token
      setIsAuthenticated(true);
      alert("Login Successful");
      navigate("/"); // Redirect to home or any other page
    } else if (!response.ok) {
      // Handle 400 Bad Request
      const errorData = await response.json();
      alert(errorData.message);
    } else {
      alert("Error logging in");
    }
  };

  return (
    <>
      <div className="full-backgroundL"></div>
      <div className="login-container">
        <h1>Login</h1>
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
          <label>
            Password:
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </label>
          <button type="submit">Login</button>
          <button>
            <Link to="/register">Don't Have an Account</Link>
          </button>
        </form>
      </div>
    </>
  );
};

export default Login;
