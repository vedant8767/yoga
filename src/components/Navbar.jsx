import React from 'react'
import logo from '../assets/yoga.png'
import { useNavigate } from 'react-router-dom';
import '../css/Navbar.css'

function Navbar() {

  const navigate = useNavigate();

  const navItems = [
    {
        name: 'Home',
        slug: "/",
    },
    {
        name: "Teacher Training Courses",
        slug: "/TeacherTrainingCourses",
    },
    {
        name: "Yoga Classes",
        slug: "/YogaClasses",
    },
    {
        name: "Courses",
        slug : "/Courses",
    },
    {
        name: "Therapy",
        slug: "/Therapy",
    },
    {
      name: "About Us",
      slug: "/AboutUs",
    },
    {
      name: "JoinUs",
      slug: "/JoinUs",
    },
];
const handleNavItemClick = (slug) => {
  navigate(slug); 
};
  return (
    <div className='navbar'>
        <div className="nav_logo">
            <img src={logo} alt="" srcset="" />
            <h1>8 LIMBS</h1>
            <h2>YOGA STUDIO</h2>
        </div>
        <div className="nav_items">
                <ul>
                    {
                        navItems.map((item) => (
                            <li key={item.name}>
                                <button
                                    onClick={() => handleNavItemClick(item.slug)}
                                >{item.name}</button>
                            </li>
                        ))
                    }
                </ul>
        </div>
    </div>
  )
}

export default Navbar