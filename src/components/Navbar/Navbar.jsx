// import React, { useState, useRef, useEffect } from 'react';
// import { useNavigate, useLocation } from 'react-router-dom';
// import '../../css/Navbar.css';

// function Navbar() {
//   const navigate = useNavigate();
//   const location = useLocation();
//   const [isMenuOpen, setIsMenuOpen] = useState(false);
//   const [activeDropdown, setActiveDropdown] = useState(null);
//   const dropdownRefs = useRef([]);

//   const handleClickOutside = (event) => {
//     if (!dropdownRefs.current.some(ref => ref?.contains(event.target))) {
//       setActiveDropdown(null);
//     }
//   };

//   useEffect(() => {
//     document.addEventListener('mousedown', handleClickOutside);
//     return () => {
//       document.removeEventListener('mousedown', handleClickOutside);
//     };
//   }, []);

//   const navItems = [
//     { name: 'Home', slug: '/' },
//     {
//       name: 'Teacher Training Courses',
//       slug: '/TeacherTrainingCourses',
//       dropdown: [
//         { name: 'Basic Training', slug: '/TeacherTrainingCourses/basic' },
//         { name: 'Advanced Training', slug: '/TeacherTrainingCourses/advanced' },
//         { name: 'Specialized Courses', slug: '/TeacherTrainingCourses/specialized' }
//       ]
//     },
//     {
//       name: 'Yoga Classes',
//       slug: '/YogaClasses',
//       dropdown: [
//         { name: 'Beginner Classes', slug: '/YogaClasses/beginner' },
//         { name: 'Intermediate Classes', slug: '/YogaClasses/intermediate' },
//         { name: 'Advanced Classes', slug: '/YogaClasses/advanced' }
//       ]
//     },
//     { name: 'Therapy', slug: '/Therapy' },
//     { name: 'About Us', slug: '/AboutUs' },
//     { name: 'Join Us', slug: '/JoinUs' },
//   ];

//   const handleNavItemClick = (slug, hasDropdown, index) => {
//     if (hasDropdown) {
//       setActiveDropdown(activeDropdown === index ? null : index);
//     } else {
//       navigate(slug);
//       setIsMenuOpen(false);
//       window.scrollTo(0, 0);
//     }
//   };

//   return (
//     <div className="navbar">
//       {/* ... your existing logo and hamburger button ... */}
//       <div className="nav_logo">
//         <img
//           src="https://s3-alpha-sig.figma.com/img/5299/f83d/b3254e3488b424f585fe826aa28776c9?Expires=1736121600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=Pr-anjsUbhCrqeo20OGCPeAt9MK2moO94VyBS487My9jqwQUVbT5w93gRszKpenXj9eS7qwdSZ5wlFnbUkpuz308asWjkIH9SQ3wrZlZ7SaF7PPjzN9CPHfjDHLM3KmyCImHk0OmKwd4uudS8-ylLltjB7VS3ezHbfKv~iz3FIh4fC4Q9pBMPhOHcwXNxSEDhzHstIbTSNdtWnF6fOVYpXGnmzznPf8k9mt1Et25tbMvtW895u~YUKPuSxcjAVQJWz4b6afTsZnlOF~ZYmCkcNbGPi2H1WWMQ9KAODplSIbLg3lIPYC0LcZrDbzdfPWYvezw3kq79xPOdkErw~bp0w__"
//           alt=""
//         />
//       </div>
//       <button
//         className={`hamburger ${isMenuOpen ? 'open' : ''}`}
//         onClick={() => setIsMenuOpen(!isMenuOpen)}
//       >
//         <span></span>
//         <span></span>
//         <span></span>
//       </button>
//       <div className={`nav_items ${isMenuOpen ? 'open' : ''}`}>
//         <ul>
//           {navItems.map((item, index) => (
//             <li 
//               key={item.name} 
//               className={`${item.dropdown ? 'has-dropdown' : ''}`}
//               ref={el => dropdownRefs.current[index] = el}
//             >
//               <button
//                 onClick={() => handleNavItemClick(item.slug, !!item.dropdown, index)}
//                 style={{
//                   color: location.pathname === item.slug ? 'black' : 'white',
//                 }}
//                 className={item.dropdown ? 'dropdown-toggle' : ''}
//               >
//                 {item.name}
//                 {item.dropdown && (
//                   <svg 
//                     className={`dropdown-icon ${activeDropdown === index ? 'rotated' : ''}`}
//                     width="12" 
//                     height="12" 
//                     viewBox="0 0 24 24" 
//                     fill="none" 
//                     stroke="currentColor" 
//                     strokeWidth="2" 
//                     strokeLinecap="round" 
//                     strokeLinejoin="round"
//                   >
//                     <polyline points="6 9 12 15 18 9"></polyline>
//                   </svg>
//                 )}
//               </button>
//               {item.dropdown && (
//                 <div className={`dropdown-menu ${activeDropdown === index ? 'show' : ''}`}>
//                   {item.dropdown.map((dropItem) => (
//                     <button
//                       key={dropItem.slug}
//                       onClick={(e) => {
//                         e.stopPropagation();
//                         navigate(dropItem.slug);
//                         setIsMenuOpen(false);
//                         setActiveDropdown(null);
//                       }}
//                     >
//                       {dropItem.name}
//                     </button>
//                   ))}
//                 </div>
//               )}
//             </li>
//           ))}
//         </ul>
//       </div>
//     </div>
//   );
// }

// export default Navbar;
import React, { useState, useRef, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import '../../css/Navbar.css';

function Navbar() {
  const navigate = useNavigate();
  const location = useLocation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);
  const dropdownRefs = useRef([]);

  const handleClickOutside = (event) => {
    if (!dropdownRefs.current.some(ref => ref?.contains(event.target))) {
      setActiveDropdown(null);
    }
  };

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const navItems = [
    { name: 'Home', slug: '/' },
    {
      name: 'Teacher Training Courses',
      slug: '/TeacherTrainingCourses',
      dropdown: [
        { name: 'Basic Training', slug: '/TeacherTrainingCourses' },
        { name: 'Advanced Training', slug: '/TeacherTrainingCourses' },
        { name: 'Specialized Courses', slug: '/TeacherTrainingCourses' }
      ]
    },
    {
      name: 'Yoga Classes',
      slug: '/YogaClasses',
      dropdown: [
        { name: 'Beginner Classes', slug: '/YogaClasses' },
        { name: 'Intermediate Classes', slug: '/YogaClasses' },
        { name: 'Advanced Classes', slug: '/YogaClasses' }
      ]
    },
    { name: 'Therapy', slug: '/Therapy' },
    { name: 'About Us', slug: '/AboutUs' },
    { name: 'Join Us', slug: '/JoinUs' },
  ];

  const handleNavItemClick = (slug, hasDropdown, index) => {
    if (hasDropdown) {
      setActiveDropdown(activeDropdown === index ? null : index);
    } else {
      navigate(slug);
      setIsMenuOpen(false);
      setActiveDropdown(null);
      window.scrollTo(0, 0);
    }
  };

  const handleDropdownItemClick = (e, slug) => {
    e.stopPropagation();
    navigate(slug);
    setIsMenuOpen(false);
    setActiveDropdown(null);
  };

  return (
    <div className="navbar">
      <div className="nav_logo">
        <img
          src="https://s3-alpha-sig.figma.com/img/5299/f83d/b3254e3488b424f585fe826aa28776c9?Expires=1736121600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=Pr-anjsUbhCrqeo20OGCPeAt9MK2moO94VyBS487My9jqwQUVbT5w93gRszKpenXj9eS7qwdSZ5wlFnbUkpuz308asWjkIH9SQ3wrZlZ7SaF7PPjzN9CPHfjDHLM3KmyCImHk0OmKwd4uudS8-ylLltjB7VS3ezHbfKv~iz3FIh4fC4Q9pBMPhOHcwXNxSEDhzHstIbTSNdtWnF6fOVYpXGnmzznPf8k9mt1Et25tbMvtW895u~YUKPuSxcjAVQJWz4b6afTsZnlOF~ZYmCkcNbGPi2H1WWMQ9KAODplSIbLg3lIPYC0LcZrDbzdfPWYvezw3kq79xPOdkErw~bp0w__"
          alt=""
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
          {navItems.map((item, index) => (
            <li 
              key={item.name} 
              className={`${item.dropdown ? 'has-dropdown' : ''}`}
              ref={el => dropdownRefs.current[index] = el}
            >
              <button
                onClick={() => handleNavItemClick(item.slug, !!item.dropdown, index)}
                style={{
                  color: location.pathname === item.slug ? 'black' : 'white',
                }}
                className={item.dropdown ? 'dropdown-toggle' : ''}
              >
                {item.name}
                {item.dropdown && (
                  <svg 
                    className={`dropdown-icon ${activeDropdown === index ? 'rotated' : ''}`}
                    width="12" 
                    height="12" 
                    viewBox="0 0 24 24" 
                    fill="none" 
                    stroke="currentColor" 
                    strokeWidth="2" 
                    strokeLinecap="round" 
                    strokeLinejoin="round"
                  >
                    <polyline points="6 9 12 15 18 9"></polyline>
                  </svg>
                )}
              </button>
              {item.dropdown && (
                <div className={`dropdown-menu ${activeDropdown === index ? 'show' : ''}`}>
                  {item.dropdown.map((dropItem) => (
                    <button
                      key={dropItem.slug}
                      onClick={(e) => handleDropdownItemClick(e, dropItem.slug)}
                    >
                      {dropItem.name}
                    </button>
                  ))}
                </div>
              )}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default Navbar;