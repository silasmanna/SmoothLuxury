import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../../AuthProvider";
import "./Auth.css";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");
  const { login } = useAuth();
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setErrorMsg("");

    try {
      const response = await fetch("https://db.eneyiclothings.com/users/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password }),
      });

      if (response.ok) {
        const data = await response.json();
        login(data.token);
        navigate("/");
      } else {
        const errorData = await response.json();
        setErrorMsg(errorData.message || "Invalid credentials");
      }
    } catch (err) {
      setErrorMsg("Error logging in. Please check your connection.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="auth-page animate-fade-in">
      <div className="container">
        <div className="auth-wrapper glass-card">
          <div className="auth-header text-center">
            <h2>Welcome Back</h2>
            <p>Sign in to manage your luxury logistics.</p>
          </div>
          
          {errorMsg && (
            <div className="inline-message error">
              <span>⚠️</span>
              <p>{errorMsg}</p>
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
            
            <div className="form-group">
              <label>Password</label>
              <div className="input-wrapper">
                <input
                  type={showPassword ? "text" : "password"}
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                  disabled={loading}
                />
                <button 
                  type="button"
                  className="password-toggle"
                  onClick={() => setShowPassword(!showPassword)}
                  tabIndex="-1"
                >
                  {showPassword ? "👁️‍🗨️" : "👁️"}
                </button>
              </div>
            </div>
            
            <button type="submit" className="btn-primary auth-submit-btn mt-4" disabled={loading}>
              {loading ? <span className="spinner spinner-sm"></span> : "Login"}
            </button>
          </form>
          
          <div className="auth-footer text-center">
            <p>Don't have an account? <Link to="/register" className="text-gold">Register</Link></p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
