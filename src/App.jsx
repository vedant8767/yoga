import { useEffect } from 'react'
import './App.css'
import Faq from './components/Faq/Faq'
import Footer from './components/Footer/Footer'
import Navbar from './components/Navbar/Navbar'
import HomePage from './pages/HomePage'
import AOS from 'aos';
import 'aos/dist/aos.css';
import { Outlet } from 'react-router-dom'

function App() {
  useEffect(()=>{
    AOS.init({
        // Add options here, if needed
        duration: 1500, // Animation duration in milliseconds
        once: true, // Whether animation should happen only once or every time you scroll
      });
},[])
  return (
    <div>
      {/* <HomePage/> */}
      <Navbar/>
      <Outlet/>
      <Faq/>
      <Footer/>
    </div>
  )
}

export default App
