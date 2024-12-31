import React from 'react'
import Navbar from '../components/Navbar/Navbar'
import HomePageCaursol from '../components/Home/HomePageCaursol'
import About from '../components/Home/About'
import CoursesPage from './CoursesPage'
import TrainnerPage from '../components/Trainner/TrainnerPage'
import Footer from '../components/Footer/Footer'
import Testimonial from '../components/Home/Testimonial'


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