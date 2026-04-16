import React, { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { HiOutlineMenu, HiX } from "react-icons/hi";
import logo from "../../assets/Logo/Logo-Full-Light.png";

const Topbar = () => {
  const [open, setOpen] = useState(false);
  const [mobileMenu, setMobileMenu] = useState(false);

  const ref = useRef();
  const navigate = useNavigate();

  const { instructor, loading } = useSelector((state) => state.auth);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (ref.current && !ref.current.contains(event.target)) {
        setOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const firstLetter = instructor?.name?.[0]?.toUpperCase();
  const firstName = instructor?.name?.split(" ")[0];

  return (
    <div className="bg-black text-white w-full">
      <div className="h-16 flex items-center justify-between px-4 md:px-6 shadow">

        {/* LOGO */}
        <img
          src={logo}
          alt="Logo"
          className="w-28 md:w-32 cursor-pointer"
          onClick={() => navigate("/instructor")}
        />

        {/* DESKTOP MENU */}
        <div className="hidden md:flex items-center gap-6">

          <button
            onClick={() => navigate("/instructor/courses")}
            className="hover:text-teal-400"
          >
            Courses
          </button>

          {/* PROFILE DROPDOWN */}
          <div className="relative" ref={ref}>
            <button
              onClick={() => setOpen(!open)}
              className="flex items-center gap-2 hover:text-teal-400"
              disabled={loading}
            >
              <div className="w-8 h-8 bg-teal-500 rounded-full flex items-center justify-center text-black font-bold">
                {firstLetter || "?"}
              </div>
              <span>{firstName || "Loading..."}</span>
            </button>

            {open && (
              <div className="absolute right-0 mt-3 w-44 bg-gray-900 border border-gray-700 rounded-lg shadow-lg">
                <ul className="text-sm">
                  <li
                    className="px-4 py-2 hover:bg-gray-800 cursor-pointer"
                    onClick={() => {
                      navigate("/instructor/MyProfile");
                      setOpen(false);
                    }}
                  >
                    My Account
                  </li>

                  <li
                    className="px-4 py-2 hover:bg-gray-800 cursor-pointer"
                    onClick={() => {
                      navigate("/instructor/courses");
                      setOpen(false);
                    }}
                  >
                    Courses
                  </li>

                  <li
                    className="px-4 py-2 hover:bg-gray-800 cursor-pointer text-red-400"
                    onClick={() => {
                      localStorage.removeItem("token");
                      navigate("/instructor");
                    }}
                  >
                    Logout
                  </li>
                </ul>
              </div>
            )}
          </div>
        </div>

        {/* MOBILE MENU BUTTON */}
        <button
          className="md:hidden text-2xl"
          onClick={() => setMobileMenu(!mobileMenu)}
        >
          {mobileMenu ? <HiX /> : <HiOutlineMenu />}
        </button>
      </div>

      {/* MOBILE MENU */}
      {mobileMenu && (
        <div className="md:hidden bg-gray-900 border-t border-gray-800 px-4 py-4 space-y-3">

          <button
            onClick={() => {
              navigate("/instructor/courses");
              setMobileMenu(false);
            }}
            className="block w-full text-left hover:text-teal-400"
          >
            Courses
          </button>

          <button
            onClick={() => {
              navigate("/instructor/MyProfile");
              setMobileMenu(false);
            }}
            className="block w-full text-left hover:text-teal-400"
          >
            My Account
          </button>

          <button
            onClick={() => {
              localStorage.removeItem("token");
              navigate("/instructor");
            }}
            className="block w-full text-left text-red-400"
          >
            Logout
          </button>

        </div>
      )}
    </div>
  );
};

export default Topbar;