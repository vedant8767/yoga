import React from 'react'
import YogaClassesHome from '../components/YogaClassesHome'
import Curriculum from '../components/Curriculum'
import RelatedCourses from '../components/RelatedCourses'
import ClassesinDetail from '../components/ClassesinDetail'
import TrainnerPage from './TrainnerPage'
import InstructorCarousel from '../components/InstructorCarousel'

function YogaClasses() {
  return (
    <div>
      <YogaClassesHome/>
      <ClassesinDetail/>
      <Curriculum/>
      <InstructorCarousel/>
      <RelatedCourses/>
    </div>
  )
}

export default YogaClasses