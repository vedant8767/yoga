import React from 'react'
import logo from '../assets/yoga.png'
import '../css/Navbar.css'

function Navbar() {
  return (
    <div className='navbar'>
        <div className="nav_logo">
            <img src={logo} alt="" srcset="" />
            <h1>8 LIMBS</h1>
            <h2>YOGA STUDIO</h2>
        </div>
        <div className="nav_items">
            <ul>
                <li>Home</li>
                <li>Teacher Training Courses</li>
                <li>Yoga Classes</li>
                <li>Courses</li>
                <li>Membership</li>
                <li>About Us</li>
                <button>Join Us</button>
            </ul>
        </div>
    </div>
  )
}

export default Navbar