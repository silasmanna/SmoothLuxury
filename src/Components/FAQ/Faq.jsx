import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Faq.css";

const faqs = [
  {
    question: "Do you offer services outside of Nigeria and the USA?",
    answer: "Yes. While we have dedicated offices in the USA and Nigeria, we provide worldwide travel facilitation, security detail, and luxury transport services for any destination of your choice."
  },
  {
    question: "What is included in your Visa on Arrival support?",
    answer: "We guide you through the document preparation, coordinate the submission, and help ensure there are no administrative delays. This service is available globally, regardless of your origin or destination."
  },
  {
    question: "Are your security personnel armed?",
    answer: "Our security detail operates in strict compliance with local laws. In partnership with the Police Protective Group, we utilize former law enforcement and specialized tactical personnel to provide elite close-protection."
  },
  {
    question: "What type of vehicles are in your luxury fleet?",
    answer: "Our fleet includes premium SUVs (such as Cadillac Escalades and Range Rovers), executive Mercedes-Benz Sprinters for groups, and B6/B7 fully armored vehicles for high-risk secure movement."
  },
  {
    question: "Can I book a bespoke tour package for my family?",
    answer: "Absolutely. We curate bespoke guided tours in the USA, Nigeria, and worldwide, handling all logistics, luxury transport, and premium hotel arrangements so you can simply enjoy the experience."
  },
  {
    question: "What forms of payment do you accept?",
    answer: "We accept PayPal and all major credit cards securely processed through our online booking system."
  }
];

const Faq = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleFaq = (index) => {
    if (activeIndex === index) {
      setActiveIndex(null);
    } else {
      setActiveIndex(index);
    }
  };

  return (
    <div className="faq-page animate-fade-in">
      <div className="faq-hero">
        <div className="faq-hero-content text-center">
          <h1>Frequently Asked Questions</h1>
          <p>Clear answers to help you plan your journey with confidence.</p>
        </div>
      </div>

      <div className="container section-padding">
        <div className="faq-container">
          {faqs.map((faq, index) => (
            <div 
              key={index} 
              className={`faq-item glass-card animate-slide-up delay-${(index % 4) + 1}`}
            >
              <div 
                className="faq-question" 
                onClick={() => toggleFaq(index)}
              >
                <h3>{faq.question}</h3>
                <span className={`faq-toggle ${activeIndex === index ? 'open' : ''}`}>
                  {activeIndex === index ? '−' : '+'}
                </span>
              </div>
              <div className={`faq-answer ${activeIndex === index ? 'show' : ''}`}>
                <p>{faq.answer}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="faq-cta text-center animate-slide-up">
          <h3>Still have questions?</h3>
          <p>Our concierge team is available to provide tailored information.</p>
          <a href="mailto:info@smoothluxurylogistics.com" className="btn-primary mt-4">Contact Support</a>
        </div>
      </div>
    </div>
  );
};

export default Faq;
