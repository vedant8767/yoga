import React, { useState } from "react";
import '../../css/Faq.css'

const FAQs = [
  {
    question: "How to book a class?",
    answer: "You can book a class through our website or mobile app by selecting your desired time slot.",
  },
  {
    question: "What are the benefits of this program?",
    answer: "This program improves flexibility, mental clarity, and overall well-being.",
  },
  {
    question: "How do I select nearby studio?",
    answer: "Our app/website shows a list of nearby studios based on your location.",
  },
  {
    question: "How do I contact to know more information?",
    answer: "You can reach out via email, phone, or through the contact form on our website.",
  },
  {
    question: "Can this program help with weight loss?",
    answer: "Yes, consistent practice can help with weight management.",
  },
  {
    question: "Do I need special diet while enrolling in the program?",
    answer: "A balanced diet is recommended, but no special diet is mandatory.",
  },
];

const Faq = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="faq-container">
      <div className="faqleft">
        <img src="https://s3-alpha-sig.figma.com/img/7a02/12f9/2552b9f9a663cf3c0de85ffdd575d3d8?Expires=1736121600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=ifIEqtg1IoSp8jvzhAkiECMpn~KbqftbrjEHvAfQVBp6rhsjSG4ciF39TqhjEjD6VH1uBicattl83a2XuA5Q8TtCSm8Ll0oprF3nVbF~VJ~dmgcN04WapI40V8wfc2jSlYfS5gz3a2P1VldzVHLr6DrOZTrCWmgY0OdSSOyOgczUJsDwqh9VBa4iquAqVidU7weSwo2bbKDatqn~~VbOhnEnTP~4dcOdNQJvr-S856L~gFoVjbNVlaxMfapbEVlnX-ZSENwPDTFCpTUA2gtiIQ5FgGJWjZrY8M46EBwjTTRWMVLpRNcykZrcgfuNWpicJmnnnVCd3XaV~54UU3iwnQ__" alt="" srcset="" />
      </div>
      <div className="faqright">
        <h3 className="faq-title">Have more questions regarding this Program?</h3>
        <div className="faq-list">
          {FAQs.map((faq, index) => (
            <div key={index} className="faq-item">
              <div className="faq-question" onClick={() => toggleFAQ(index)}>
                <span>{faq.question}</span>
                <span className="faq-icon">{activeIndex === index ? "▲" : "▼"}</span>
              </div>
              <div
                className={`faq-answer ${activeIndex === index ? "open" : ""}`}
              >
                <p>{faq.answer}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Faq;
