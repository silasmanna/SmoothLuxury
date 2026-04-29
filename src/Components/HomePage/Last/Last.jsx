import React from "react";
import "./Last.css";

const reasons = [
  {
    title: "Global Expertise",
    description: "Whether you are navigating the complexities of Visa on Arrival in Nigeria or requiring elite security detail in the USA, our team possesses the localized knowledge to guarantee a seamless experience.",
    icon: "🌐"
  },
  {
    title: "Uncompromising Privacy",
    description: "We understand the value of discretion. Our services, from armored transport to close-protection, are designed to keep your movements secure and private.",
    icon: "🔒"
  },
  {
    title: "Bespoke Solutions",
    description: "We do not offer one-size-fits-all packages. Every itinerary, vehicle selection, and security plan is meticulously tailored to your specific schedule and risk profile.",
    icon: "✨"
  },
  {
    title: "24/7 Concierge Support",
    description: "Our dedicated support team is available around the clock to handle unexpected changes, flight delays, or sudden itinerary additions.",
    icon: "⏱️"
  }
];

const Last = () => {
  return (
    <section className="why-choose-us section-padding">
      <div className="container">
        <div className="section-header text-center animate-slide-up">
          <h2 className="section-title">Why Choose Smooth Luxury</h2>
          <p className="section-subtitle">Excellence, discretion, and reliability at every touchpoint.</p>
        </div>

        <div className="reasons-grid">
          {reasons.map((reason, index) => (
            <div key={index} className={`reason-card animate-slide-up delay-${(index % 4) + 1}`}>
              <div className="reason-icon">{reason.icon}</div>
              <h3>{reason.title}</h3>
              <p>{reason.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Last;
