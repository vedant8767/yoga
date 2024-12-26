import React from 'react'
import testimonial from '../assets/testimonial.png'
import '../css/Testimonial.css'

function Testimonial() {
  return (
    <div className='testimonial'>
      <div className="top_testimonial">
        <h1>TESTIMONIALS</h1>
        <h2>what people are saying</h2>
      </div>
      <div className='testimonial_content'>
        <p>
        <span>“</span> The yoga classes help me to relax and de-stress, and I always leave 
        feeling refreshed and energized. I highly recommend 8 Limbs Yoga 
        to anyone who is feeling stressed or overwhelmed. <span>”</span>
        </p>
      </div>
      <div className="testmonialinfo">
        <img src={testimonial} alt="" srcset="" />
        <p>Aashu yadav</p>
      </div>
    </div>
  )
}

export default Testimonial