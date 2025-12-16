import React from "react";
import { useNavigate, Link } from "react-router-dom";
import { useAuth } from "../../AuthProvider";
import "./Footer.css";
import footer_logo from "./logo.png";
import instagram from "./ig.png";
import fb from "./fb.png";
import x from "./x.png";
import whatsapp_icon from "./whatsapp.png";

const Footer = () => {
  const navigate = useNavigate();
  const { isAuthenticated } = useAuth();

  const handleApplyClick = () => {
    if (!isAuthenticated) {
      navigate("/login");
    } else {
      navigate("/visa-form");
    }
  };

  return (
    <div className="footer">
      <div className="footer-logo">
        <img src={footer_logo} alt="Logo" />
      </div>
      <ul className="footer-links">
        <Link to="/">
          <li>Home</li>
        </Link>
        <Link to="/about">
          <li>About</li>
        </Link>
        <Link to="/FAQ">
          <li>FAQ</li>
        </Link>
        <Link to="/services">
          <li>Services</li>
        </Link>
        <li onClick={handleApplyClick} style={{ cursor: "pointer" }}>
          Apply
        </li>
      </ul>
      <div className="footer-social-icons">
        <div className="footer-icons-container">
          <a
            href="https://instagram.com/smooth.luxury.logistics"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img className="icon" src={instagram} alt="Instagram" />
          </a>
        </div>
        <div className="footer-icons-container">
          <a
            href="https://twitter.com/smoothLuxuryLog"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img className="icon" src={x} alt="X" />
          </a>
        </div>
        <div className="footer-icons-container">
          <a
            href="https://facebook.com/smoothluxurylogisticsLtd"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img className="icon" src={fb} alt="Facebook" />
          </a>
        </div>
        <div className="footer-icons-container">
          <a
            href="https://wa.me/14439560723"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img className="icon" src={whatsapp_icon} alt="WhatsApp" />
          </a>
        </div>
      </div>
      <div className="footer-copyright">
        <hr />
        <p>Copyright 2024 @ Smooth Luxury Logistics - All Rights Reserved</p>
      </div>
    </div>
  );
};

export default Footer;
