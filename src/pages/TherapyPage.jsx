import React from 'react'
import TherapyHome from '../components/TherapyHome'
import Curriculum from '../components/Curriculum'
import RelatedCourses from '../components/RelatedCourses'
import Details from '../components/Details'

function TherapyPage() {
  return (
    <div>
      <TherapyHome/>
      <Details/>
      <Curriculum/>
      <RelatedCourses/>
    </div>
  )
}

export default TherapyPage