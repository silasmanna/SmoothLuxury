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
        <h1>About</h1>
        <div className="video-wrapper">
          <ReactPlayer
            url="https://www.youtube.com/watch?v=Q2UBMnesM3E"
            className="video"
            width="100%"
            height="100%"
          />
        </div>
        <p>
          At Smooth Luxury Logistics, we provide a full spectrum of
          international travel consulting and concierge services to ensure your
          journey is seamless from start to finish. We understand that
          navigating travel logistics in today’s world can be complex, with new
          challenges emerging every day. Whether you're traveling for business,
          leisure, or relocating abroad, our expert team is here to guide you
          every step of the way.
        </p>
        <p>
          Our services cover a wide range of global destinations, helping you
          plan and execute your travel experience smoothly, no matter where
          you're headed. We offer personalized travel assistance that
          encompasses every aspect of your trip — from booking flights and
          luxury transportation to providing local guidance upon arrival. Our
          goal is to eliminate the stress and uncertainty of travel, ensuring
          that you can focus on what matters most: enjoying your journey.
        </p>
        <p>
          For students traveling to the USA or those already there, we offer
          specialized support to ensure a smooth transition into your new
          environment. From securing accommodation to navigating your new city
          and campus, our team is dedicated to making sure you feel comfortable
          and confident in your new surroundings. We assist with transportation,
          orientation, and the essential details that make settling down easier
          so that you can focus on your studies and personal growth.
        </p>
        <p>
          Whether you’re preparing for a business trip, planning a vacation, or
          relocating for academic purposes, Smooth Luxury Logistics is your
          trusted partner in global travel. We provide tailored services that
          align with your unique needs, offering VIP treatment and first-class
          support no matter where you’re traveling. Let us handle the details of
          your travel so you can relax and focus on what lies ahead.
        </p>

        <div className="contact">
          <h1>Contact Us</h1>
          <h3>Address (USA): 8707 Harford Rd Suite A4 Parkville, MD 21234</h3>
          <h3>
            Address (Nigeria): 40f Oba Dosumu Street, GRA Ikeja Lagos, Nigeria
          </h3>
          <a href="mailto:info@smoothluxurylogistics.com, admin@kedrickscribnerfoundation.org">
            <h3>Email: info@smoothluxurylogistics.com</h3>
          </a>
          <a href="tel:443-956-0723">
            <h3>Phone: 443-956-0723</h3>
          </a>
        </div>
      </div>
      <Bottom />
    </>
  );
};

export default About;
