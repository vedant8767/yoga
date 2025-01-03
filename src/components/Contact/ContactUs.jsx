import React from 'react'
import { FaEnvelope, FaPhone,  FaMapMarkerAlt } from 'react-icons/fa';
import '../../css/ContactUs.css'

export default function ContactUs() {
  return (
    <div className="contacpage">
        <h1>Contact 8 Limbs Yoga Studio</h1>
        <div classNameName='contactus2'>
        <div className="container1">
        <div className="info-sidebar">
            <div className="info-header">
                <h2>Get in Touch</h2>
                <p>Have questions? We'd love to hear from you. Send us a message and we'll respond as soon as possible.</p>
            </div>
            <div className="contact-info">
                <div>📍 123 Business Avenue, City, Country</div>
                <div>📧 contact@example.com</div>
                <div>📞 (123) 456-7890</div>
            </div>
        </div>
        <div className="contact-form">
            <form>
                <div className="form-group">
                    <label for="name">👤 Name</label>
                    <input type="text" id="name" placeholder="Enter your name"/>
                </div>
                <div className="form-group">
                    <label for="email">📧 Email</label>
                    <input type="email" id="email" placeholder="Enter your email"/>
                </div>
                <div className="form-group">
                    <label for="subject">📜 Subject</label>
                    <input type="text" id="subject" placeholder="Enter subject"/>
                </div>
                <div className="form-group">
                    <label for="message">✉️ Message</label>
                    <textarea id="message" placeholder="Enter your message"></textarea>
                </div>
                <button type="submit">Send Message</button>
            </form>
        </div>
    </div>
    </div>
    </div>
  )
}
