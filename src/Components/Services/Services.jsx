import React from "react";
import "./Services.css";
import TopService from "./TopService";
import Bottom from "../HomePage/Bottom/Bottom";

const serviceItems = [
  {
    title: "Visa on Arrival Support - Individual",
    description:
      "We help individual travelers prepare for Nigeria's Visa on Arrival process by organizing the required details, guiding documentation, and coordinating submission support for a smoother approval experience.",
  },
  {
    title: "Visa on Arrival Support - Groups",
    description:
      "For groups of five or more travelers, we coordinate the process in a more structured way so your team can move with consistency, clarity, and fewer administrative delays.",
  },
  {
    title: "Arrival Airport Facilitation - Meet and Greet",
    description:
      "We provide guided airport arrival support to help travelers move from arrival through immigration and onward to curbside pickup with greater ease and confidence.",
  },
  {
    title: "Departure Airport Facilitation - Individual",
    description:
      "For individual departures, we help streamline the airport experience from check-in through final departure procedures, making the journey out more efficient and less stressful.",
  },
  {
    title: "Departure Airport Facilitation - Groups",
    description:
      "For group departures, we help coordinate a smoother exit process with organized support that keeps travelers moving efficiently through the airport.",
  },
  {
    title: "Luxury SUV Pickup",
    description:
      "We arrange premium airport, hotel, and private-destination pickups with professional drivers so you can travel in comfort, privacy, and style.",
  },
  {
    title: "Luxury SUV Daily Use With Driver",
    description:
      "For clients who need extended mobility, we arrange private driver service with luxury SUV access for business appointments, personal travel, and full-day transportation needs.",
  },
  {
    title: "Hotel Reservation Support",
    description:
      "We assist with hotel booking coordination, helping travelers secure accommodations that align with their itinerary, preferred location, and comfort expectations.",
  },
  {
    title: "Domestic Flight Booking Assistance",
    description:
      "We support domestic travel planning within your destination country by helping coordinate flight options that fit your schedule and wider travel plan.",
  },
  {
    title: "Student Transition Support in the USA",
    description:
      "We help students settle into life in the USA with housing guidance, transportation planning, arrival support, and practical local orientation.",
  },
];

const Services = () => {
  return (
    <>
      <TopService />
      <div className="service">
        <h1>Services</h1>
        <div className="services">
          <h2>Personalized travel support for every stage of your journey</h2>
          <p>
            Our services are designed to make international travel, airport
            movement, and relocation support more organized and more
            comfortable. Whether you need help preparing for arrival in Nigeria,
            arranging transportation, or settling into life in the USA, we
            tailor our support to your needs.
          </p>
        </div>
        {serviceItems.map((item) => (
          <div className="services" key={item.title}>
            <h2>{item.title}</h2>
            <p>{item.description}</p>
          </div>
        ))}
      </div>
      <Bottom />
    </>
  );
};

export default Services;
