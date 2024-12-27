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
            element:<TeacherTrainingCourses/>
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
        }
      ]
},
])
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}/>
  </StrictMode>,
)
