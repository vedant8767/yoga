// import React from 'react'
// import '../css/HomePageCaursol.css'
// import img1 from '../assets/img1.jpg'
// import img2 from '../assets/img2.jpg'
// import img3 from '../assets/img3.jpg'

// function HomePageCaursol() {
  

//   const images = [
//     img1,img2,img3
//   ];
//   return (
//     <div className='homepage'>
//       <img src={img1} alt="" srcset="" />
      
//     </div>
//   )
// }

// export default HomePageCaursol
// import React, { useState, useEffect } from 'react';
// import img1 from '../assets/img1.jpg'
// import img2 from '../assets/img2.jpg'
// import img3 from '../assets/img3.jpg'

// const HomePageCarousel = () => {
//   const [currentIndex, setCurrentIndex] = useState(0);
//   const [nextIndex, setNextIndex] = useState(1);
//   const [fading, setFading] = useState(false);

//   const images = [
//     img1,img2,img3
//   ];

//   useEffect(() => {
//     const interval = setInterval(() => {
//       setFading(true);
      
//       setTimeout(() => {
//         setCurrentIndex((prev) => (prev + 1) % images.length);
//         setNextIndex((prev) => (prev + 1) % images.length);
//         setFading(false);
//       }, 1000); // Duration of fade transition
      
//     }, 5000); // Time between transitions

//     return () => clearInterval(interval);
//   }, []);

//   return (
//     <div className="relative w-full h-screen overflow-hidden">
//       {/* Current image */}
//       <div 
//         className={`absolute w-full h-full transition-opacity duration-1000 ${fading ? 'opacity-0' : 'opacity-100'}`}
//         style={{
//           backgroundImage: `url(${images[currentIndex]})`,
//           backgroundSize: 'cover',
//           backgroundPosition: 'center'
//         }}
//       />

//       {/* Next image (preloaded) */}
//       <div 
//         className="absolute w-full h-full"
//         style={{
//           backgroundImage: `url(${images[nextIndex]})`,
//           backgroundSize: 'cover',
//           backgroundPosition: 'center'
//         }}
//       />

//       {/* Content overlay */}
//       <div className="relative z-10 w-full h-full flex items-center justify-center">
//         <div className="text-center text-white p-8 bg-black/50 rounded-lg">
//           <h1 className="text-4xl font-bold mb-4">Welcome to Our Site</h1>
//           <p className="text-xl">Discover amazing content and more</p>
//           <button className="mt-6 px-6 py-2 bg-white text-black rounded hover:bg-gray-200 transition-colors">
//             Get Started
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default HomePageCarousel;
// HomePageCarousel.jsx
import React from 'react';
import '../../css/HomePageCaursol.css';
// import logo from '../assets/logo.png';
// import img2 from '../assets/img2.jpg';
// import img3 from '../assets/img3.jpg';

function HomePageCarousel() {
  return (
    <div className="homepage">
      <div className="carousel-container">
        <div className="content-overlay">
          <img src='https://s3-alpha-sig.figma.com/img/5299/f83d/b3254e3488b424f585fe826aa28776c9?Expires=1736121600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=Pr-anjsUbhCrqeo20OGCPeAt9MK2moO94VyBS487My9jqwQUVbT5w93gRszKpenXj9eS7qwdSZ5wlFnbUkpuz308asWjkIH9SQ3wrZlZ7SaF7PPjzN9CPHfjDHLM3KmyCImHk0OmKwd4uudS8-ylLltjB7VS3ezHbfKv~iz3FIh4fC4Q9pBMPhOHcwXNxSEDhzHstIbTSNdtWnF6fOVYpXGnmzznPf8k9mt1Et25tbMvtW895u~YUKPuSxcjAVQJWz4b6afTsZnlOF~ZYmCkcNbGPi2H1WWMQ9KAODplSIbLg3lIPYC0LcZrDbzdfPWYvezw3kq79xPOdkErw~bp0w__' alt="" srcset="" />
          <h1>Transform your health </h1>
          <p>Nurture your mind body and soul</p>
        </div>
      </div>
    </div>
  );
}

export default HomePageCarousel;