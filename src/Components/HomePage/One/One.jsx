import React from "react";
import { Link } from "react-router-dom";
import "./One.css";

const One = () => {
  return (
    <div className="hero-section">
      <div className="hero-overlay"></div>
      <div className="container hero-content animate-fade-in">
        <h1 className="hero-title animate-slide-up">
          Elevate Your <br />
          <span className="text-gold">International Travel</span>
        </h1>
        <p className="hero-subtitle animate-slide-up delay-1">
          Premium concierge support, luxury transportation, and elite security detail for discerning travelers worldwide.
        </p>
        <div className="hero-actions animate-slide-up delay-2">
          <Link to="/visa-form" className="btn-primary">Apply Now</Link>
          <Link to="/services" className="btn-outline">Explore Services</Link>
        </div>
      </div>
    </div>
  );
};

export default One;
