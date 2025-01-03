import React from 'react'
import { FaEnvelope, FaPhone,  FaMapMarkerAlt } from 'react-icons/fa';
import '../../css/ContactUs.css'
import ContactUsHome from './ContactUsHome';

export default function ContactUs() {
  return (
    <div className="contacpage">
        {/* <ContactUsHome/> */}
        <h1>Contact 8 Limbs Yoga Studio</h1>
        <div classNameName='contactus2'>
        <div className="container5">
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
    <iframe 
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3151.835434509375!2d144.95373631531665!3d-37.8172099797517!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad65d43f1f19911%3A0x5045675218ce6e0!2sMelbourne%20VIC%2C%20Australia!5e0!3m2!1sen!2sin!4v1694450679015!5m2!1sen!2sin" 
                    allowfullscreen="" 
                    loading="lazy" 
                    referrerpolicy="no-referrer-when-downgrade">
                    </iframe>
    </div>
  )
}
