import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import TeacherTrainingCourses from './pages/TeacherTrainingCourses.jsx'
import AboutUsPage from './pages/AboutUsPage.jsx'
import Courses from './pages/Courses.jsx'
import YogaClasses from './pages/YogaClasses.jsx'
import TherapyPage from './pages/TherapyPage.jsx'
import JoinUsPage from './pages/JoinUsPage.jsx'
import HomePage from './pages/HomePage.jsx'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import PaymentPage from './pages/PaymentPage.jsx'
import ContactUs from './components/Contact/ContactUs.jsx'
import Register from './components/Register/Register.jsx'
import ContactPage from './pages/ContactPage.jsx'

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
        {
            path: "/",
            element:<HomePage/>,
        },
        {
            path: "/TeacherTrainingCourses",
            element:<Courses/>
        },
        {
            path: "/YogaClasses",
            element: <YogaClasses/>
        },
        {
            path: "/Courses",
            element:<Courses/>
        },
        {
          path:"/Therapy",
          element:<TherapyPage/>
        },
        {
          path:"/AboutUs",
          element:<AboutUsPage/>
        },
        {
          path:"/JoinUs",
          element:<JoinUsPage/>
        },
        {
          path:"/Payment",
          element:<PaymentPage/>
        },
        {
          path:"/Contact",
          element:<ContactPage/>
        },
        {
          path:"/Register",
          element:<Register/>
        }
      ]
},
])
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}/>
  </StrictMode>,
)
