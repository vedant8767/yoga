import React from 'react'
import '../css/WorkShop.css'
import centerimage from '../assets/center.png'
import left1 from '../assets/left1.png'
import left2 from '../assets/left2.png'
import right1 from '../assets/right1.png'
import right2 from '../assets/right2.png'

function WorkShop() {
  return (
    <div className='workshop'>
        <h1>WORKSHOPS YOU MIGHT LIKE:</h1>
        <div className="workshopdisplay">
            <div className="workshop_left" data-aos="fade-up">
                <div className="workshopcard" >
                    <img src={left1} alt="" />
                    <p>How does <span>Arieal Yoga</span> help you?</p>
                </div>
                <div className="workshopcard" >
                    <img src={left2} alt="" />
                    <p><span>Meditation</span> to ease your soul</p>
                </div>
            </div>
            <div className="workshop_center" data-aos="fade-up">
                <div className='centerworkshopcard'>
                    <img src={centerimage} alt="" />
                    <div class="overlay">
                    <div class="content">
                        <div className="hovercontent">
                            <img src={centerimage} alt="" srcset="" />
                            <h1>Face Yoga</h1>
                        </div>
                        <div className="hovertable">
                            <h4><b>Duration</b>  : 2 hours</h4>
                            <h4><b>Timeing</b>   : 4 - 5 pm</h4>
                            <h4><b>Fees</b>      : $500</h4>
                        </div>
                        <div className="hoverbuttons">
                            <button>view Details</button>
                            <button>Enroll now</button>
                        </div>
                    </div>
                    </div>
                    <p><span>Face Yoga</span> can change your skin appearance</p>
                </div>
            </div>
            <div className="workshop_left" data-aos="fade-up">
                <div className="workshopcard" >
                        <img src={right1} alt="" />
                        <p>Know the Miracles of <span>Sound Healing</span></p>
                    </div>
                <div className="workshopcard" >
                    <img src={right2} alt="" />
                    <p>What <span>Diet and Nutrition</span> has an effect</p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default WorkShop