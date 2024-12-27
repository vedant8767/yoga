import React from 'react'
import CourseHome from '../components/CourseHome'
import Curriculum from '../components/Curriculum'
import RelatedCourses from '../components/RelatedCourses'
import Cr from '../components/Cr'
import CourseindDetails from '../components/CourseindDetails'

function Courses() {
  return (
    <div>
      <CourseHome/>
      <CourseindDetails/>
      <Curriculum/>
      <Cr/>
      <RelatedCourses/>
    </div>
  )
}

export default Courses