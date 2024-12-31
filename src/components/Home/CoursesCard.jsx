import React from 'react'
import '../../css/CoursesCard.css'

function CoursesCard({img,title,description,details}) {
  return (
    <div className='coursecard' data-aos="fade-up">
        <div className="card_img">
            <img src={img} alt="" srcset="" />
        </div>
        <div className="courses_card_contents">
            <h3>{title}</h3>
            <p>{description}</p>
            <table>
                {
                    
                    Object.keys(details).map((key) => (
                      <tr>
                        <td>{key}</td>
                        <td>{details[key]}</td>
                      </tr>  
                    ))
                }
            </table>
            <div className="courses_button">
                <button id='view'>View Details</button>
                <button id='enroll'>Enroll Now</button>
            </div>
        </div>
    </div>
  )
}

export default CoursesCard