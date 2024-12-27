import React from 'react'
import CourseHome from '../components/CourseHome'
import Curriculum from '../components/Curriculum'
import RelatedCourses from '../components/RelatedCourses'
import Cr from '../components/Cr'

function Courses() {
  return (
    <div>
      <CourseHome/>
      <Curriculum/>
      <Cr/>
      <RelatedCourses/>
    </div>
  )
}

export default Courses