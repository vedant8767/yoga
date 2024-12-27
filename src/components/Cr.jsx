import React from 'react'
import '../css/Cr.css'

function Cr() {
  return (
    <div className='cr'>
        <div className="crpart1">
            <div className="crheader">
                <h1>Course Details</h1>
                <div className="crline"></div>
            </div>
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
        </div>
        <div className="crpart2">
        <div className="crheader">
                <h1>Registration</h1>
                <div className="crline"></div>
            </div>
        <div className="yogaclassesright">
                <h3>Enroll in the Program</h3>
                <form action="">
                    <input type="text" placeholder='Enter your name' />
                    <input type="text" placeholder='Enter phone number' />
                    <input type="text" placeholder='Select Branch' />
                    <input type='date' placeholder='Set your schedule' />
                    <input type="text" placeholder='Leave us a message' />
                    <button>BOOK NOW</button>
                </form>
            </div>
        </div>
    </div>
  )
}

export default Cr