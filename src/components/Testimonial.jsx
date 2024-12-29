// import React from 'react'
// import testimonial from '../assets/testimonial.png'
// import '../css/Testimonial.css'

// function Testimonial() {
//   return (
//     <div className='testimonial'>
//       <div className="top_testimonial">
//         <h1>TESTIMONIALS</h1>
//         <h2>what people are saying</h2>
//       </div>
//       <div className='testimonial_content'>
//         <p>
//         <span>“</span> The yoga classes help me to relax and de-stress, and I always leave 
//         feeling refreshed and energized. I highly recommend 8 Limbs Yoga 
//         to anyone who is feeling stressed or overwhelmed. <span>”</span>
//         </p>
//       </div>
//       <div className="testmonialinfo">
//         <img src={testimonial} alt="" srcset="" />
//         <p>Aashu yadav</p>
//       </div>
//     </div>
//   )
// }

// export default Testimonial
import React from "react";
import Slider from "react-slick"; // Import React Slick
import "../css/Testimonial.css"; // Import CSS for styling

const Testimonial = () => {
  const settings = {
    dots: true, // Enable dots for navigation
    infinite: true, // Infinite scrolling
    speed: 500, // Transition speed
    slidesToShow: 1, // Show one slide at a time
    slidesToScroll: 1, // Scroll one slide at a time
    autoplay: true, // Enable autoplay
    autoplaySpeed: 3000, // Autoplay interval
    arrows: true, // Enable navigation arrows
    dotsClass: "slick-dots custom-dots", // Custom class for dots
  };

  const testimonials = [
    {
      quote:
        "I was feeling really stressed and overwhelmed at work, and I didn't know what to do. I decided to try yoga at 8 Limbs Yoga, and it's been a lifesaver. The yoga classes help me to relax and de-stress, and I always leave feeling refreshed and energized. I highly recommend 8 Limbs Yoga to anyone who is feeling stressed or overwhelmed.",
      author: "Michael W.",
    },
    {
      quote:
        "Yoga at 8 Limbs Yoga has completely changed my life. The instructors are so supportive, and the classes are designed for people of all levels. I've never felt more at peace.",
      author: "Sarah P.",
    },
    {
      quote:
        "The mindfulness exercises at 8 Limbs Yoga have helped me improve my focus and productivity. I can't recommend them enough!",
      author: "John D.",
    },
  ];

  return (
    <div className="testimonial-container">
      <h1 className="heading">What people are saying.</h1>
      <Slider {...settings}>
        {testimonials.map((testimonial, index) => (
          <div className="testimonial-card" key={index}>
            <div className="stars">
              {Array(5)
                .fill(0)
                .map((_, i) => (
                  <span key={i}>&#9733;</span> // Unicode for star
                ))}
            </div>
            <p className="quote">"{testimonial.quote}"</p>
            <p className="author">- {testimonial.author}</p>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default Testimonial;
