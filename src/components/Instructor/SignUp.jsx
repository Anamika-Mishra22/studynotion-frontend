import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
// import axios from "axios";
import {signupInstructor} from "../../redux/auth/authSlice"
import { useNavigate } from "react-router-dom";

const SignUp = ({ setIsSignup }) => {
   const dispatch = useDispatch();
  const { loading, error } = useSelector((state) => state.auth);
  const navigator = useNavigate();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    mobile: "",
    bio: "",
    avatar: "",
    qualification: "",
    experience: 0,
    expertise: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

    const handleSubmit = async (e) => {
    e.preventDefault();
    try {
    await dispatch(
      signupInstructor({
        ...formData,
        expertise: formData.expertise.split(","),
      })
    ).unwrap(); // 👈 IMPORTANT

    // ✅ signup successful
    navigator("/instructor"); // ya "/login"
    setIsSignup(false);

  } catch (err) {
    console.error("Signup failed:", err);
  }
  };

  return (
    <div>
      <h2 className="text-2xl font-bold mb-4">Instructor Sign Up</h2>

    
        
      {error && <p className="text-red-500 mb-2">{error}</p>}

      <form onSubmit={handleSubmit} className="space-y-3">
        <div className=" flex gap-2 ">
        <input
          name="name"
          value={formData.name}
          onChange={handleChange}
          placeholder="Name"
          className="w-full p-2 border rounded"
          required
        />
        <input
          name="email"
          type="email"
          value={formData.email}
          onChange={handleChange}
          placeholder="Email"
          className="w-full p-2 border rounded"
          required
        />
        </div>

        <input
          name="password"
          type="password"
          value={formData.password}
          onChange={handleChange}
          placeholder="Password"
          className="w-full p-2 border rounded"
          required
        />
        <input
          name="mobile"
          type="text"
          value={formData.mobile}
          onChange={handleChange}
          placeholder="Mobile Number"
          className="w-full p-2 border rounded"
          required
        />
        <textarea
          name="bio"
          value={formData.bio}
          onChange={handleChange}
          placeholder="Bio"
          className="w-full p-2 border rounded"
        />
        <input
          name="avatar"
          value={formData.avatar}
          onChange={handleChange}
          placeholder="Avatar URL"
          className="w-full p-2 border rounded"
        />
        <input
          name="qualification"
          value={formData.qualification}
          onChange={handleChange}
          placeholder="Qualification"
          className="w-full p-2 border rounded"
        />
        <input
          name="experience"
          type="number"
          value={formData.experience}
          onChange={handleChange}
          placeholder="Experience (years)"
          className="w-full p-2 border rounded"
        />
        <input
          name="expertise"
          value={formData.expertise}
          onChange={handleChange}
          placeholder="Expertise (comma separated)"
          className="w-full p-2 border rounded"
        />

        <button
          type="submit"
          className="w-full bg-yellow-500 py-2 rounded mt-2 font-semibold"
        >
          Sign Up
        </button>
      </form>

      <p className="text-sm mt-4 text-center">
        Already registered?{" "}
        <span
          className="text-teal-400 cursor-pointer"
          onClick={() => setIsSignup(false)}
        >
          Sign in
        </span>
      </p>

    </div>

  );
};

export default SignUp;
