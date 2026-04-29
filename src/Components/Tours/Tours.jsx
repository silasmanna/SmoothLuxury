import React from 'react';
import './Tours.css';
import tourUsImg from '../../assets/tour_us.png';
import tourNigeriaImg from '../../assets/tour_nigeria.png';

const Tours = () => {
  return (
    <div className="tours-page animate-fade-in">
      <div className="tours-hero">
        <div className="tours-hero-content">
          <h1>Guided Tours</h1>
          <p>Experience the world's most significant places with curated, luxury itineraries.</p>
        </div>
      </div>

      <div className="container section-padding">
        <div className="tours-intro text-center">
          <h2>Discover With Us</h2>
          <p>
            Smooth Luxury Logistics offers bespoke tour services to significant destinations globally. 
            We handle the logistics, transportation, and planning, allowing you to immerse yourself 
            in the culture, history, and beauty of your chosen destination.
          </p>
        </div>

        <div className="tours-grid">
          <div className="glass-card tour-card animate-slide-up delay-1">
            <div className="tour-img-container">
              <img src={tourUsImg} alt="Tour the USA" className="tour-img" />
            </div>
            <div className="tour-info">
              <h3>United States Tours</h3>
              <p>Explore iconic American destinations with seamless logistics. From the historic monuments of Washington D.C. to the bustling streets of New York City and the cultural richness of Maryland.</p>
              <ul className="tour-highlights">
                <li>✓ Private luxury transportation</li>
                <li>✓ Curated cultural itineraries</li>
                <li>✓ Premium hotel arrangements</li>
              </ul>
            </div>
          </div>

          <div className="glass-card tour-card animate-slide-up delay-2">
            <div className="tour-img-container">
              <img src={tourNigeriaImg} alt="Tour Nigeria" className="tour-img" />
            </div>
            <div className="tour-info">
              <h3>Nigeria Heritage Tours</h3>
              <p>Discover the vibrant heart of Africa. Experience the dynamic energy of Lagos, the political heritage of Abuja, and the rich cultural landmarks spread across the nation.</p>
              <ul className="tour-highlights">
                <li>✓ Secure, chauffeured movement</li>
                <li>✓ Local expert guides</li>
                <li>✓ Exclusive access to heritage sites</li>
              </ul>
            </div>
          </div>

          <div className="glass-card tour-card animate-slide-up delay-3">
            <div className="tour-img-placeholder">
              <i className="luxury-icon">🌍</i>
            </div>
            <div className="tour-info">
              <h3>Worldwide Destinations</h3>
              <p>Have another destination in mind? We provide tour coordination and logistics for significant places in any country of your choice, ensuring a smooth, luxurious experience globally.</p>
              <ul className="tour-highlights">
                <li>✓ Custom itinerary design</li>
                <li>✓ International flight assistance</li>
                <li>✓ Global partner network</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="tours-cta text-center animate-slide-up">
          <h3>Plan Your Next Adventure</h3>
          <p>Let us design a bespoke tour package tailored to your interests and schedule.</p>
          <a href="mailto:info@smoothluxurylogistics.com" className="btn-primary mt-4">Start Planning</a>
        </div>
      </div>
    </div>
  );
};

export default Tours;
