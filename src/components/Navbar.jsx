// import React from 'react'
// import { useNavigate } from 'react-router-dom';
// import '../css/Navbar.css'

// function Navbar() {

//   const navigate = useNavigate();

//   const navItems = [
//     {
//         name: 'Home',
//         slug: "/",
//     },
//     {
//         name: "Teacher Training Courses",
//         slug: "/TeacherTrainingCourses",
//     },
//     {
//         name: "Yoga Classes",
//         slug: "/YogaClasses",
//     },
//     {
//         name: "Courses",
//         slug : "/Courses",
//     },
//     {
//         name: "Therapy",
//         slug: "/Therapy",
//     },
//     {
//       name: "About Us",
//       slug: "/AboutUs",
//     },
//     {
//       name: "JoinUs",
//       slug: "/JoinUs",
//     },
// ];
// const handleNavItemClick = (slug) => {
//   navigate(slug); 
// };
//   return (
//     <div className='navbar'>
//         <div className="nav_logo">
//             <img src='https://s3-alpha-sig.figma.com/img/5299/f83d/b3254e3488b424f585fe826aa28776c9?Expires=1736121600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=Pr-anjsUbhCrqeo20OGCPeAt9MK2moO94VyBS487My9jqwQUVbT5w93gRszKpenXj9eS7qwdSZ5wlFnbUkpuz308asWjkIH9SQ3wrZlZ7SaF7PPjzN9CPHfjDHLM3KmyCImHk0OmKwd4uudS8-ylLltjB7VS3ezHbfKv~iz3FIh4fC4Q9pBMPhOHcwXNxSEDhzHstIbTSNdtWnF6fOVYpXGnmzznPf8k9mt1Et25tbMvtW895u~YUKPuSxcjAVQJWz4b6afTsZnlOF~ZYmCkcNbGPi2H1WWMQ9KAODplSIbLg3lIPYC0LcZrDbzdfPWYvezw3kq79xPOdkErw~bp0w__' alt="" srcset="" />
//             {/* <h1>8 LIMBS</h1>
//             <h2>YOGA STUDIO</h2> */}
//         </div>
//         <div className="nav_items">
//                 <ul>
//                     {
//                         navItems.map((item) => (
//                             <li key={item.name}>
//                                 <button
//                                     onClick={() => handleNavItemClick(item.slug)}
//                                 >{item.name}</button>
//                             </li>
//                         ))
//                     }
//                 </ul>
//         </div>
//     </div>
//   )
// }

// export default Navbar
import React, { useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import '../css/Navbar.css';

function Navbar() {
  const navigate = useNavigate();
  const location = useLocation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Define navigation items with names and slugs
  const navItems = [
    { name: 'Home', slug: '/' },
    { name: 'Teacher Training Courses', slug: '/TeacherTrainingCourses' },
    { name: 'Yoga Classes', slug: '/YogaClasses' },
    { name: 'Courses', slug: '/Courses' },
    { name: 'Therapy', slug: '/Therapy' },
    { name: 'About Us', slug: '/AboutUs' },
    { name: 'Join Us', slug: '/JoinUs' },
  ];

  const handleNavItemClick = (slug) => {
    navigate(slug);
    setIsMenuOpen(false); // Close the menu on navigation
    window.scrollTo(0, 0); // Scroll to the top of the page
  };

  return (
    <div className="navbar">
      <div className="nav_logo">
        <img
          src="https://s3-alpha-sig.figma.com/img/5299/f83d/b3254e3488b424f585fe826aa28776c9?Expires=1736121600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=Pr-anjsUbhCrqeo20OGCPeAt9MK2moO94VyBS487My9jqwQUVbT5w93gRszKpenXj9eS7qwdSZ5wlFnbUkpuz308asWjkIH9SQ3wrZlZ7SaF7PPjzN9CPHfjDHLM3KmyCImHk0OmKwd4uudS8-ylLltjB7VS3ezHbfKv~iz3FIh4fC4Q9pBMPhOHcwXNxSEDhzHstIbTSNdtWnF6fOVYpXGnmzznPf8k9mt1Et25tbMvtW895u~YUKPuSxcjAVQJWz4b6afTsZnlOF~ZYmCkcNbGPi2H1WWMQ9KAODplSIbLg3lIPYC0LcZrDbzdfPWYvezw3kq79xPOdkErw~bp0w__"
          alt=""
          srcSet=""
        />
      </div>
      <button
        className={`hamburger ${isMenuOpen ? 'open' : ''}`}
        onClick={() => setIsMenuOpen(!isMenuOpen)}
      >
        <span></span>
        <span></span>
        <span></span>
      </button>
      <div className={`nav_items ${isMenuOpen ? 'open' : ''}`}>
        <ul>
          {navItems.map((item) => (
            <li key={item.name}>
              <button
                onClick={() => handleNavItemClick(item.slug)}
                style={{
                  color: location.pathname === item.slug ? 'black' : 'white',
                }}
              >
                {item.name}
              </button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default Navbar;
