import React from "react";
import "../../css/Payment.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPaypal } from '@fortawesome/free-brands-svg-icons';

const Payment = () => {
  return (
    <div className="how-to-book1">
      <h2>Register your spot through Paypal or Razorpay</h2>
      <div className="steps-container1">
        {/* Card 1 */}
        <div className="step-card-wrapper1">
          <div className="step-card1">
            <h3>Apply Online</h3>
            <p>
              To book your spot, you need to pay an advance 25% Fee + 3% PayPal Fee. 
              Once we receive the advance fee, we will send you a confirmation email 
              to your mail ID. This amount will be deducted from the course’s total price. 
              The remaining fee can be paid upon arrival.
            </p>
            {/* <FontAwesomeIcon icon={faPaypal} size="2x" /> */}
            <button>Paypal</button>
          </div>
        </div>

        {/* Card 2 */}
        <div className="step-card-wrapper1">
          <div className="step-card1">
            <h3>Register your spot through Razorpay</h3>
            <p>
              To book your spot, you need to pay an advance 25% Fee + 2% RazorPay Fee. 
              Once we receive the advance fee, we will send you a confirmation email 
              to your mail ID. This amount will be deducted from the course’s total price. 
              The remaining fee can be paid upon arrival.
            </p>
            <button>Razorpay</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Payment;
