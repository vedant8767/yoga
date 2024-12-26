import React from 'react'
import Navbar from '../components/Navbar'
import HomePageCaursol from '../components/HomePageCaursol'
import About from '../components/About'
import CoursesPage from './CoursesPage'
import TrainnerPage from './TrainnerPage'

function HomePage() {
  return (
    <div>
        <Navbar/>
        <HomePageCaursol/>
        <About/>
        <CoursesPage/>
        <TrainnerPage/>
    </div>
  )
}

export default HomePage