import React from "react";
import { Link } from "react-router-dom";
import "./Two.css";

const services = [
  {
    icon: "🛂",
    title: "Visa & Immigration",
    description: "Guidance and coordination for Visa on Arrival for all destinations."
  },
  {
    icon: "✈️",
    title: "Airport Facilitation",
    description: "Seamless meet-and-greet support from arrival gate to your destination."
  },
  {
    icon: "🚙",
    title: "Luxury Transportation",
    description: "Premium SUVs and executive sprinters with professional chauffeurs."
  },
  {
    icon: "🛡️",
    title: "Security Detail",
    description: "Elite close-protection services in partnership with Police Protective Group."
  },
  {
    icon: "🗺️",
    title: "Curated Tours",
    description: "Bespoke guided tours in the USA, Nigeria, and worldwide."
  },
  {
    icon: "🎓",
    title: "Relocation & Transition",
    description: "Dedicated settling-in support for students and executives."
  }
];

const Two = () => {
  return (
    <section className="services-preview section-padding">
      <div className="container">
        <div className="section-header text-center animate-slide-up">
          <h2 className="section-title">Our Expertise</h2>
          <p className="section-subtitle">Comprehensive luxury logistics tailored to your journey, wherever it takes you.</p>
        </div>

        <div className="services-grid">
          {services.map((service, index) => (
            <div 
              key={index} 
              className={`glass-card service-card animate-slide-up delay-${(index % 3) + 1}`}
            >
              <div className="service-icon">{service.icon}</div>
              <h3>{service.title}</h3>
              <p>{service.description}</p>
            </div>
          ))}
        </div>

        <div className="text-center mt-5">
          <Link to="/services" className="btn-outline">View All Services</Link>
        </div>
      </div>
    </section>
  );
};

export default Two;
