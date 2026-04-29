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
    <footer className="footer">
      <div className="container footer-container">
        <div className="footer-top">
          <div className="footer-brand">
            <img src={footer_logo} alt="Smooth Luxury Logistics Logo" className="footer-logo" />
            <p className="footer-description">
              Elevating international travel with premium concierge support, security detail, and seamless logistics worldwide.
            </p>
            <div className="footer-socials">
              <a href="https://instagram.com/smooth.luxury.logistics" target="_blank" rel="noopener noreferrer">
                <img src={instagram} alt="Instagram" />
              </a>
              <a href="https://twitter.com/smoothLuxuryLog" target="_blank" rel="noopener noreferrer">
                <img src={x} alt="X" />
              </a>
              <a href="https://facebook.com/smoothluxurylogisticsLtd" target="_blank" rel="noopener noreferrer">
                <img src={fb} alt="Facebook" />
              </a>
              <a href="https://wa.me/14439560723" target="_blank" rel="noopener noreferrer">
                <img src={whatsapp_icon} alt="WhatsApp" />
              </a>
            </div>
          </div>
          
          <div className="footer-links-group">
            <h4>Company</h4>
            <ul>
              <li><Link to="/">Home</Link></li>
              <li><Link to="/about">About Us</Link></li>
              <li><Link to="/faq">FAQ</Link></li>
              <li><Link to="/register">Register</Link></li>
              <li><Link to="/login">Login</Link></li>
            </ul>
          </div>
          
          <div className="footer-links-group">
            <h4>Services</h4>
            <ul>
              <li><Link to="/services">All Services</Link></li>
              <li><Link to="/fleet">Luxury Fleet</Link></li>
              <li><Link to="/security">Security Detail</Link></li>
              <li><Link to="/tours">Guided Tours</Link></li>
              <li><span onClick={handleApplyClick} className="footer-apply-btn">Apply for Visa</span></li>
            </ul>
          </div>
          
          <div className="footer-contact">
            <h4>Contact Us</h4>
            <div className="contact-item">
              <strong>USA Office:</strong>
              <p>8707 Harford Rd Suite A4, Parkville, MD 21234</p>
            </div>
            <div className="contact-item">
              <strong>Nigeria Office:</strong>
              <p>40F Oba Dosumu Street, GRA Ikeja, Lagos, Nigeria</p>
            </div>
            <div className="contact-item">
              <strong>Email:</strong>
              <p><a href="mailto:info@smoothluxurylogistics.com">info@smoothluxurylogistics.com</a></p>
            </div>
            <div className="contact-item">
              <strong>Phone:</strong>
              <p><a href="tel:443-956-0723">+1 (443) 956-0723</a></p>
            </div>
          </div>
        </div>
        
        <div className="footer-bottom">
          <p>&copy; {new Date().getFullYear()} Smooth Luxury Logistics. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
