import React from 'react'
import YogaClassesHome from '../components/Yogaclasses/YogaClassesHome'
import Curriculum from '../components/Crriculum/Curriculum'
import RelatedCourses from '../components/RelatedCourses/RelatedCourses'
import ClassesinDetail from '../components/Yogaclasses/ClassesinDetail'
import TrainnerPage from '../components/Trainner/TrainnerPage'
import InstructorCarousel from '../components/Yogaclasses/InstructorCarousel'

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