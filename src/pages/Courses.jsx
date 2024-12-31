import React from 'react'
import CourseHome from '../components/Courses/CourseHome'
import Curriculum from '../components/Crriculum/Curriculum'
import RelatedCourses from '../components/RelatedCourses/RelatedCourses'
import Cr from '../components/Courses/Cr'
import CourseindDetails from '../components/Courses/CourseindDetails'

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