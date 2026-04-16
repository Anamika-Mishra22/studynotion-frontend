import React from 'react'
import Topbar from '../components/Instructor/Topbar'
// import DashbordLayout from '../components/Instructor/DashbordLayout'
import { Outlet } from 'react-router-dom'
import Sidebar from '../components/Instructor/Sidebar'
import { useDispatch } from 'react-redux'
import { useEffect } from 'react'
import { getMyProfile } from '../redux/auth/authSlice'
const InstructorDashboard = () => {
  const dispatch = useDispatch();

useEffect(() => {
  dispatch(getMyProfile());
}, []);
  return (
    <div className="flex ">
      <Sidebar />
      <div className="flex-1">
        <Topbar />
        <Outlet />
      </div>
    </div>
  
  )
}

export default InstructorDashboard