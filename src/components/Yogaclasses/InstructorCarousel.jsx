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

