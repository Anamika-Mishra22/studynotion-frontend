import React from 'react'
import  login from '../assets/Images/login.png'
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
    // Handle login logic here

    console.log("Login Data Submitted:", formData);

    try{
      const response = await axios.post("https://studynotion-backend-rsv4.onrender.com/api/users/login", formData);
      console.log("User logged in successfully:", response.data);
      if(response.data.token){
        localStorage.setItem("token", response.data.token);
        navigate("/");
      }
    }
    catch(error){
      console.error("Error logging in user:", error.response ? error.response.data : error.message);
    }
  }
  return (
    <div>
      <div className='flex justify-center items-center gap-20 py-40 bg-black text-white px-4'>
        {/* left */}
        <div className='w-1/2 flex flex-col gap-6 pr-80'>
            <h1 className='text-3xl font-bold'>Welcome Back</h1>
            <p className='text-[18px] font-semibold'>Build skills for today, tomorrow, and beyond.
               <span className='text-cyan-600 font-mono'>
               Education to future-proof your career.</span></p>

               <form action="" onSubmit={handleSubmit} className='flex flex-col justify-center items-start gap-4 w-full text-gray-400  '>
                <label htmlFor="email">Email Address:</label>
                <input type="email" onChange={handleChange} id="email" name="email" placeholder='enter your email' required  className='border border-gray-700 rounded-md px-2  text-gray-100 py-2  focus:outline-none focus:ring-2 focus:ring-teal-500 w-full bg-gray-800  '/>
                <label htmlFor="password">Password:</label>
                <input type="password" onChange={handleChange} id="password" name="password" placeholder='enter your password' required  className='border border-gray-700 rounded-md px-2  text-gray-100 py-2 focus:outline-none focus:ring-2 focus:ring-teal-500 w-full bg-gray-800'/>
                <button className='bg-yellow-400  px-2 w-full py-2 rounded-md text-black font-bold mt-2' type="submit">Signin</button>
               </form>
        </div>
        {/* Right */}
        <div>
            <img src={login} alt="" />
        </div>
      </div>
    </div>
  )
}

export default Login