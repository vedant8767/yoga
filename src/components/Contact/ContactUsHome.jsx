import React from 'react'
import img from '../../assets/th3.jpg'
import '../../css/ContactUsHome.css'


export default function ContactUsHome() {
  return (
    <div className="contact-ushome">
      <div className="overlaycontact">
        <img src={img} alt="Background" />
        <div className="text-container">
          <h1>Contact US</h1>
          <p>Home / Contact us</p>
        </div>
      </div>
    </div>
  );
}

