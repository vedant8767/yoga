import { useEffect } from 'react'
import './App.css'
import Faq from './components/Faq/Faq'
import Footer from './components/Footer/Footer'
import Navbar from './components/Navbar/Navbar'
import AOS from 'aos';
import 'aos/dist/aos.css';
import { Outlet } from 'react-router-dom'

function App() {
  useEffect(()=>{
    AOS.init({
        duration: 1500, 
        once: true,
      });
},[])
  return (
    <div>
      <Navbar/>
      <Outlet/>
      <Faq/>
      <Footer/>
    </div>
  )
}

export default App
