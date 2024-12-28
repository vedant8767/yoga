import React from 'react'
import Navbar from '../components/Navbar'
import HomePageCaursol from '../components/HomePageCaursol'
import About from '../components/About'
import CoursesPage from './CoursesPage'
import TrainnerPage from './TrainnerPage'
import Footer from '../components/Footer'
import Testimonial from '../components/Testimonial'


function HomePage() {
  return (
    <div>
        <HomePageCaursol/>
        <About/>
        <CoursesPage/>
        <TrainnerPage/>
        <Testimonial/>
    </div>
  )
}

export default HomePage