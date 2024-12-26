import React from 'react'
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import '../css/Trainner.css'


function Tranniner() {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 2,
        autoplay: true,
        autoplaySpeed: 3000,
      };
    
      const images = [
        {img:'https://www.kevinashleyphotography.com/wp-content/uploads/2015/11/person(pp_w480_h610).jpg',name:'Pranit Patil',designation:'ceo/founder'},
        {img:'https://www.kevinashleyphotography.com/wp-content/uploads/2015/11/person(pp_w480_h610).jpg',name:'Pranit Patil',designation:'ceo/founder'},
        {img:'https://www.kevinashleyphotography.com/wp-content/uploads/2015/11/person(pp_w480_h610).jpg',name:'Pranit Patil',designation:'ceo/founder'},
      ];
  return (
    <div className='trainner'>
        <div className="trainner_content">
            <h1>TRAINER:</h1>
            <h2>Our Awesome Yoga Teachers</h2>
            <p>At 8 Limbs Yoga Studio, we take pride in presenting our team of
                 experienced yoga instructors, who are dedicated to guiding students on 
                 their journey of self-discovery through yoga. Our instructors are not 
                 only certified and skilled but also deeply committed to sharing the transformative essence
                  of yoga with passion and expertise. They are integral to our renowned Yoga Teacher Training
                   Program, where students dive into the ancient wisdom
                 of yoga within the tranquil ambiance of our studio.</p>
        </div>
        <div className="trainner_carosal">
            <Slider {...settings}>
            {images.map((image, index) => (
            <div key={index} className='trainnercard'>
                    <img
                    src={image.img}
                    alt={`Slide ${index}`}
                    style={{ width: '100%', borderRadius: '10px' }}
                    />
                    <div className="overlap">
                        <div className="overlapcontent">
                        <h1>{image.name}</h1>
                        <h2>{image.designation}</h2>
                        </div>
                    </div>
            </div>
            ))}
        </Slider>
        </div>
    </div>
  )
}

export default Tranniner
