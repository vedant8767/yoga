import React from "react";
import "../../css/HowToBook.css";

const HowToBook = () => {
  return (
    <div className="how-to-book">
      <h2>How to Book Your Spot?</h2>
      <div className="steps-container">
        <div className="step-card-wrapper">
          <div className="step-card">
            <div className="step-number">1</div>
            <h3>Apply Online</h3>
            <p>
              Click on the Apply Now link, and you will be redirected to the
              page where you will enter necessary details about yourself.
            </p>
          </div>
        </div>
        <div className="step-card-wrapper">
          <div className="step-card">
            <div className="step-number">2</div>
            <h3>Fill the Form</h3>
            <p>
              Fill the necessary information (your full name, course date,
              course you are applying for, and your address, etc.).
            </p>
          </div>
        </div>
        <div className="step-card-wrapper">
          <div className="step-card">
            <div className="step-number">3</div>
            <h3>Confirmation</h3>
            <p>
              We will review your application form within 7-8 hours and send
              confirmation to your email or WhatsApp.confirmation to your email or WhatsApp.
            </p>
          </div>
        </div>
        <div className="step-card-wrapper">
          <div className="step-card">
            <div className="step-number">4</div>
            <h3>Advance-Deposit</h3>
            <p>
              After confirmation, you need to deposit an advance amount. After
              deposit, your place will be confirmed.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HowToBook;
