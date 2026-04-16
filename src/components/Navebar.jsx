import logo from '../assets/Logo/Logo-Full-Light.png'
import React, { useState, useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';


// data/categories.js
export const categories = [
  { id: 1, name: "Web Development", slug: "web-development" },
  { id: 2, name: "Full Stack", slug: "full-stack" },
  { id: 3, name: "Machine Learning", slug: "machine-learning" },
  { id: 4, name: "Data Science", slug: "data-science" },
  { id: 5, name: "Algorithms", slug: "algorithms" },
  { id: 6, name: "UI/UX Design", slug: "ui-ux" },
];

const Navebar = () => {
   const [open, setOpen] = useState(false);
  return (
    <div className=" w-full sticky top-0 bg-gray-800/70 text-white z-50 ">
      <div className="flex justify-between items-center  h-14 shadow-sm shadow-gray-600 xl:px-20 md:px-10 sm:px-5 px-2">
        <div className="text-2xl font-bold  ">
            <img src={logo} alt="logo" className="h-8" />
        </div>

        <ul className="flex gap-8 font-semibold ">
          <li className='hover:text-teal-400'> <Link to="/">Home</Link></li>
          <li className='hover:text-teal-400'> <Link to="/about">About</Link></li>
           <div className="relative">
          <button
            onClick={() => setOpen(!open)}
            className="flex items-center gap-1 hover:text-teal-400"
          >
            Categories
            <span className="text-xs">▼</span>
          </button>

          {open && (
            <div className="absolute top-8 left-0 bg-gray-900 border border-gray-700 rounded-lg shadow-lg w-52 z-50">
              {categories.map((cat) => (
                <Link
                  key={cat.id}
                  to={`/category/${cat.slug}`}
                  className="block px-4 py-2 hover:bg-gray-800"
                  onClick={() => setOpen(false)}
                >
                  {cat.name}
                </Link>
              ))}
            </div>
          )}
        </div>
          <li className='hover:text-teal-400'><Link to="/contact">Contact</Link></li>
        </ul>

        <div className="flex gap-8 font-semibold">
          <button className=" hover:text-teal-400 "><Link to="/instructor">Become Instructor</Link></button>
          <button className=" hover:text-teal-400 "> <Link to="/login">Login</Link></button>
          <button className=" hover:text-teal-400 " > <Link to="/signup">SignUp</Link></button>
        </div>
      </div>
    </div>
  );
};

export default Navebar;
