import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchMyCourses } from "../../redux/course/courseSlice";
import { NavLink } from "react-router-dom"
import { useState } from "react"
import { useNavigate } from "react-router-dom";
const Sidebar = () => {
  const [openCourses, setOpenCourses] = useState(false)
  // const [openEdit, setOpenEdit] = useState(false)
  const course = useSelector((state) => state.courses.course);
  const navigate = useNavigate();

  const linkClass = ({ isActive }) =>
    `block px-4 py-2 rounded hover:bg-gray-800 ${isActive ? "bg-gray-800 text-teal-400" : ""
    }`

  //   const dispatch = useDispatch();
  //   const { myCourses = [], loading } = useSelector(
  //   (state) => state.courses || {}
  // );


  //   useEffect(() => {
  //     dispatch(fetchMyCourses());
  //   }, [dispatch]);

  //   if (loading) return <p>Loading...</p>;

  const handleLogout = () => {
    console.log("Before:", localStorage.getItem("token"));

    localStorage.removeItem("token");

    console.log("After:", localStorage.getItem("token"));
    localStorage.removeItem("token");
    navigate("/instructor");
  };

  return (
    <aside className="w-64 bg-gray-900 min-h-screen text-white p-4">

      <NavLink to="/instructor/dashboard" className={linkClass}>
        Dashboard
      </NavLink>
      <NavLink to="/instructor/MyProfile" className={linkClass}>
        My Profile
      </NavLink>
      {/* MY COURSES */}
      <div className="mt-2">
        <button
          onClick={() => setOpenCourses(!openCourses)}
          className="w-full flex justify-between items-center px-4 py-2 rounded hover:bg-gray-800"
        >
          <span>My Courses</span>
          <span className="text-xs">{openCourses ? "▲" : "▼"}</span>
        </button>

        {openCourses && (
          <div className="ml-4 mt-1 space-y-1 text-sm">
            <NavLink
              to="/instructor/courses/add"
              className={linkClass}
            >
              ➕ Add Course
            </NavLink>

            {/* <NavLink
              to="/instructor/courses/edit"
              className={linkClass}
            >
              ✏️ Edit Course
            </NavLink> */}

           

            <NavLink
              to={`/instructor/courses`}
              className={linkClass}
            >
              🗑️ view Course
            </NavLink>



          </div>
        )}
      </div>

      <NavLink to="/instructor/manage-student" className={linkClass}>
        Manage Student
      </NavLink>
      <div className="p-4">
        <button onClick={handleLogout} className={linkClass}>
          Logout
        </button>
      </div>

    </aside>
  )
}


export default Sidebar
