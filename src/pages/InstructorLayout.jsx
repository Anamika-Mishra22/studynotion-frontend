import React from 'react'
import { Outlet } from 'react-router-dom'
import Navbar from '../components/Instructor/Navbar'
import Home from '../components/Instructor/Home'
import { useState } from 'react'
const InstructorLayout = () => {
     const [isSignup, setIsSignup] = useState(false)
  return (
    <div>
        <Navbar  isSignup={isSignup} setIsSignup={setIsSignup}/>
          <Outlet context={{ isSignup, setIsSignup }} />
       
        {/* <Home /> */}
        
    </div>
  )
}

export default InstructorLayout