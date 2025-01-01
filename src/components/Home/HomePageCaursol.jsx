
// import React from 'react';
// import '../../css/HomePageCaursol.css';

// function HomePageCarousel() {
//   return (
//     <div className="homepage">
//       <div className="carousel-container">
//         <div className="content-overlay">
//           <img src='https://s3-alpha-sig.figma.com/img/5299/f83d/b3254e3488b424f585fe826aa28776c9?Expires=1736121600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=Pr-anjsUbhCrqeo20OGCPeAt9MK2moO94VyBS487My9jqwQUVbT5w93gRszKpenXj9eS7qwdSZ5wlFnbUkpuz308asWjkIH9SQ3wrZlZ7SaF7PPjzN9CPHfjDHLM3KmyCImHk0OmKwd4uudS8-ylLltjB7VS3ezHbfKv~iz3FIh4fC4Q9pBMPhOHcwXNxSEDhzHstIbTSNdtWnF6fOVYpXGnmzznPf8k9mt1Et25tbMvtW895u~YUKPuSxcjAVQJWz4b6afTsZnlOF~ZYmCkcNbGPi2H1WWMQ9KAODplSIbLg3lIPYC0LcZrDbzdfPWYvezw3kq79xPOdkErw~bp0w__' alt="" srcset="" />
//           <h1>Transform your health </h1>
//           <p>Nurture your mind body and soul</p>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default HomePageCarousel;\
import React, { useState, useEffect } from 'react';
import '../../css/HomePageCaursol.css';
// Import images
import slider2 from '../../assets/slider2.png';
import th1 from '../../assets/th1.jpg';
import th2 from '../../assets/th2.jpg';
import th3 from '../../assets/th3.jpg';

const HomePageCarousel = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const images = [
    slider2,
    th1,
    th2,
    th3,
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev === images.length - 1 ? 0 : prev + 1));
    }, 9000);

    return () => clearInterval(timer);
  }, [images.length]);

  const goToSlide = (index) => setCurrentSlide(index);
  const goToPrevious = () =>
    setCurrentSlide((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  const goToNext = () =>
    setCurrentSlide((prev) => (prev === images.length - 1 ? 0 : prev + 1));

  return (
    <div className="carousel-container">
      <div
        className="carousel-track"
        style={{ transform: `translateX(-${currentSlide * 100}%)` }}
      >
        {images.map((src, index) => (
          <div key={index} className="carousel-slide1">
            <img src={src} alt={`Slide ${index + 1}`} />
            <div className="carousel-content">
              <div className="carousel-logo">
                <img
                  src="https://s3-alpha-sig.figma.com/img/5299/f83d/b3254e3488b424f585fe826aa28776c9?Expires=1736121600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=Pr-anjsUbhCrqeo20OGCPeAt9MK2moO94VyBS487My9jqwQUVbT5w93gRszKpenXj9eS7qwdSZ5wlFnbUkpuz308asWjkIH9SQ3wrZlZ7SaF7PPjzN9CPHfjDHLM3KmyCImHk0OmKwd4uudS8-ylLltjB7VS3ezHbfKv~iz3FIh4fC4Q9pBMPhOHcwXNxSEDhzHstIbTSNdtWnF6fOVYpXGnmzznPf8k9mt1Et25tbMvtW895u~YUKPuSxcjAVQJWz4b6afTsZnlOF~ZYmCkcNbGPi2H1WWMQ9KAODplSIbLg3lIPYC0LcZrDbzdfPWYvezw3kq79xPOdkErw~bp0w__"
                  alt="Logo"
                />
              </div>
              <h2>Transform Your Health</h2>
              <p>Nurture Your Mind, Body, and Soul</p>
            </div>
          </div>
        ))}
      </div>

      <button className="carousel-arrow prev" onClick={goToPrevious}>
        &#8249;
      </button>
      <button className="carousel-arrow next" onClick={goToNext}>
        &#8250;
      </button>

      <div className="carousel-dots1">
        {images.map((_, index) => (
          <button
            key={index}
            className={`carousel-dot ${currentSlide === index ? 'active' : ''}`}
            onClick={() => goToSlide(index)}
          />
        ))}
      </div>
    </div>
  );
};

export default HomePageCarousel;
