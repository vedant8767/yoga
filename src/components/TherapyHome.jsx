import React from 'react'
import '../css/TherapyHome.css'
import star from '../assets/ic_round-star.png'
import star1 from '../assets/ic_round-star1.png'
import tc from '../assets/classes.png'

function TherapyHome() {
  return (
    <div className='therapy'>
        <div className="therapyheader">
            <h1>Yoga Therapy for Diabetes Reversal</h1>
            <div className="therapyline"></div>
        </div>
        <div className="therapycontent">
            <div className="tvleft">
                <table>
                    <tr>
                        <th>TITLE</th>
                        <th>ACTIVITIES</th>
                    </tr>
                    <tr>
                        <td>Duration</td>
                        <td>11 Days</td>
                    </tr>
                    <tr>
                        <td>Level</td>
                        <td>Beginner to intermediate</td>
                    </tr><tr>
                        <td>Date</td>
                        <td>3rd-13th of every month</td>
                    </tr><tr>
                        <td>Certification</td>
                        <td>Yoga Alliance USA</td>
                    </tr><tr>
                        <td>Style</td>
                        <td>Multi Style Yoga</td>
                    </tr><tr>
                        <td>Price</td>
                        <td>INR 10,000/-</td>
                    </tr>
                </table>
            </div>
            <div className="tcright">
                <img src={tc} alt="" srcset="" />
                <div className="tcratings">
                    <p>Ratings:</p>
                    <div className="tcstars">
                        <img src={star} alt="" srcset="" />
                        <img src={star} alt="" srcset="" />
                        <img src={star} alt="" srcset="" />
                        <img src={star} alt="" srcset="" />
                        <img src={star1} alt="" srcset="" />
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default TherapyHome