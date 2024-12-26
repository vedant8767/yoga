import React from 'react'
import CoursesCard from './CoursesCard'
import '../css/Courses.css'
import card from '../assets/card.jpg'

function Courses() {
    const coursescardcontent=[
        {
            img:card,
            title:'100 Hours Yoga Teacher Training',
            description:'100 hours yoga teacher training course. It is a beginner friendly and will teach you everything.',
            details:{Duration:'11 Days',Certification:'Yogi alliance',Fess:"$300",Trainer:'vedant patil'}

        },
        {
            img:card,
            title:'100 Hours Yoga Teacher Training',
            description:'100 hours yoga teacher training course. It is a beginner friendly and will teach you everything.',
            details:{Duration:'11 Days',Certification:'Yogi alliance',Fess:"$300",Trainer:'vedant patil'}

        },
        {
            img:card,
            title:'100 Hours Yoga Teacher Training',
            description:'100 hours yoga teacher training course. It is a beginner friendly and will teach you everything.',
            details:{Duration:'11 Days',Certification:'Yogi alliance',Fess:"$300",Trainer:'vedant patil'}

        },
        {
            img:card,
            title:'100 Hours Yoga Teacher Training',
            description:'100 hours yoga teacher training course. It is a beginner friendly and will teach you everything.',
            details:{Duration:'11 Days',Certification:'Yogi alliance',Fess:"$300",Trainer:'vedant patil'}

        }

    ]
  return (
    <div className='courses'>
        <h1>MOST LOVED COURSES:</h1>
        <h2>Explore The Courses People Love</h2>
        <div className="coursesallcards">
            {
                coursescardcontent.map((item)=>(
                    <CoursesCard img={item.img} title={item.title} description={item.description} details={item.details}/>
                ))
            }
        </div>
    </div>
  )
}

export default Courses