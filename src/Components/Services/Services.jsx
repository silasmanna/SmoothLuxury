import React from "react";
import "./Services.css";
import TopService from "./TopService";
import Bottom from "../HomePage/Bottom/Bottom";

const Services = () => {
  return (
    <>
      <TopService />
      <div className="service">
        <h1>Services</h1>
        <div className="services">
          <h2>Visa On Arrival - Individual</h2>
          <p>
            We "Smooth" the path between you and immigration by gathering your
            information, performing a background check, and collecting payment
            to present to the appropriate immigration services on your behalf
            via our private courier, ensuring you don’t end up at the bottom of
            last week’s applications. This service is primarily available for
            Nigeria, but we can assist with visa-related queries for other
            destinations globally.
          </p>
        </div>
        <div className="services">
          <h2>
            Visa On Arrival Assistance - Groups (5 or More, billed per traveler)
          </h2>
          <p>
            We streamline the immigration process for groups, gathering your
            details and securing the necessary documentation to ensure that your
            arrival goes smoothly. Whether you are traveling to Nigeria or other
            international destinations, we handle the paperwork for you, so you
            can focus on enjoying the journey.
          </p>
        </div>
        <div className="services">
          <h2>
            Arrival - Airport Facilitation - Meet & Greet (Airport Walk-through
            to Curbside Pickup)
          </h2>
          <p>
            We take the hassle out of your arrival by providing a VIP escort
            from the terminal to immigration, ensuring smooth passage through
            customs and immigration checks. We will then safely deliver you to
            your designated driver and destination. Whether it's a hotel, a
            private residence, or a luxury lounge, we make your entry into the
            country as seamless as possible.
          </p>
        </div>
        <div className="services">
          <h2>Departure - Airport Facilitation - Individual</h2>
          <p>
            Ensure that your departure is as smooth as your arrival. We provide
            a full escort from check-in to the gate, ensuring a stress-free exit
            from the country. Whether it's a business trip or vacation, we make
            sure you leave with ease and peace of mind.
          </p>
        </div>
        <div className="services">
          <h2>
            Departure - Airport Facilitation - Groups (5 or More, billed per
            traveler)
          </h2>
          <p>
            For larger groups, we provide a seamless departure process, from
            check-in to gate access. No matter the size of your group, we
            guarantee a smooth, efficient exit from the country with VIP
            services tailored to the group’s needs.
          </p>
        </div>
        <div className="services">
          <h2>Luxury SUV Pickup (within 10 km)</h2>
          <p>
            Enjoy luxury curbside pickup at the airport, hotel, or any private
            destination. Our professional, vetted drivers will ensure you travel
            in comfort and style, with a $75 per hour, per 10 km fee for this
            service. Additional security services are available upon request.
          </p>
        </div>
        <div className="services">
          <h2>
            Luxury SUV Extended Use (with Private Driver per Day – 8 Hours)
          </h2>
          <p>
            For extended stays, we offer a luxury SUV with a private driver for
            up to 8 hours per day. This service includes pickup from your chosen
            location and allows you to move around freely, with rates starting
            at $75 per hour, per 10 km. Additional security details can be
            arranged separately.
          </p>
        </div>
        <div className="services">
          <h2>Book Hotel Reservation - Marriott Hotel</h2>
          <p>
            We take the guesswork out of booking accommodations by offering
            access to top hotels worldwide, such as the Marriott Hotel. Whether
            you're traveling for business or leisure, we ensure you're centrally
            located, near key meetings or attractions, so you can enjoy your
            stay without worrying about logistics.
          </p>
        </div>
        <div className="services">
          <h2>Travel Planning Assistance - Book Domestic Flights</h2>
          <p>
            Smooth Luxury Logistics assists with booking domestic flights for
            travel within your destination country. We also offer off-market
            pricing, providing the best rates available for domestic travel,
            making it easier for you to navigate your travels without breaking
            the bank.
          </p>
        </div>
        <div className="services">
          <h2>Student Services - Settling Down in the USA</h2>
          <p>
            For international students coming to the USA, we offer a range of
            services to help you settle in smoothly. From securing housing,
            arranging transportation, and guiding you through your first few
            days, to providing local insights and tips on navigating your new
            campus and city, we make sure you feel at home as you start your
            academic journey.
          </p>
        </div>
      </div>
      <Bottom />
    </>
  );
};

export default Services;
