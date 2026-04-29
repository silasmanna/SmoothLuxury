import React from 'react';
import './Security.css';
import securityImg from '../../assets/security_detail.png';

const Security = () => {
  return (
    <div className="security-page animate-fade-in">
      <div className="security-hero">
        <div className="security-hero-content">
          <h1>Security Detail</h1>
          <p>Uncompromising protection for peace of mind, anywhere you travel.</p>
        </div>
      </div>

      <div className="container section-padding">
        <div className="security-intro text-center">
          <h2>Elite Protection Services</h2>
          <p>
            Smooth Luxury Logistics offers comprehensive close-protection and security escort services 
            for executives, VIPs, and families. Whether you require a single bodyguard or a full security convoy, 
            our tailored solutions ensure your absolute safety.
          </p>
        </div>

        <div className="security-partner glass-card animate-slide-up">
          <div className="partner-content">
            <h3>In Partnership with Police Protective Group</h3>
            <p>
              We are proud to provide our security services in exclusive partnership with the <strong>Police Protective Group</strong>. 
              Based in the USA and Nigeria, PPG brings decades of law enforcement and specialized tactical experience 
              to private security.
            </p>
            <ul className="security-features">
              <li>✓ Highly trained former law enforcement personnel</li>
              <li>✓ Advanced threat assessment and route planning</li>
              <li>✓ Seamless integration with our luxury transportation fleet</li>
              <li>✓ Available in the US, Nigeria, and worldwide</li>
            </ul>
          </div>
          <div className="partner-img-container">
            <img src={securityImg} alt="Professional Security Detail" className="security-img" />
          </div>
        </div>

        <div className="security-cta text-center animate-slide-up delay-2">
          <h3>Secure Your Journey</h3>
          <p>Contact our discreet security team to arrange protection for your upcoming travel.</p>
          <a href="mailto:info@smoothluxurylogistics.com" className="btn-primary mt-4">Consult with Security Team</a>
        </div>
      </div>
    </div>
  );
};

export default Security;
