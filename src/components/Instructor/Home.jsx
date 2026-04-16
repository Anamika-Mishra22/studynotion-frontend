import React from 'react'
import { useOutletContext } from "react-router-dom"

import Login from './Login'
import SignUp from './SignUp'
import img from '../../assets/Images/signup2.webp'
const Home = () => {
 const { isSignup, setIsSignup } = useOutletContext()

  return (
    <div className="flex min-h-[calc(100vh-56px)] px-20 bg-black items-center gap-10 text-white">

      {/* LEFT IMAGE */}
      <div className="w-1/2  rounded-xl">
        <img src={img} alt="Signup" />
      </div>

      {/* RIGHT FORM */}
      <div className="w-1/2 bg-gray-900 p-8 rounded-xl">
        {isSignup ? (
          <SignUp setIsSignup={setIsSignup} />
        ) : (
          <Login setIsSignup={setIsSignup} />
        )}
      </div>

    </div>
  )
}

export default Home