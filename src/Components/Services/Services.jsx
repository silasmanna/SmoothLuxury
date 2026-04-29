import React from "react";
import "./Services.css";
import { Link } from "react-router-dom";

const serviceCategories = [
  {
    category: "Visa & Immigration",
    items: [
      {
        title: "Visa on Arrival Support - Individual",
        description: "We help individual travelers prepare for Visa on Arrival processes globally by organizing required details, guiding documentation, and coordinating submission support."
      },
      {
        title: "Visa on Arrival Support - Groups",
        description: "For groups of five or more travelers, we coordinate the process structurally so your team can move with consistency, clarity, and zero administrative delays."
      }
    ]
  },
  {
    category: "Airport Facilitation",
    items: [
      {
        title: "Arrival Airport Facilitation - Meet and Greet",
        description: "Guided airport arrival support globally to help travelers move from arrival through immigration and onward to curbside pickup with ease and confidence."
      },
      {
        title: "Departure Airport Facilitation - Individual",
        description: "For individual departures, we streamline the airport experience from check-in through final departure procedures, making the journey out highly efficient."
      },
      {
        title: "Departure Airport Facilitation - Groups",
        description: "For group departures, we help coordinate a smoother exit process with organized support that keeps travelers moving efficiently through any international airport."
      }
    ]
  },
  {
    category: "Luxury Transportation & Fleet",
    items: [
      {
        title: "Luxury SUV Pickup",
        description: "Premium airport, hotel, and private-destination pickups with professional drivers so you can travel in comfort, privacy, and style anywhere in the world."
      },
      {
        title: "Luxury SUV Daily Use With Driver",
        description: "For clients needing extended mobility, we arrange private driver service with luxury SUV access for business appointments and full-day transportation needs."
      },
      {
        title: "Fleet Services - Corporate & Group",
        description: "We provide executive sprinters and luxury buses for corporate teams and group tours, ensuring comfortable and cohesive travel."
      }
    ]
  },
  {
    category: "Armored Vehicles & Security",
    items: [
      {
        title: "Armored Vehicle Service",
        description: "Discreet and secure transportation using B6/B7 armored vehicles for executives and VIPs requiring the highest level of physical security."
      },
      {
        title: "Security Detail & Escort",
        description: "In partnership with the Police Protective Group, we offer elite close-protection and security convoys globally."
      }
    ]
  },
  {
    category: "Tours & Coordination",
    items: [
      {
        title: "Guided Tours",
        description: "Bespoke tour packages and logistical coordination for significant destinations in the USA, Nigeria, and worldwide."
      },
      {
        title: "Hotel Reservation Support",
        description: "We assist with hotel booking coordination, helping travelers secure premium accommodations that align with their itinerary and expectations."
      },
      {
        title: "Domestic Flight Booking Assistance",
        description: "We support domestic travel planning within your destination country by coordinating flight options that fit your schedule perfectly."
      }
    ]
  },
  {
    category: "Relocation Support",
    items: [
      {
        title: "Student Transition Support in the USA",
        description: "We help students settle into life in the USA with housing guidance, transportation planning, arrival support, and practical local orientation."
      }
    ]
  }
];

const Services = () => {
  return (
    <div className="services-page animate-fade-in">
      <div className="services-hero">
        <div className="services-hero-content text-center">
          <h1>Our Services</h1>
          <p>Comprehensive luxury logistics, tailored to your exact needs globally.</p>
        </div>
      </div>

      <div className="container section-padding">
        <div className="services-intro text-center">
          <h2>How We Can Assist You</h2>
          <p>
            From securing your Visa on Arrival to providing armored transport and security detail, 
            Smooth Luxury Logistics offers a complete suite of services to ensure your international 
            movement is flawless.
          </p>
        </div>

        <div className="services-categories">
          {serviceCategories.map((category, idx) => (
            <div key={idx} className="service-category glass-card animate-slide-up">
              <h2 className="category-title">{category.category}</h2>
              <div className="category-items">
                {category.items.map((item, itemIdx) => (
                  <div key={itemIdx} className="service-item">
                    <h3>{item.title}</h3>
                    <p>{item.description}</p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="services-cta text-center animate-slide-up mt-5">
          <h3>Need a Custom Logistics Plan?</h3>
          <p>Reach out to our concierge team to design a bespoke service package for your next journey.</p>
          <Link to="/visa-form" className="btn-primary mt-4" style={{marginRight: '1rem'}}>Apply for Visa</Link>
          <a href="mailto:info@smoothluxurylogistics.com" className="btn-outline mt-4">Contact Concierge</a>
        </div>
      </div>
    </div>
  );
};

export default Services;
