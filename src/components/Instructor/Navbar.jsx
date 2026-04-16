import React from 'react'
import logo from '../../assets/Logo/Logo-Full-Light.png'
import { Link, useNavigate } from 'react-router-dom';
const Navbar = ({ isSignup, setIsSignup }) => {
    const navigate = useNavigate();
    return (
        <div className='w-full sticky top-0 bg-gray-800/70 text-white z-50'>

            <div className='flex justify-between items-center  h-14 shadow-sm shadow-gray-600 xl:px-20 md:px-10 sm:px-5 px-2'>
                <div className='flex items-center'>
                    <img onClick={() => navigate('/')} src={logo} alt="Logo" className='w-32 mt-4 ml-4' />
                </div>
                
                

                <div className='flex gap-6 mr-4'>

                    <ul className="flex gap-8 font-semibold text-white">
                    <li> <Link to="/instructor/dashboard">Dashboard</Link></li>
                </ul>
                 <ul className="flex gap-8 font-semibold text-white">
                    <li> <Link to="/instructor/courses/add">Add Courses</Link></li>
                </ul>
                    <button
                        onClick={() => setIsSignup(!isSignup)}
                        className="text-teal-400 font-semibold"
                    >
                        {isSignup ? "Sign In" : "Sign Up"}
                    </button>
                </div>
            </div>
        </div>
    )
}

export default Navbar