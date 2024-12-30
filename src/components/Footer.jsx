import React from 'react'
import '../css/Footer.css'
import footerlogo from '../assets/footerlogo.png'
import { FaEnvelope, FaPhone, FaWhatsapp, FaInstagram, FaFacebook } from 'react-icons/fa';

function Footer() {
  return (
    <footer className='footer'>
        <div className="footerpart1">
            <div className="footerinfo">
                <img src={footerlogo} alt="" srcset="" />
                <h1>8 LIMBS YOGA STUDIO</h1>
                <p>At 8 Limbs Yoga Studios, we merge ancient wisdom with contemporary lifestyles, 
                    fostering a space where wellness, knowledge, and expertise converge to inspire a
                     transformative yoga journey. 
                    Join us and embark on a path of holistic well-being and self-discovery.</p>
                <div className='socialmedia'>
                    <FaPhone id='phone' className='icon'/><span><p>+91 75586 60993</p></span>
                </div>
                <div className='socialmedia'><FaEnvelope className='icon'/><span><p>info@example.com</p></span></div>
                <div className='socialmedia'>
                    <FaFacebook className='icon'/>
                    <FaInstagram className='icon'/>
                    <FaWhatsapp className='icon'/>
                </div>
            </div>
            <div className="footermenu">
                <h1>Menu</h1>
                <div className="allmenus">
                    <div className="meunpart1">
                        <p><a href="">Diet and Nutrition</a></p>
                        <p><a href="">Ariel Yoga</a></p>
                        <p><a href="">Face Yoga</a></p>
                        <p><a href="">Short Term Courses</a></p>
                        <p><a href="">Regular Yoga Classes</a></p>
                        <p><a href="">Meditation</a></p>
                        <p><a href="">Sound Healing</a></p>
                    </div>
                    <div className="meunpart2">
                        <p><a href="">Home</a></p>
                        <p><a href="">About Us</a></p>
                        <p><a href="">Membership</a></p>
                        <p><a href="">Testimonials</a></p>
                        <p><a href="">FAQ</a></p>
                        <p><a href="">Contact Us</a></p>
                    </div>
                </div>
            </div>
            <div className="footercourses">
                <h1>Courses</h1>
                <div className="courses_list">
                    <p><a href="">Stress Management and Relaxation</a></p>
                    <p><a href="">Corporate wellness program</a></p>
                    <p><a href="">Prenatal and Postnatal Program</a></p>
                    <p><a href="">Yoga for Specific Aliments</a></p>
                    <p><a href="">Diploma Courses in Yoga</a></p>
                    <p><a href="">Yoga for Weightloss and Fitness</a></p>
                    <p><a href="">Prenatal and Postnatal Yoga Teacher Training</a></p>
                </div>
            </div>
        </div>
        <div className="footerpart2">
            <div className="locations">
                <h1>Find Our Studios</h1>
                <div className="loactioncard">
                    <p>Shop number 5,6,7, Yashwant Park, near bank of India,
                         Yashvant Viva Twp, Nalasopara East, Vasai-Virar, Mumbai, Maharashtra 401209</p>
                    <button>Get Directions</button>
                </div>
                <div className="loactioncard">
                    <p>Shop No 13, Topaz Center, Tulinj Rd, near Radha Krishna Hotel, Radha Nagar,
                         Ambawadi, Nalasopara East, Mumbai, Nala Sopara, Maharashtra 401209</p>
                    <button>Get Directions</button>
                </div>
            </div>
            <div className="locationpart2">
            <div className="loactioncard">
                    <p>105/106/107 , first floor, dheeraj shopping centre, Evershine City Rd, 
                        Evershine City, Vasai East,
                         Mumbai, Vasai-Virar, Maharashtra 401208</p>
                    <button>Get Directions</button>
                </div>
            </div>
            <div className="exploreteachers">
                    <h1>EXPLORE TEACHER TRAINING</h1>
                    <div className="teachers">
                    <p><a href="">100 Hours Yoga Teacher Training</a></p>
                    <p><a href="">100 Hours Yoga Teacher Training</a></p>
                    <p><a href="">100 Hours Yoga Teacher Training</a></p>
                    <p><a href="">100 Hours Yoga Teacher Training</a></p>
                    <p><a href="">100 Hours Yoga Teacher Training</a></p>
                    <p><a href="">Prenatal and Postnatal Yoga Teacher Training</a></p>
                    <p><a href="">Online Courses</a></p>
                    </div>
            </div>
        </div>
        <div className="footerpart3">
            <div className="footerbottom">
            <p>© 2024 8 Limbs Yoga Studios. All rights reserved. </p>
            <div className="footernav">
                <p><a href="">Refund Policy </a></p>
                <p><a href="">Privacy policy  </a></p>
                <p><a href="">Terms and condition </a></p>
            </div>
            </div>
        </div>
    </footer>
  )
}

export default Footer