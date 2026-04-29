import React from "react";
import { Link } from "react-router-dom";
import "./Three.css";
import armoredSuv from "../../../assets/armored_suv.png";
import securityImg from "../../../assets/security_detail.png";

const Three = () => {
  return (
    <section className="teaser-section section-padding">
      <div className="container">
        <div className="teaser-grid">
          
          <div className="teaser-card glass-card animate-slide-up">
            <div className="teaser-img-wrapper">
              <img src={armoredSuv} alt="Luxury Fleet" />
            </div>
            <div className="teaser-content">
              <h3>Unmatched Luxury Fleet</h3>
              <p>
                From premium SUVs to B6/B7 armored vehicles, our fleet guarantees comfort, privacy, and safety. 
                Whether you need an airport transfer or daily use with a private driver, we have the perfect vehicle.
              </p>
              <Link to="/fleet" className="btn-outline">Explore Fleet</Link>
            </div>
          </div>

          <div className="teaser-card glass-card animate-slide-up delay-1">
            <div className="teaser-img-wrapper">
              <img src={securityImg} alt="Elite Security Detail" />
            </div>
            <div className="teaser-content">
              <h3>Elite Security Detail</h3>
              <p>
                In exclusive partnership with the <strong>Police Protective Group</strong>, we provide world-class 
                close-protection and security escort services for executives and VIPs globally.
              </p>
              <Link to="/security" className="btn-outline">Learn More</Link>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Three;
