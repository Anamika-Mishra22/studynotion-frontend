import React from 'react'
import login from '../assets/Images/login.png'
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const Login = () => {

  const [formData, setFormData] = React.useState({
    email: '',
    password: ''
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  }

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post(
        "https://studynotion-backend-rsv4.onrender.com/api/users/login",
        formData
      );

      if (response.data.token) {
        localStorage.setItem("token", response.data.token);
        navigate("/");
      }

    } catch (error) {
      console.error("Login error:", error?.response?.data || error.message);
    }
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-black text-white px-4 py-10">

      <div className="flex flex-col md:flex-row items-center gap-10 w-full max-w-6xl">

        {/* LEFT */}
        <div className="w-full md:w-1/2 flex flex-col gap-6">

          <h1 className="text-3xl font-bold">Welcome Back</h1>

          <p className="text-base md:text-lg font-semibold text-gray-300">
            Build skills for today, tomorrow, and beyond.{" "}
            <span className="text-cyan-500">
              Education to future-proof your career.
            </span>
          </p>

          <form
            onSubmit={handleSubmit}
            className="flex flex-col gap-4 text-gray-300 w-full"
          >

            <div>
              <label>Email Address:</label>
              <input
                type="email"
                name="email"
                onChange={handleChange}
                required
                className="w-full mt-1 px-3 py-2 bg-gray-800 border border-gray-700 rounded-md focus:ring-2 focus:ring-teal-500 outline-none"
              />
            </div>

            <div>
              <label>Password:</label>
              <input
                type="password"
                name="password"
                onChange={handleChange}
                required
                className="w-full mt-1 px-3 py-2 bg-gray-800 border border-gray-700 rounded-md focus:ring-2 focus:ring-teal-500 outline-none"
              />
            </div>

            <button
              type="submit"
              className="bg-yellow-400 text-black font-bold py-2 rounded-md hover:bg-yellow-300"
            >
              Sign In
            </button>

          </form>

        </div>

        {/* RIGHT */}
        <div className="w-full md:w-1/2 flex justify-center">
          <img src={login} alt="login" className="max-w-sm w-full" />
        </div>

      </div>

    </div>
  )
}

export default Login