import React from "react";
import "./Bottom.css";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../../AuthProvider";

const Bottom = () => {
  const navigate = useNavigate();
  const { isAuthenticated } = useAuth();

  const handleApplyClick = () => {
    if (!isAuthenticated) {
      navigate("/login");
    } else {
      navigate("/service-form");
    }
  };

  return (
    <div className="bottom">
      <h1>Experience A Smooth Journey on Your Next Trip</h1>

      <button onClick={handleApplyClick}>Get Started</button>
    </div>
  );
};

export default Bottom;
