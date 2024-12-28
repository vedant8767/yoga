import React from 'react'
import YogaClassesHome from '../components/YogaClassesHome'
import Curriculum from '../components/Curriculum'
import RelatedCourses from '../components/RelatedCourses'
import ClassesinDetail from '../components/ClassesinDetail'

function YogaClasses() {
  return (
    <div>
      <YogaClassesHome/>
      <ClassesinDetail/>
      <Curriculum/>
      {/* <RelatedCourses/> */}
    </div>
  )
}

export default YogaClasses