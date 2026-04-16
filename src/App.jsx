import React from 'react'

import Navebar from './components/Navebar'
import { BrowserRouter, Routes, Route, Outlet } from 'react-router-dom'
import Home from './pages/Home'
import Footer from './components/Fotter'
import './index.css'
import AboutPage from './pages/AboutPage'
import ContactPage from './pages/ContactPage'
import LoginPage from './components/Login'
import SignUp from './components/SignUp'
import InstructorLayout from './pages/InstructorLayout'
import HomeInstructor from './components/Instructor/Home'
import InstructorDashboard from './pages/InstructorDashboard'
import AddCources from './pages/AddCourse'
import DashbordLayout from './components/Instructor/DashbordLayout'
import ProtectedRoute from './components/Auth/Protected'
import MyProfile from './pages/MyProfile'
import ViewCourse from './pages/ViewCourse'
import ViewCourses from './components/Instructor/ViewCourses'
import EditCourse from './components/Instructor/EditCourse'
function App() {
  return (
    <div className='w-full h-screen bg-black'>
      <BrowserRouter>

        <Routes>

          {/* Normal Website Layout */}
          <Route
            element={
              <>
                <Navebar />
                <Outlet />
                <Footer />
              </>
            }
          >
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/signup" element={<SignUp />} />
          </Route>

          {/* Instructor Layout */}
          <Route path="/instructor" element={<InstructorLayout />}>
            <Route index element={<HomeInstructor />} />
          </Route>

          {/* Instructor Dashboard (FIXED — duplicate route removed) */}
          <Route path="/instructor/dashboard" element={<InstructorDashboard />}>

            <Route path='dashboard' element={<ProtectedRoute><DashbordLayout /></ProtectedRoute>} />

            <Route path="MyProfile" element={<ProtectedRoute><MyProfile /></ProtectedRoute>} />

            <Route path="courses">
              <Route index element={<ProtectedRoute><ViewCourses /></ProtectedRoute>} />
              <Route path="add" element={<ProtectedRoute><AddCources /></ProtectedRoute>} />
              <Route path="edit/:courseId" element={<ProtectedRoute><EditCourse /></ProtectedRoute>} />
              <Route path='view/:id' element={<ProtectedRoute><ViewCourse /></ProtectedRoute>} />
            </Route>
            <Route path="manage-student" element={<div className='text-white'>Manage Student Page</div>} />

          </Route>

        </Routes>

      </BrowserRouter>
    </div>
  )
}

export default App