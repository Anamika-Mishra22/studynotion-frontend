import React from 'react'
import axios from 'axios';
import api from '../../utils/api';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';

const login =  ({ setIsSignup }) => {
  // const {state} = useSelector((state) => state.user);
  const navigation = useNavigate();
  const [formData, setFormData] = React.useState({
    email: '',
    password: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };


  const handleSubmit = async (e) => {
    e.preventDefault();
    // Handle login logic here

    console.log("Login Data Submitted:", formData);

    try{
      const response = await api.post("/instructors/login", formData);
      alert("Login successful!");
      // state.user = action.payload.user;

      localStorage.setItem("token", response.data.token);
      navigation("/instructor/dashboard");
      console.log("User logged in successfully:", response.data);
    }
    catch(error){
      console.error("Error logging in user:", error.response ? error.response.data : error.message);
    }
  }

  return (
    <>
      <h2 className="text-2xl font-bold mb-4">Instructor Login</h2>
      <form action="" onSubmit={handleSubmit}>
      <input
        type="email"
        name='email'
        placeholder="Email"
        className="w-full mb-3 p-2 rounded bg-gray-800   focus:outline-none focus:ring-2 focus:ring-teal-500"
        value={formData.email}
        onChange={handleChange} 
      />

      <input
        type="password"
        name='password'
        placeholder="Password"
        className="w-full mb-3 p-2 rounded bg-gray-800   focus:outline-none focus:ring-2 focus:ring-teal-500"
        value={formData.password}
        onChange={handleChange}
      />

      <button className="w-full bg-yellow-500 py-2 rounded mt-2">
        Login
      </button>
      </form>

      <p className="text-sm mt-4 text-center">
        New here?{" "}
        <span
          className="text-teal-400 cursor-pointer"
          onClick={() => setIsSignup(true)}
        >
          Create account
        </span>
      </p>
    </>
  )
}

export default login