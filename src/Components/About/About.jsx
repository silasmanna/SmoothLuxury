import React from "react";
import ReactPlayer from "react-player";
import "./About.css";

const About = () => {
  return (
    <div className="about-page animate-fade-in">
      <div className="about-hero">
        <div className="about-hero-content text-center">
          <h1>About Us</h1>
          <p>Redefining luxury travel, logistics, and global security.</p>
        </div>
      </div>

      <div className="container section-padding">
        <div className="about-grid">
          <div className="about-text animate-slide-up">
            <h2>Our Mission</h2>
            <p>
              Smooth Luxury Logistics is a premier travel support and concierge company
              focused on helping clients move internationally with greater ease,
              confidence, and absolute comfort. We understand that modern elite travel requires 
              more than simply booking a flight—it demands precise planning, perfect timing,
              flawless coordination, and trusted local guidance.
            </p>
            <p>
              Whether you are an executive traveling to Nigeria, a family touring the USA, 
              or a student transitioning to a new environment, our goal is to remove the friction 
              from your journey.
            </p>
            
            <h3 className="mt-4">The Police Protective Group Partnership</h3>
            <p>
              Security is paramount. That is why we operate in an exclusive partnership with the 
              <strong> Police Protective Group</strong>. Their decades of law enforcement and specialized 
              tactical experience guarantee our clients the highest tier of private security, available 
              in the USA, Nigeria, and worldwide.
            </p>
          </div>
          
          <div className="about-video-container glass-card animate-slide-up delay-1">
            <div className="video-wrapper">
              <ReactPlayer
                url="https://www.youtube.com/watch?v=Q2UBMnesM3E"
                className="video"
                width="100%"
                height="100%"
                controls
              />
            </div>
          </div>
        </div>
      </div>

      <div className="about-contact-section">
        <div className="container section-padding">
          <div className="contact-grid">
            <div className="contact-info animate-slide-up">
              <h2>Contact Our Offices</h2>
              <p>Our concierge and security teams are available to assist you 24/7.</p>
              
              <div className="office-card mt-4">
                <h4>USA Headquarters</h4>
                <p>8707 Harford Rd Suite A4<br />Parkville, MD 21234</p>
                <a href="tel:443-956-0723" className="contact-link">+1 (443) 956-0723</a>
              </div>
              
              <div className="office-card mt-4">
                <h4>Nigeria Office</h4>
                <p>40F Oba Dosumu Street<br />GRA Ikeja, Lagos, Nigeria</p>
              </div>

              <div className="office-card mt-4">
                <h4>General Inquiries</h4>
                <a href="mailto:info@smoothluxurylogistics.com" className="contact-link">info@smoothluxurylogistics.com</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
