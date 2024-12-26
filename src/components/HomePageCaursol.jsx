import React from 'react'
import '../css/HomePageCaursol.css'
import img1 from '../assets/img1.jpg'
import img2 from '../assets/img2.jpg'
import img3 from '../assets/img3.jpg'

function HomePageCaursol() {
  

  const images = [
    img1,img2,img3
  ];
  return (
    <div className='homepage'>
      <img src={img1} alt="" srcset="" />
      
    </div>
  )
}

export default HomePageCaursol

