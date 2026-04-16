import React, { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import logo from "../../assets/Logo/Logo-Full-Light.png";

const Topbar = () => {
  const [open, setOpen] = useState(false);
  const ref = useRef();
  const navigate = useNavigate();

  // ✅ hooks ALWAYS at top
  const { instructor, loading } = useSelector((state) => state.auth);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (ref.current && !ref.current.contains(event.target)) {
        setOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  // ✅ derived values (safe)
  const firstLetter = instructor?.name?.[0]?.toUpperCase();
  const firstName = instructor?.name?.split(" ")[0];

  return (
    <div className="bg-black text-white">
      <div className="h-16 shadow flex items-center justify-between px-6">
        <img
          src={logo}
          alt="Logo"
          className="w-32 mt-4 ml-4 cursor-pointer"
          onClick={() => navigate("/instructor")}
        />

        <div className="relative" ref={ref}>
          <button
            onClick={() => setOpen(!open)}
            className="flex items-center gap-2 hover:text-teal-400"
            disabled={loading}
          >
            <div className="w-8 h-8 bg-teal-500 rounded-full flex items-center justify-center text-black font-bold">
              {firstLetter || "?"}
            </div>
            <span>{firstName || "loading..."}</span>
          </button>

          {open && (
            <div className="absolute right-0 mt-3 w-44 bg-gray-900 border border-gray-700 rounded-lg shadow-lg">
              <ul className="text-sm">
                <li className="px-4 py-2 hover:bg-gray-800 cursor-pointer" onClick={() => { navigate("/instructor/MyProfile"); setOpen(false); }}>
                  My Account
                </li>
                <li className="px-4 py-2 hover:bg-gray-800 cursor-pointer" onClick={() => { navigate("/instructor/courses"); setOpen(false); }}>
                  Courses
                </li>
                <li className="px-4 py-2 hover:bg-gray-800 cursor-pointer text-red-400" onClick={() => {
                  console.log("Before:", localStorage.getItem("token"));
                  localStorage.removeItem("token");
                  console.log("After:", localStorage.getItem("token"));
                  navigate("/instructor");
                }}>
                  Logout
                </li>
              </ul>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Topbar;
