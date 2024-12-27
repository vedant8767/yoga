import './App.css'
import Faq from './components/Faq'
import Footer from './components/Footer'
import Navbar from './components/Navbar'
import HomePage from './pages/HomePage'
import { Outlet } from 'react-router-dom'

function App() {
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
