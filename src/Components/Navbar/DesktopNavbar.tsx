import React from 'react';
import Logo from '../../Assets/Logo.svg';
import { Link, useNavigate } from 'react-router-dom';
import { navbarItems } from '../../Utils/constants/index.tsx';

const Navbar: React.FC = () => {
  const navigate = useNavigate();
  return (
    <div className="">
      <img className="absolute top-0 left-0" src={Logo} alt="logo" />
      <nav className="flex items-center justify-between px-6 py-16 bg-white shadow-md">
        <div className="ml-[320px] flex space-x-6 z-10">
          {navbarItems.map((item) => {
              return (
                    <a 
                      key={item.title} 
                      href={item.path} 
                      className={`font-semibold text-black hover:text-gray-600 cursor-pointer hover:opacity-70`}
                      onClick={() => navigate(item.path)}
                      >
                        {item.title}
                    </a>
                      )
                      })}
        </div>

        <Link
          to="/contact"
          className="px-6 py-2 text-white-0 font-semibold bg-black-0 rounded-full hover:opacity-80"
        >
          Donate Today
        </Link>
      </nav>
    </div>
  );
};

export default Navbar;
