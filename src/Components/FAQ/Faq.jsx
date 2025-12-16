import React, { useState } from "react";
import "./Faq.css";
import TopFaq from "./TopFaq";
import Bottom from "../HomePage/Bottom/Bottom";

const Faq = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const questionsAnswers = [
    {
      question: "WHAT IS A VISA?",
      answer:
        "A visa is a document which allows someone to travel into a specific country and stay there for a set period of time. Generally, a visa may only be issued at the High Commission or Embassy of the country. Visas may be stamped or glued directly into a passport or in some instances may be issued electronically. Some countries require everyone who enters to obtain a visa, while others have what are known as reciprocal agreements with certain countries that waive visa requirements. A visa may allow one, two or multiple entries before the expiration date of the visa. It is important to research visa requirements before traveling internationally to avoid any issues with border control officials and airlines. If a destination country requires a visa and the traveler does not have it in his/her passport, the airline may refuse to allow the traveler board their plane.",
    },
    {
      question:
        "WHAT IS THE DIFFERENCE BETWEEN VISA VALIDITY AND MAXIMUM STAY?",
      answer:
        "The validity of a given visa represents the dates that the visa is effective. For instance, if a visa for Nigeria is valid for 90 days, you must enter Nigeria before the 90-day period expires. Maximum stay is the time allotted for stay in the country.",
    },
    {
      question:
        "DOES SMOOTH LUXURY LOGISTICS GUARANTEE THAT I WILL RECEIVE MY VISA OR PASSPORT BY A CERTAIN DATE?",
      answer:
        "Smooth Luxury Logistics will make every effort to ensure that you get your passport or visa in time for your trip. Any processing times listed on our website are provided by the Nigeria High Commission under normal circumstances. Smooth Luxury Logistics cannot always guarantee, however, that your passport or visa will be returned to you by a certain date, because ultimately the release of your visa or passport is entirely at the discretion of the Nigeria High Commission. When the amount of visa and passport processing requests increases drastically, this can translate into longer processing times. Also, processing officers, may at their sole discretion request additional documents. In such cases the processing time will also be extended. Last minute updates on closure dates related to national holidays or other public events as well as equipment failure can also trigger delays. Such last-minute occurrences are impossible to predict and may extend the processing times. Nevertheless, at Smooth Luxury Logistics we do our absolute best to get your paperwork processed on time and without delay.",
    },
    {
      question: "WHAT IS A PASSPORT?",
      answer:
        "A passport is a document, normally in the form of a small book that has several functions. A passport enables a person to travel outside the borders of their home country. A passport does not automatically grant the holder the right to enter any country. A passport also functions as proof of citizenship, so a person holding a Nigerian Passport is internationally recognized as a Nigerian citizen. In cases when visas are required, the visa stamps or stickers are placed on the pages of the passport. Border control officials will also stamp the pages of the passport with entry and exit stamps upon entering or exiting a country.",
    },
    {
      question: "WHAT IS VISA ON ARRIVAL?",
      answer:
        "Nigeria Visa on Arrival is a class of short visit visa issued at the port of entry. The facility is available to frequently travelled High Net Worth Investors and Intending Visitors who may not be able to obtain visa at the Nigerian Missions/Embassies in their countries of residence due to the absence of a Nigerian mission in those countries or exigencies of urgent business travels.",
    },
    {
      question: "HOW DO I GET A VISA ON ARRIVAL APPROVAL LETTER?",
      answer: "Through email or your representative/contact in Nigeria.",
    },
    {
      question: "WHAT IS VISA APPROVAL LETTER?",
      answer:
        "Visa Approval Letter is a document (approved by the Nigeria Immigration Service Headquarters) that allows a traveler to proceed to Nigeria to pick up entry visa at the point of entry.",
    },
    {
      question: "HOW LONG DOES IT TAKE TO GET THE APPROVAL LETTER?",
      answer:
        "Visa Approval Letter normally takes 2 (48 hours) working days to process and emailed to you and your representative/contact who applied on your behalf in Nigeria.",
    },
    {
      question: "HOW DO I RECEIVE MY VISA APPROVAL LETTER?",
      answer: "Through email or your representative/contact in Nigeria.",
    },
    {
      question: "ARE THERE ANY RESTRICTIONS WITH THIS TYPE OF VISA?",
      answer: "Yes, Visa on Arrival is not valid for employment or residence.",
    },
    {
      question: "DO YOU REQUIRE A SCAN OF MY PASSPORT DATA PAGE?",
      answer: "Yes, a scanned copy of your passport data page is required.",
    },
    {
      question: "WHAT IS THE MINIMUM VALIDITY FOR MY PASSPORT?",
      answer:
        "Your passport must be at least six (6) months valid to apply for Nigerian visa.",
    },
    {
      question:
        "WHAT ARE THE PROCEDURES AT THE NIGERIA AIRPORTS/PORTS OF ENTRY?",
      answer:
        "Upon arrival at the port of entry proceed to Visa on Arrival section for Approval verification, biometric enrollment, and issuance of entry Visa. You will be required to present your approval letter, passport, evidence of payment, evidence of accommodation in Nigeria and return ticket.",
    },
    {
      question: "SHOULD I PROVIDE EXACT DATE OF ARRIVAL?",
      answer:
        "Not necessarily, but must be within the date provided in your itinerary.",
    },
    {
      question:
        "HOW LONG IN ADVANCE SHOULD I APPLY FOR A VISA APPROVAL LETTER?",
      answer: "Should not exceed validity of Visa Approval Letter of 14 days.",
    },
    {
      question:
        "CAN I TRAVEL WITHOUT APPROVAL LETTER AND GET THE VISA WHEN I ARRIVE?",
      answer:
        "No, Approval letter must be obtained before proceeding to Nigeria.",
    },
    {
      question: "WHAT CREDIT/DEBIT CARDS ARE ACCEPTED FOR ONLINE PAYMENT?",
      answer: "Master Card and Visa cards are acceptable.",
    },
    {
      question: "HOW SAFE ARE MY CARD DETAILS?",
      answer:
        "For highly secure online payment transaction, we use Secure Socket Layer (SSL) along with encryption to keep your credit card details safe. With this technology, transmission of card details over the internet is always encrypted.",
    },
    {
      question:
        "WHAT IF I CHANGE MY FLIGHT AND ARRIVE AT ANOTHER AIRPORT IN NIGERIA?",
      answer:
        "It advisable to stick to flight itinerary submitted at the time of applying.",
    },
  ];

  const toggleAnswer = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <>
      <TopFaq />
      <div className="faq-container">
        <h1>Frequently Asked Questions</h1>
        <div className="faq">
          {questionsAnswers.map((qa, index) => (
            <div key={index} className="faq-item">
              <div
                className={`faq-question ${
                  activeIndex === index ? "active" : ""
                }`}
                onClick={() => toggleAnswer(index)}
              >
                {qa.question}
              </div>
              {activeIndex === index && (
                <div className="faq-answer">{qa.answer}</div>
              )}
            </div>
          ))}
        </div>
      </div>
      <Bottom />
    </>
  );
};

export default Faq;

const FAQ = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const questionsAnswers = [
    {
      question: "What is your return policy?",
      answer:
        "Our return policy allows returns within 30 days of purchase with a receipt.",
    },
    {
      question: "How do I track my order?",
      answer:
        "You can track your order using the tracking number provided in your confirmation email.",
    },
    {
      question: "Do you offer international shipping?",
      answer: "Yes, we offer international shipping to select countries.",
    },
    {
      question: "How can I contact customer support?",
      answer:
        "You can contact customer support via email at support@example.com or call us at 123-456-7890.",
    },
  ];

  const toggleAnswer = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };
};
