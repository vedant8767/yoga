// // import React, { useState } from "react";
// // import "../css/CarouselComponent.css";

// // // Import your images
// // import image1 from "../assets/left1.png";
// // import image2 from "../assets/left2.png";
// // import image3 from "../assets/rc1.png";
// // import image4 from "../assets/rc2.png";

// // const CarouselComponent = () => {
// //   const images = [image1, image2, image3, image4];
// //   const [currentIndex, setCurrentIndex] = useState(0);

// //   const handleArrowClick = (direction) => {
// //     if (direction === "up") {
// //       setCurrentIndex((prevIndex) =>
// //         prevIndex === 0 ? images.length - 1 : prevIndex - 1
// //       );
// //     } else {
// //       setCurrentIndex((prevIndex) =>
// //         prevIndex === images.length - 1 ? 0 : prevIndex + 1
// //       );
// //     }
// //   };

// //   const handleImageClick = (index) => {
// //     setCurrentIndex(index);
// //   };

// //   return (
// //     <div className="custom-carousel-container">
// //       {/* Main image display */}
// //       <div className="custom-main-image">
// //         <img
// //           src={images[currentIndex]}
// //           alt={`slide-${currentIndex}`}
// //           className="custom-image"
// //         />
// //       </div>

// //       {/* Sidebar for thumbnails */}
// //       <div className="custom-sidebar">
// //         <button
// //           className="custom-arrow-button"
// //           onClick={() => handleArrowClick("up")}
// //         >
// //           ▲
// //         </button>
// //         <div className="custom-thumbnails">
// //           {images.map((image, index) => (
// //             <div
// //               key={index}
// //               className={`custom-thumbnail ${
// //                 index === currentIndex ? "custom-active" : ""
// //               }`}
// //               onClick={() => handleImageClick(index)}
// //             >
// //               <img src={image} alt={`thumbnail-${index}`} />
// //             </div>
// //           ))}
// //         </div>
// //         <button
// //           className="custom-arrow-button"
// //           onClick={() => handleArrowClick("down")}
// //         >
// //           ▼
// //         </button>
// //       </div>
// //     </div>
// //   );
// // };

// // export default CarouselComponent;
// import React, { useState } from "react";
// import "../css/CarouselComponent.css";

// // Import your images
// import image1 from "../assets/th1.jpg";
// import image2 from "../assets/th2.jpg";
// import image3 from "../assets/img2.jpg";
// import image4 from "../assets/th3.jpg";

// const CarouselComponent = () => {
//   const images = [image1, image2, image3, image4];
//   const [currentIndex, setCurrentIndex] = useState(0);

//   const handleArrowClick = (direction) => {
//     if (direction === "up") {
//       setCurrentIndex((prevIndex) =>
//         prevIndex === 0 ? images.length - 1 : prevIndex - 1
//       );
//     } else {
//       setCurrentIndex((prevIndex) =>
//         prevIndex === images.length - 1 ? 0 : prevIndex + 1
//       );
//     }
//   };

//   const handleImageClick = (index) => {
//     setCurrentIndex(index);
//   };

//   return (
//     <div className="custom-carousel-container">
//       {/* Main image display */}
//       <div className="custom-main-image">
//         <img
//           src={images[currentIndex]}
//           alt={`slide-${currentIndex}`}
//           className="custom-image"
//         />
//       </div>

//       {/* Sidebar for thumbnails */}
//       <div className="custom-sidebar">
//         {/* <button
//           className="custom-arrow-button"
//           onClick={() => handleArrowClick("up")}
//         >
//           ▲
//         </button> */}
//         <div className="custom-thumbnails">
//           {images.map((image, index) => (
//             <div
//               key={index}
//               className={`custom-thumbnail ${
//                 index === currentIndex ? "custom-active" : ""
//               }`}
//               onClick={() => handleImageClick(index)}
//             >
//               <img src={image} loading="lazy" alt={`thumbnail-${index}`} />
//             </div>
//           ))}
//         </div>
//         {/* <button
//           className="custom-arrow-button"
//           onClick={() => handleArrowClick("down")}
//         >
//           ▼
//         </button> */}
//       </div>
//     </div>
//   );
// };

// export default CarouselComponent;
import React, { useState } from "react";
import "../css/CarouselComponent.css";

const CarouselComponent = ({ images = [] }) => {
  // const [currentIndex, setCurrentIndex] = useState(0);

  if (!images.length) {
    return <div>No images to display</div>; // Render fallback UI if no images are passed
  }
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleArrowClick = (direction) => {
    if (direction === "up") {
      setCurrentIndex((prevIndex) =>
        prevIndex === 0 ? images.length - 1 : prevIndex - 1
      );
    } else {
      setCurrentIndex((prevIndex) =>
        prevIndex === images.length - 1 ? 0 : prevIndex + 1
      );
    }
  };

  const handleImageClick = (index) => {
    setCurrentIndex(index);
  };

  return (
    <div className="custom-carousel-container">
      {/* Main image display */}
      <div className="custom-main-image">
        <img
          src={images[currentIndex]}
          alt={`slide-${currentIndex}`}
          className="custom-image"
        />
      </div>

      {/* Sidebar for thumbnails */}
      <div className="custom-sidebar">
        <div className="custom-thumbnails">
          {images.map((image, index) => (
            <div
              key={index}
              className={`custom-thumbnail ${
                index === currentIndex ? "custom-active" : ""
              }`}
              onClick={() => handleImageClick(index)}
            >
              <img src={image} loading="lazy" alt={`thumbnail-${index}`} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CarouselComponent;


