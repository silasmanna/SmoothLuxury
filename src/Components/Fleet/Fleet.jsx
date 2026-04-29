import React from 'react';
import './Fleet.css';
import armoredSuv from '../../assets/armored_suv.png';
import premiumSuv from '../../assets/premium_suv.png';

const Fleet = () => {
  return (
    <div className="fleet-page animate-fade-in">
      <div className="fleet-hero">
        <div className="fleet-hero-content">
          <h1>Luxury Fleet</h1>
          <p>Uncompromising comfort, privacy, and security worldwide.</p>
        </div>
      </div>

      <div className="container section-padding">
        <div className="fleet-intro text-center">
          <h2>Travel with Distinction</h2>
          <p>
            Whether you need a premium SUV for airport transfers or an armored vehicle for high-profile movement, 
            Smooth Luxury Logistics provides world-class fleet services tailored to your exact requirements. 
            Available in the US, Nigeria, and select international destinations.
          </p>
        </div>

        <div className="fleet-grid">
          <div className="glass-card fleet-card animate-slide-up delay-1">
            <div className="fleet-img-container">
              <img src={armoredSuv} alt="Armored SUV" className="fleet-img" />
            </div>
            <div className="fleet-info">
              <h3>Armored Vehicles</h3>
              <p>Discreet, fully armored luxury SUVs (B6/B7 ballistic protection). Essential for secure movement of executives and VIPs, particularly in Nigeria and other high-risk regions.</p>
              <ul className="fleet-features">
                <li>✓ Ballistic glass & reinforced body</li>
                <li>✓ Run-flat tires</li>
                <li>✓ Trained evasive driver included</li>
              </ul>
            </div>
          </div>

          <div className="glass-card fleet-card animate-slide-up delay-2">
            <div className="fleet-img-container">
              <img src={premiumSuv} alt="Premium SUV" className="fleet-img" />
            </div>
            <div className="fleet-info">
              <h3>Premium SUVs</h3>
              <p>Spacious, modern, and impeccably maintained luxury SUVs (e.g., Cadillac Escalade, Range Rover, Chevrolet Suburban). Perfect for corporate travel, daily use, or airport pickup.</p>
              <ul className="fleet-features">
                <li>✓ Climate controlled luxury interior</li>
                <li>✓ Professional chauffeur</li>
                <li>✓ Complimentary Wi-Fi & refreshments</li>
              </ul>
            </div>
          </div>

          <div className="glass-card fleet-card animate-slide-up delay-3">
            <div className="fleet-img-container">
              <img src={premiumSuv} alt="Executive Sprinter" className="fleet-img" />
            </div>
            <div className="fleet-info">
              <h3>Executive Sprinters</h3>
              <p>For groups requiring space without sacrificing luxury. High-roof Mercedes-Benz Sprinters customized for corporate teams, family tours, or event transportation.</p>
              <ul className="fleet-features">
                <li>✓ Captain seating for 8-12 passengers</li>
                <li>✓ Entertainment systems</li>
                <li>✓ Privacy partitions</li>
              </ul>
            </div>
          </div>
        </div>
        
        <div className="fleet-cta text-center">
          <h3>Ready to book your vehicle?</h3>
          <p>Contact us to discuss availability and specific requirements for your destination.</p>
          <a href="mailto:info@smoothluxurylogistics.com" className="btn-primary mt-4">Request a Quote</a>
        </div>
      </div>
    </div>
  );
};

export default Fleet;
