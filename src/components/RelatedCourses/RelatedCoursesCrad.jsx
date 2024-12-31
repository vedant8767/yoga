import React from 'react'
import '../../css/RelatedCoursesCard.css'

function RelatedCoursesCrad({image,title}) {
  return (
    <div className='relatedcoursescard'>
        <img src={image} alt="" />
        <p>{title}</p>
        <div className="rcbuttons">
            <button id='rc1'>View Details →</button>
            <button id='rc2'>Enroll Now</button>
        </div>
    </div>
  )
}

export default RelatedCoursesCrad