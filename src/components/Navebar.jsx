import logo from '../assets/Logo/Logo-Full-Light.png'
import React, { useState } from 'react';
import { Link } from 'react-router-dom';

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
  const [menu, setMenu] = useState(false);

  return (
    <div className="w-full sticky top-0 bg-gray-800/70 text-white z-50">

      <div className="flex justify-between items-center h-14 shadow-sm shadow-gray-600 xl:px-20 md:px-10 sm:px-5 px-4">

        {/* LOGO */}
        <div className="text-2xl font-bold">
          <img src={logo} alt="logo" className="h-8" />
        </div>

        {/* DESKTOP MENU */}
        <ul className="hidden md:flex gap-8 font-semibold">
          <li className='hover:text-teal-400'><Link to="/">Home</Link></li>
          <li className='hover:text-teal-400'><Link to="/about">About</Link></li>

          {/* Categories */}
          <div className="relative">
            <button
              onClick={() => setOpen(!open)}
              className="flex items-center gap-1 hover:text-teal-400"
            >
              Categories <span className="text-xs">▼</span>
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

        {/* DESKTOP AUTH */}
        <div className="hidden md:flex gap-8 font-semibold">
          <button className="hover:text-teal-400">
            <Link to="/instructor">Become Instructor</Link>
          </button>
          <button className="hover:text-teal-400">
            <Link to="/login">Login</Link>
          </button>
          <button className="hover:text-teal-400">
            <Link to="/signup">SignUp</Link>
          </button>
        </div>

        {/* MOBILE HAMBURGER */}
        <button
          className="md:hidden text-2xl"
          onClick={() => setMenu(!menu)}
        >
          ☰
        </button>
      </div>

      {/* MOBILE MENU */}
      {menu && (
        <div className="md:hidden flex flex-col gap-3 px-5 pb-4 bg-gray-900">

          <Link onClick={() => setMenu(false)} to="/">Home</Link>
          <Link onClick={() => setMenu(false)} to="/about">About</Link>

          {/* Mobile Categories */}
          <button onClick={() => setOpen(!open)} className="text-left">
            Categories
          </button>

          {open && (
            <div className="pl-3 flex flex-col gap-2">
              {categories.map((cat) => (
                <Link
                  key={cat.id}
                  to={`/category/${cat.slug}`}
                  onClick={() => {
                    setMenu(false);
                    setOpen(false);
                  }}
                >
                  {cat.name}
                </Link>
              ))}
            </div>
          )}

          <Link onClick={() => setMenu(false)} to="/contact">Contact</Link>
          <Link onClick={() => setMenu(false)} to="/login">Login</Link>
          <Link onClick={() => setMenu(false)} to="/signup">SignUp</Link>
          <Link onClick={() => setMenu(false)} to="/instructor">Become Instructor</Link>

        </div>
      )}
    </div>
  );
};

export default Navebar;