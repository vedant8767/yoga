import React from 'react'
import TherapyHome from '../components/TherapyHome'
import Curriculum from '../components/Curriculum'
import RelatedCourses from '../components/RelatedCourses'
import Details from '../components/Details'
import TrainnerPage from './TrainnerPage'

function TherapyPage() {
  return (
    <div>
      <TherapyHome/>
      <Details/>
      <Curriculum/>
      <TrainnerPage/>
      <RelatedCourses/>
    </div>
  )
}

export default TherapyPage