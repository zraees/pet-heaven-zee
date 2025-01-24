import React from 'react';
import Logo from '../../Assets/Logo.svg';
import { Link } from 'react-router-dom';

const Navbar: React.FC = () => {
  return (
    <div className="sm:block hidden">
      <img className="absolute top-0 left-0" src={Logo} alt="logo" />
      <nav className="flex items-center justify-between px-6 py-16 bg-white shadow-md">
        <div className="ml-[320px] flex space-x-6 z-10">
          <Link
            to="/"
            className="font-semibold text-black hover:text-gray-600 cursor-pointer hover:opacity-70"
          >
            Home
          </Link>
          <Link
            to="/contact"
            className="font-semibold text-black hover:text-gray-600 cursor-pointer hover:opacity-70"
          >
            Contact
          </Link>
        </div>

        <div className="relative w-80">
          <input
            type="text"
            placeholder="Search something here!"
            className="w-full px-4 py-2 pl-10 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-gray-400"
          />
          <span className="absolute left-4 top-2 text-gray-400">🔍</span>
        </div>

        <Link to="/contact" className="px-6 py-2 text-white-0 font-semibold bg-black-0 rounded-full hover:bg-gray-800">
          Donate Today
        </Link>
      </nav>
    </div>
  );
};

export default Navbar;
