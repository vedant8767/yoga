import React from 'react'
import TherapyHome from '../components/Therapy/TherapyHome'
import Curriculum from '../components/Crriculum/Curriculum'
import RelatedCourses from '../components/RelatedCourses/RelatedCourses'
import Details from '../components/Therapy/Details'
import TrainnerPage from '../components/Trainner/TrainnerPage'

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