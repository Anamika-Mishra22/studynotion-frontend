import React, { useEffect, useState } from "react";
import Topbar from "../components/Instructor/Topbar";
import { Outlet } from "react-router-dom";
import Sidebar from "../components/Instructor/Sidebar";
import { useDispatch } from "react-redux";
import { getMyProfile } from "../redux/auth/authSlice";
import { Menu } from "lucide-react";

const InstructorDashboard = () => {
  const dispatch = useDispatch();
  const [openSidebar, setOpenSidebar] = useState(false);

  useEffect(() => {
    dispatch(getMyProfile());
  }, [dispatch]);

  return (
    <div className="flex min-h-screen bg-black text-white">

      {/* MOBILE TOGGLE */}
      <button
        className="md:hidden fixed top-4 left-4 z-50 bg-gray-800 p-2 rounded"
        onClick={() => setOpenSidebar(!openSidebar)}
      >
        <Menu />
      </button>

      {/* SIDEBAR */}
      <div
        className={`
          fixed md:static z-40 h-full
          transition-transform duration-300
          ${openSidebar ? "translate-x-0" : "-translate-x-full"}
          md:translate-x-0
        `}
      >
        <Sidebar />
      </div>

      {/* MAIN AREA */}
      <div className="flex-1 flex flex-col w-full">
        <Topbar />
        <div className="p-4 md:p-6">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default InstructorDashboard;