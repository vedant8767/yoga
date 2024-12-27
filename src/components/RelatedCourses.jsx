import React from 'react'
import rc1 from '../assets/rc1.png'
import rc2 from '../assets/rc2.png'
import rc3 from '../assets/rc3.png'
import RelatedCoursesCrad from './RelatedCoursesCrad'
import '../css/RelatedCourses.css'

function RelatedCourses() {
    const rccards =[
        {
            image:rc1,
            title:"200 Hours Yoga Teacher Training"
        },
        {
            image:rc2,
            title:"300 Hours Yoga Teacher Training"
        },
        {
            image:rc3,
            title:"500 Hours Yoga Teacher Training"
        },
    ]
  return (
    <div className='relatedcourses'>
        <div className="relatedcoursesheader">
            <h1>Related Course</h1>
            <div className="rcline"></div>
        </div>
        <div className="rcallcards">
            {
                rccards.map((item)=>(
                    <RelatedCoursesCrad image={item.image} title={item.title}/>
                ))
            }
        </div>
    </div>
  )
}

export default RelatedCourses