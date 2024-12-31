import React, { useState } from 'react';
import { ChevronLeft, ChevronRight, Star } from 'lucide-react';
import '../../css/InstructorCarousel.css';

const InstructorCarousel = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const instructors = [
    {
      name: "Sarah Johnson",
      role: "Yoga Instructor",
      description: "8 Limbs Yoga studio offers a comprehensive 100 Hours Multi Style Yoga Teacher Training Course perfect for beginners and experienced yogis alike. The course is designed to provide students with a deep understanding of yoga.",
      rating: 4,
      image: "https://s3-alpha-sig.figma.com/img/0717/d7a5/f48164d12e5ae65bca96a04c05dc9538?Expires=1736726400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=FdgTwISl8QXzoxfmtdQFcNeIBZksN57XU5Mq0k~IDIgDBnoNYviLHwLj9H979EnUuzfw2pwhf-qrBIMeZt2gvMdYQGJ5cMpE3aOxoUx628g~iq7J9AjvmQPNjbD-7FAH0jK44VlDxVYm8zCCzVw-iElh3F9Me4dCJ5weVi4eT~hAsUwQhrDJ1t87JcQfzES4qgtxDikkDwoI606Hda8-8lwl~UVIpcAFFgDMrJdaQmHwRh-GIM6sPzuCHaCBp-wvIuGN5ff9AnhAv8QAZjAuBef8fCEIo8EN5EsqMrjbA~Wtoj8TU4hArRfsinT5Vje23GkZ3enHPuZRL60ffTl2Xw__"
    },
    {
      name: "Michael Chen",
      role: "Senior Instructor",
      description: "Specialized in Vinyasa and Ashtanga yoga with 10 years of teaching experience. Offers personalized training programs for all skill levels.",
      rating: 5,
      image: "https://s3-alpha-sig.figma.com/img/0717/d7a5/f48164d12e5ae65bca96a04c05dc9538?Expires=1736726400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=FdgTwISl8QXzoxfmtdQFcNeIBZksN57XU5Mq0k~IDIgDBnoNYviLHwLj9H979EnUuzfw2pwhf-qrBIMeZt2gvMdYQGJ5cMpE3aOxoUx628g~iq7J9AjvmQPNjbD-7FAH0jK44VlDxVYm8zCCzVw-iElh3F9Me4dCJ5weVi4eT~hAsUwQhrDJ1t87JcQfzES4qgtxDikkDwoI606Hda8-8lwl~UVIpcAFFgDMrJdaQmHwRh-GIM6sPzuCHaCBp-wvIuGN5ff9AnhAv8QAZjAuBef8fCEIo8EN5EsqMrjbA~Wtoj8TU4hArRfsinT5Vje23GkZ3enHPuZRL60ffTl2Xw__"
    },
    {
      name: "Emma Peters",
      role: "Meditation Guide",
      description: "Leading meditation and mindfulness sessions with a focus on combining traditional techniques with modern wellness practices.",
      rating: 4,
      image: "https://s3-alpha-sig.figma.com/img/0717/d7a5/f48164d12e5ae65bca96a04c05dc9538?Expires=1736726400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=FdgTwISl8QXzoxfmtdQFcNeIBZksN57XU5Mq0k~IDIgDBnoNYviLHwLj9H979EnUuzfw2pwhf-qrBIMeZt2gvMdYQGJ5cMpE3aOxoUx628g~iq7J9AjvmQPNjbD-7FAH0jK44VlDxVYm8zCCzVw-iElh3F9Me4dCJ5weVi4eT~hAsUwQhrDJ1t87JcQfzES4qgtxDikkDwoI606Hda8-8lwl~UVIpcAFFgDMrJdaQmHwRh-GIM6sPzuCHaCBp-wvIuGN5ff9AnhAv8QAZjAuBef8fCEIo8EN5EsqMrjbA~Wtoj8TU4hArRfsinT5Vje23GkZ3enHPuZRL60ffTl2Xw__"
    }
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % instructors.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + instructors.length) % instructors.length);
  };

  return (
    <div className="carousel-container1">
      <h1 className="carousel-title"><h1>Instructors</h1></h1>
      
      <div className="carousel-wrapper">
        <div 
          className="carousel-slides"
          style={{ transform: `translateX(-${currentSlide * 100}%)` }}
        >
          {instructors.map((instructor, index) => (
            <div key={index} className="carousel-slide">
              <div className="InstructorCarouselcard">
                       <div className="InstructorCarouselimg">
                           <img src={instructor.image} alt="" />
                       </div>
                       <div className="InstructorCarouselcontent">
                           <div className="Instructorname"><h2>{instructor.name}</h2></div>
                           <div className="Instructorrole"><p>{instructor.role}</p></div>
                           <div className="Instructordescription">
                               <p>
                               {instructor.description}
                               </p>
                          </div>
                           <div className="awards">
                               <ul>
                                   <li>Awards - Write the awards of this person and their qualification to enhance the profile.</li>
                                 <li> Certification - Write the awards of this person and their qualification to enhance the profile. </li>
                               </ul>
                           </div>
                           <div className="instructor-rating">
                      <span className="rating-label">Reviews:</span>
                      <div className="rating-stars">
                        {[...Array(5)].map((_, i) => (
                          <Star
                            key={i}
                            size={20}
                            className={i < instructor.rating ? "star-filled" : "star-empty"}
                          />
                        ))}
                      </div>
                    </div>
                       </div>
                   </div>
            </div>
          ))}
        </div>
      </div>
      
      <button onClick={prevSlide} className="carousel-button prev">
        <ChevronLeft size={24} />
      </button>
      
      <button onClick={nextSlide} className="carousel-button next">
        <ChevronRight size={24} />
      </button>
      
      <div className="carousel-dots">
        {instructors.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`dot ${currentSlide === index ? 'active' : ''}`}
          />
        ))}
      </div>
    </div>
  );
};

export default InstructorCarousel;

// import React from "react";
// import Slider from "react-slick";
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";
// import "../css/InstructorCarousel.css"; // Create this CSS file for styles

// const InstructorCarousel= () => {
//   // Instructor data directly in the component
//   const instructors = [
//     {
//       name: "Princy Yadav",
//       role: "CEO/Founder",
//       description:
//         "8 Limbs Yoga studio offers a comprehensive 100 Hours Multi Style Yoga Teacher Training Course that is perfect for beginners and experienced yogis alike.",
//       rating: 4,
//       image: "https://s3-alpha-sig.figma.com/img/0717/d7a5/f48164d12e5ae65bca96a04c05dc9538?Expires=1736726400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=FdgTwISl8QXzoxfmtdQFcNeIBZksN57XU5Mq0k~IDIgDBnoNYviLHwLj9H979EnUuzfw2pwhf-qrBIMeZt2gvMdYQGJ5cMpE3aOxoUx628g~iq7J9AjvmQPNjbD-7FAH0jK44VlDxVYm8zCCzVw-iElh3F9Me4dCJ5weVi4eT~hAsUwQhrDJ1t87JcQfzES4qgtxDikkDwoI606Hda8-8lwl~UVIpcAFFgDMrJdaQmHwRh-GIM6sPzuCHaCBp-wvIuGN5ff9AnhAv8QAZjAuBef8fCEIo8EN5EsqMrjbA~Wtoj8TU4hArRfsinT5Vje23GkZ3enHPuZRL60ffTl2Xw__", // Replace with actual image URLs
//     },
//     {
//       name: "John Doe",
//       role: "Yoga Instructor",
//       description:
//         "John specializes in Hatha yoga and focuses on breathing techniques and mindfulness practices.",
//       rating: 5,
//       image: "https://s3-alpha-sig.figma.com/img/0717/d7a5/f48164d12e5ae65bca96a04c05dc9538?Expires=1736726400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=FdgTwISl8QXzoxfmtdQFcNeIBZksN57XU5Mq0k~IDIgDBnoNYviLHwLj9H979EnUuzfw2pwhf-qrBIMeZt2gvMdYQGJ5cMpE3aOxoUx628g~iq7J9AjvmQPNjbD-7FAH0jK44VlDxVYm8zCCzVw-iElh3F9Me4dCJ5weVi4eT~hAsUwQhrDJ1t87JcQfzES4qgtxDikkDwoI606Hda8-8lwl~UVIpcAFFgDMrJdaQmHwRh-GIM6sPzuCHaCBp-wvIuGN5ff9AnhAv8QAZjAuBef8fCEIo8EN5EsqMrjbA~Wtoj8TU4hArRfsinT5Vje23GkZ3enHPuZRL60ffTl2Xw__",
//     },
//     {
//       name: "Jane Smith",
//       role: "Senior Yoga Teacher",
//       description:
//         "Jane brings 10+ years of experience in Vinyasa yoga and a passion for teaching.",
//       rating: 5,
//       image: "https://s3-alpha-sig.figma.com/img/0717/d7a5/f48164d12e5ae65bca96a04c05dc9538?Expires=1736726400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=FdgTwISl8QXzoxfmtdQFcNeIBZksN57XU5Mq0k~IDIgDBnoNYviLHwLj9H979EnUuzfw2pwhf-qrBIMeZt2gvMdYQGJ5cMpE3aOxoUx628g~iq7J9AjvmQPNjbD-7FAH0jK44VlDxVYm8zCCzVw-iElh3F9Me4dCJ5weVi4eT~hAsUwQhrDJ1t87JcQfzES4qgtxDikkDwoI606Hda8-8lwl~UVIpcAFFgDMrJdaQmHwRh-GIM6sPzuCHaCBp-wvIuGN5ff9AnhAv8QAZjAuBef8fCEIo8EN5EsqMrjbA~Wtoj8TU4hArRfsinT5Vje23GkZ3enHPuZRL60ffTl2Xw__",
//     },
//   ];

//   // React Slick settings
//   const settings = {
//     dots: true,
//     infinite: true,
//     speed: 500,
//     slidesToShow: 1,
//     slidesToScroll: 1,
//   };

//   return (
//     <div className="InstructorCarousel">
//       <h1>Instructors</h1>
//       <Slider {...settings}>
//         {instructors.map((instructor, index) => (
//             <div className="InstructorCarouselcard">
//             <div className="InstructorCarouselimg">
//                 <img src="https://s3-alpha-sig.figma.com/img/0717/d7a5/f48164d12e5ae65bca96a04c05dc9538?Expires=1736726400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=FdgTwISl8QXzoxfmtdQFcNeIBZksN57XU5Mq0k~IDIgDBnoNYviLHwLj9H979EnUuzfw2pwhf-qrBIMeZt2gvMdYQGJ5cMpE3aOxoUx628g~iq7J9AjvmQPNjbD-7FAH0jK44VlDxVYm8zCCzVw-iElh3F9Me4dCJ5weVi4eT~hAsUwQhrDJ1t87JcQfzES4qgtxDikkDwoI606Hda8-8lwl~UVIpcAFFgDMrJdaQmHwRh-GIM6sPzuCHaCBp-wvIuGN5ff9AnhAv8QAZjAuBef8fCEIo8EN5EsqMrjbA~Wtoj8TU4hArRfsinT5Vje23GkZ3enHPuZRL60ffTl2Xw__" alt="" />
//             </div>
//             <div className="InstructorCarouselcontent">
//                 <div className="Instructorname"><h2>Princy Yadav</h2></div>
//                 <div className="Instructorrole"><p>Ceo/Founder</p></div>
//                 <div className="Instructordescription">
//                     <p>
//                     8 Limbs Yoga studio offers a comprehensive 100 Hours Multi Style 
//                     Yoga Teacher Training Course that is perfect for beginners and experienced yogis alike. The course is designed to provide students with a deep understanding of yoga and prepare them 
//                     to become competent and confident yoga teachers.
//                     </p>
//                </div>
//                 <div className="awards">
//                     <ul>
//                         <li>Awards - Write the awards of this person and their qualification to enhance the profile.</li>
//                       <li> Certification - Write the awards of this person and their qualification to enhance the profile. </li>
//                     </ul>
//                 </div>
//                 <div className="Instructorcardreview">
//                     <p>Reviews :</p>
//                    <h2>★</h2>
//                   <h2>★</h2>
//                   <h2>★</h2>
//                     <h2>★</h2>
//                 </div>
//             </div>
//         </div>
//         //   <div key={index} className="instructorcard">
//         //     <img src={instructor.image} alt={instructor.name} className="card-image" />
//         //     <div className="instcardcontent">
//         //     <h2 className="card-name">{instructor.name}</h2>
//         //     <h3 className="card-role">{instructor.role}</h3>
//         //     <p className="card-description">{instructor.description}</p>
//         //     <div className="card-reviews">
//         //       <span>Reviews:</span>
//         //       {"★".repeat(instructor.rating)}
//         //       {"☆".repeat(5 - instructor.rating)}
//         //     </div>
//         //     </div>
//         //   </div>
//         ))}
//       </Slider>
//     </div>
//   );
// };

// export default InstructorCarousel;
// import React from 'react'
// import '../css/InstructorCarousel.css'

// function InstructorCarousel() {
//   return (
//     <div className='InstructorCarousel'>
//         <h1>Instructor</h1>
//         <div className="InstructorCarouselcard">
//             <div className="InstructorCarouselimg">
//                 <img src="https://s3-alpha-sig.figma.com/img/0717/d7a5/f48164d12e5ae65bca96a04c05dc9538?Expires=1736726400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=FdgTwISl8QXzoxfmtdQFcNeIBZksN57XU5Mq0k~IDIgDBnoNYviLHwLj9H979EnUuzfw2pwhf-qrBIMeZt2gvMdYQGJ5cMpE3aOxoUx628g~iq7J9AjvmQPNjbD-7FAH0jK44VlDxVYm8zCCzVw-iElh3F9Me4dCJ5weVi4eT~hAsUwQhrDJ1t87JcQfzES4qgtxDikkDwoI606Hda8-8lwl~UVIpcAFFgDMrJdaQmHwRh-GIM6sPzuCHaCBp-wvIuGN5ff9AnhAv8QAZjAuBef8fCEIo8EN5EsqMrjbA~Wtoj8TU4hArRfsinT5Vje23GkZ3enHPuZRL60ffTl2Xw__" alt="" />
//             </div>
//             <div className="InstructorCarouselcontent">
//                 <div className="Instructorname"><h2>Princy Yadav</h2></div>
//                 <div className="Instructorrole"><p>Ceo/Founder</p></div>
//                 <div className="Instructordescription">
//                     <p>
//                     8 Limbs Yoga studio offers a comprehensive 100 Hours Multi Style 
//                     Yoga Teacher Training Course that is perfect for beginners and experienced yogis alike. The course is designed to provide students with a deep understanding of yoga and prepare them 
//                     to become competent and confident yoga teachers.
//                     </p>
//                 </div>
//                 <div className="awards">
//                     <ul>
//                         <li>Awards - Write the awards of this person and their qualification to enhance the profile.</li>
//                         <li> Certification - Write the awards of this person and their qualification to enhance the profile. </li>
//                     </ul>
//                 </div>
//                 <div className="Instructorcardreview">
//                     <p>Reviews :</p>
//                     <h2>★</h2>
//                     <h2>★</h2>
//                     <h2>★</h2>
//                     <h2>★</h2>
//                 </div>
//             </div>
//         </div>
//     </div>
//   )
// }

// export default InstructorCarousel

// import React from 'react';
// import Slider from 'react-slick';
// import '../css/InstructorCarousel.css';
// import "slick-carousel/slick/slick.css"; 
// import "slick-carousel/slick/slick-theme.css";

// const instructors = [
//   {
//     id: 1,
//     name: "Princy Yadav",
//     role: "CEO/Founder",
//     description: "8 Limbs Yoga studio offers a comprehensive 100 Hours Multi Style Yoga Teacher Training Course that is perfect for beginners and experienced yogis alike...",
//     image: "https://s3-alpha-sig.figma.com/img/0717/d7a5/f48164d12e5ae65bca96a04c05dc9538?Expires=1736726400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=FdgTwISl8QXzoxfmtdQFcNeIBZksN57XU5Mq0k~IDIgDBnoNYviLHwLj9H979EnUuzfw2pwhf-qrBIMeZt2gvMdYQGJ5cMpE3aOxoUx628g~iq7J9AjvmQPNjbD-7FAH0jK44VlDxVYm8zCCzVw-iElh3F9Me4dCJ5weVi4eT~hAsUwQhrDJ1t87JcQfzES4qgtxDikkDwoI606Hda8-8lwl~UVIpcAFFgDMrJdaQmHwRh-GIM6sPzuCHaCBp-wvIuGN5ff9AnhAv8QAZjAuBef8fCEIo8EN5EsqMrjbA~Wtoj8TU4hArRfsinT5Vje23GkZ3enHPuZRL60ffTl2Xw__",
//     awards: ["Best Yoga Instructor 2023", "Certified Yoga Teacher"],
//     reviews: 4
//   },
//   // Add more instructor objects as needed
//   {
//     id: 2,
//     name: "John Doe",
//     role: "Head Instructor",
//     description: "John brings over 10 years of experience in yoga and wellness, specializing in Vinyasa and Hatha styles...",
//     image: "https://via.placeholder.com/150",
//     awards: ["Yoga Excellence Award", "Advanced Certification in Yoga Therapy"],
//     reviews: 5
//   },
//   {
//     id: 3,
//     name: "Jane Smith",
//     role: "Senior Instructor",
//     description: "Jane is passionate about teaching and has helped numerous students achieve their wellness goals...",
//     image: "https://via.placeholder.com/150",
//     awards: ["Top Instructor 2022", "Certified Mindfulness Coach"],
//     reviews: 4
//   },
//   // Add as many instructors as you want
// ];

// function InstructorCarousel() {
//   const settings = {
//     dots: true, // Show navigation dots
//     infinite: true, // Infinite loop
//     speed: 500, // Transition speed in ms
//     slidesToShow: 3, // Number of slides to show
//     slidesToScroll: 1, // Number of slides to scroll
//     responsive: [
//       {
//         breakpoint: 1024, // Screen width <= 1024px
//         settings: {
//           slidesToShow: 2,
//           slidesToScroll: 1,
//           infinite: true,
//           dots: true
//         }
//       },
//       {
//         breakpoint: 600, // Screen width <= 600px
//         settings: {
//           slidesToShow: 1,
//           slidesToScroll: 1
//         }
//       }
//     ]
//   };

//   return (
//     <div className='InstructorCarousel'>
//       <h1>Instructor</h1>
//       <Slider {...settings} className="InstructorCarouselSlider">
//         {instructors.map((instructor) => (
//           <div key={instructor.id} className="InstructorCarouselcard">
//             <div className="InstructorCarouselimg">
//               <img src={instructor.image} alt={instructor.name} />
//             </div>
//             <div className="InstructorCarouselcontent">
//               <div className="Instructorname"><h2>{instructor.name}</h2></div>
//               <div className="Instructorrole"><p>{instructor.role}</p></div>
//               <div className="Instructordescription">
//                 <p>{instructor.description}</p>
//               </div>
//               <div className="awards">
//                 <ul>
//                   {instructor.awards.map((award, index) => (
//                     <li key={index}>{award}</li>
//                   ))}
//                 </ul>
//               </div>
//               <div className="Instructorcardreview">
//                 <p>Reviews :</p>
//                 {[...Array(instructor.reviews)].map((_, index) => (
//                   <h2 key={index}>★</h2>
//                 ))}
//               </div>
//             </div>
//           </div>
//         ))}
//       </Slider>
//     </div>
//   );
// }

// export default InstructorCarousel;
