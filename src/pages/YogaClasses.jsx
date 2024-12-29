import React from 'react'
import YogaClassesHome from '../components/YogaClassesHome'
import Curriculum from '../components/Curriculum'
import RelatedCourses from '../components/RelatedCourses'
import ClassesinDetail from '../components/ClassesinDetail'
import TrainnerPage from './TrainnerPage'

function YogaClasses() {
  return (
    <div>
      <YogaClassesHome/>
      <ClassesinDetail/>
      <Curriculum/>
      <TrainnerPage/>
      <RelatedCourses/>
    </div>
  )
}

export default YogaClasses