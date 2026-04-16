import React , { useState, useRef , useEffect} from "react";
import { Eye, EyeOff } from "lucide-react";
import SignUpImg from '../assets/Images/signup.png'
import axios from "axios";
const SignUp = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: ""
  });
  
  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("Form Data Submitted:", formData);
    try {
      const response = await axios.post("http://localhost:5000/api/users/signup", formData);
      console.log("User registered successfully:", response.data);
    } catch (error) {
      console.error("Error registering user:", error.response ? error.response.data : error.message);
    }
  };


   const scaleRef = useRef(null);
  
      useEffect(() => {
          const observer = new IntersectionObserver(
              (entries) => {
                  entries.forEach((entry) => {
                      if (entry.isIntersecting) {
                          if (entry.target === scaleRef.current) {
                              entry.target.classList.add("animate-ImageScale");
                          }
                          entry.target.classList.remove("scroll-hidden");
                      } else {
                          // viewport se bahar jaate hi reset
                          if (entry.target === scaleRef.current) {
                              entry.target.classList.remove("animate-ImageScale");
                          }
                          entry.target.classList.add("scroll-hidden");
                      }
                  });
              }
              , { threshold: 0.1 });
  
          if (scaleRef.current) observer.observe(scaleRef.current);
          return () => observer.disconnect();
      }, []);
  return (
    <div>
      <div className="flex justify-between items-center gap-10 mx-40 pt-20">

        {/* left */}
        <div className='w-1/2 flex flex-col gap-6 pr-20 text-white'>

            <h1 className='text-3xl font-bold'>Join the millions learning to code with StudyNotion for free</h1>
            <p className='text-[18px] font-semibold'>Build skills for today, tomorrow, and beyond.
               <span className='text-cyan-600 font-mono'>
               Education to future-proof your career.</span></p>
            <form onSubmit={handleSubmit} className="flex flex-col gap-4">
        {/* First Name */}
        <div className=" flex gap-4 justify-center items-center">
        <div>
          <label className="text-sm text-gray-400">First Name</label>
          <input
            name="firstName"
            type="text"
            value={formData.firstName}
            onChange={(e) => setFormData({ ...formData, firstName: e.target.value })}
            placeholder="Enter first name"
            className="w-full mt-1 px-4 py-2 rounded-lg bg-gray-800 text-white border border-gray-700 focus:outline-none focus:ring-2 focus:ring-teal-500"
          />
        </div>

        {/* Last Name */}
        <div>
          <label className="text-sm text-gray-400">Last Name</label>
          <input
            name="lastName"
            type="text"
            value={formData.lastName}
            onChange={(e) => setFormData({ ...formData, lastName: e.target.value })}
            placeholder="Enter last name"
            className="w-full mt-1 px-4 py-2 rounded-lg bg-gray-800 text-white border border-gray-700 focus:outline-none focus:ring-2 focus:ring-teal-500"
          />
        </div>
          </div>
        {/* Email */}
        <div>
          <label className="text-sm text-gray-400">Email</label>
          <input
            name="email"
            type="email"
            value={formData.email}
            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
            placeholder="Enter email"
            className="w-full mt-1 px-4 py-2 rounded-lg bg-gray-800 text-white border border-gray-700 focus:outline-none focus:ring-2 focus:ring-teal-500"
          />
        </div>

        {/* Password */}
        <div className=" flex gap-4 justify-between items-start">
        <div className="relative">
          <label className="text-sm text-gray-400">Password</label>
          <input
            name="password"
            type={showPassword ? "text" : "password"}
            value={formData.password}
            onChange={(e) => setFormData({ ...formData, password: e.target.value })}
            placeholder="Enter password"
            className="w-full mt-1 px-4 py-2 pr-10 rounded-lg bg-gray-800 text-white border border-gray-700 focus:outline-none focus:ring-2 focus:ring-teal-500"
          />
          <button
            type="button"
            onClick={() => setShowPassword(!showPassword)}
            className="absolute right-3 top-9 text-gray-400 hover:text-white"
          >
            {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
          </button>

          {/* Forgot password */}
          <div className="text-right mt-1">
            <a
              href="/forgot-password"
              className="text-xs text-teal-400 hover:underline"
            >
              Forgot password?
            </a>
          </div>
        </div>

        {/* Confirm Password */}
        <div className="relative">
          <label className="text-sm text-gray-400">Confirm Password</label>
          <input
            name="confirmPassword"
            type={showConfirmPassword ? "text" : "password"}
            value={formData.confirmPassword}
            onChange={(e) => setFormData({ ...formData, confirmPassword: e.target.value })}
            className="w-full mt-1 px-4 py-2 pr-10 rounded-lg bg-gray-800 text-white border border-gray-700 focus:outline-none focus:ring-2 focus:ring-teal-500"
          />
          <button
            type="button"
            onClick={() => setShowConfirmPassword(!showConfirmPassword)}
            className="absolute right-3 top-9 text-gray-400 hover:text-white"
          >
            {showConfirmPassword ? <EyeOff size={18} /> : <Eye size={18} />}
          </button>
        </div>
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          className="mt-4 bg-yellow-500 hover:bg-yellow-600 text-black font-semibold py-2 rounded-xl transition"
        >
          Sign Up
        </button>
      </form>
        </div>

        {/* right */}
        <div ref={scaleRef} className="w-1/2 scroll-hidden pl-20">
          <img src={SignUpImg} alt="Sign Up" />
        </div>
      </div>
    </div>
  )
}

export default SignUp