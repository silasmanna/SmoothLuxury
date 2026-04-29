import React from "react";
import { Link } from "react-router-dom";
import "./Bottom.css";

const Bottom = () => {
  return (
    <section className="cta-section section-padding">
      <div className="container">
        <div className="cta-content glass-card text-center animate-slide-up">
          <h2>Ready to Travel in Style?</h2>
          <p>
            Contact us today to arrange your personalized travel itinerary, secure your luxury transport, 
            or initiate your visa application process.
          </p>
          <div className="cta-actions mt-4">
            <Link to="/visa-form" className="btn-primary">Apply for Visa</Link>
            <a href="mailto:info@smoothluxurylogistics.com" className="btn-outline">Contact Us</a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Bottom;
