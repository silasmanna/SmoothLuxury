import React from "react";
import ReactPlayer from "react-player";
import One from "../HomePage/One/One";
import Top from "./Top";
import "./About.css";
import Bottom from "../HomePage/Bottom/Bottom";

const About = () => {
  return (
    <>
      <Top />
      <div className="about">
        <h1>About Smooth Luxury Logistics</h1>
        <div className="video-wrapper">
          <ReactPlayer
            url="https://www.youtube.com/watch?v=Q2UBMnesM3E"
            className="video"
            width="100%"
            height="100%"
          />
        </div>
        <p>
          Smooth Luxury Logistics is a travel support and concierge company
          focused on helping clients move internationally with greater ease,
          confidence, and comfort. We understand that modern travel often
          involves more than booking a flight. It requires planning, timing,
          coordination, and trusted local guidance.
        </p>
        <p>
          Our work centers on practical, premium support for travelers going to
          Nigeria, the USA, and other international destinations. Depending on
          your needs, that may include visa guidance, airport facilitation,
          meet-and-greet support, transportation coordination, and broader
          travel assistance designed around your itinerary.
        </p>
        <p>
          We also provide dedicated support for students transitioning to life
          in the USA. From housing guidance and transportation planning to local
          orientation and settling-in assistance, we help make the adjustment to
          a new environment more manageable and less overwhelming.
        </p>
        <p>
          Whether you are traveling for business, personal reasons, relocation,
          or study, our goal is to make your journey more organized and less
          stressful. We combine attentive service with real-world travel
          coordination so you can focus on the purpose of your trip while we
          help manage the logistics around it.
        </p>

        <div className="contact">
          <h1>Contact Us</h1>
          <h3>USA Office: 8707 Harford Rd Suite A4, Parkville, MD 21234</h3>
          <h3>
            Nigeria Office: 40F Oba Dosumu Street, GRA Ikeja, Lagos, Nigeria
          </h3>
          <a href="mailto:info@smoothluxurylogistics.com, admin@kedrickscribnerfoundation.org">
            <h3>Email: info@smoothluxurylogistics.com</h3>
          </a>
          <a href="tel:443-956-0723">
            <h3>Phone: +1 (443) 956-0723</h3>
          </a>
        </div>
      </div>
      <Bottom />
    </>
  );
};

export default About;
