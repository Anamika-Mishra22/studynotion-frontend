import React, { useState } from "react";
import logo from "../../assets/Logo/Logo-Full-Light.png";
import { Link, useNavigate } from "react-router-dom";
import { HiOutlineMenu, HiX } from "react-icons/hi";

const Navbar = ({ isSignup, setIsSignup }) => {
  const navigate = useNavigate();
  const [mobileMenu, setMobileMenu] = useState(false);

  return (
    <div className="w-full sticky top-0 bg-gray-800/80 text-white z-50">

      <div className="flex justify-between items-center h-14 px-4 md:px-10 shadow-sm shadow-gray-700">

        {/* LOGO */}
        <img
          onClick={() => navigate("/")}
          src={logo}
          alt="Logo"
          className="w-28 md:w-32 cursor-pointer"
        />

        {/* DESKTOP MENU */}
        <div className="hidden md:flex items-center gap-6">

          <Link to="/instructor/dashboard" className="hover:text-teal-400">
            Dashboard
          </Link>

          <Link to="/instructor/courses/add" className="hover:text-teal-400">
            Add Courses
          </Link>

          <button
            onClick={() => setIsSignup(!isSignup)}
            className="text-teal-400 font-semibold"
          >
            {isSignup ? "Sign In" : "Sign Up"}
          </button>
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
        <div className="md:hidden bg-gray-900 border-t border-gray-700 px-4 py-4 space-y-3">

          <Link
            to="/instructor/dashboard"
            onClick={() => setMobileMenu(false)}
            className="block hover:text-teal-400"
          >
            Dashboard
          </Link>

          <Link
            to="/instructor/courses/add"
            onClick={() => setMobileMenu(false)}
            className="block hover:text-teal-400"
          >
            Add Courses
          </Link>

          <button
            onClick={() => {
              setIsSignup(!isSignup);
              setMobileMenu(false);
            }}
            className="text-teal-400 font-semibold"
          >
            {isSignup ? "Sign In" : "Sign Up"}
          </button>

        </div>
      )}

    </div>
  );
};

export default Navbar;