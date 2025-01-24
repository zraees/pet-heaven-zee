import React from "react";
import { FaFacebookF, FaTwitter, FaInstagram } from "react-icons/fa";

const Footer: React.FC = () => {
  return (
    <footer className="bg-black-0 text-yellow-0 py-10 sm:py-20 rounded-t-3xl mt-auto">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex flex-col gap-4 md:gap-0 md:flex-row items-center justify-between">
          {/* Navigation Links */}
          <div className="flex space-x-6 text-lg">
            <a href="/" className="hover:text-orange-400 transition">Home</a>
            <a href="/contact" className="hover:text-orange-400 transition">Contact</a>
          </div>

          {/* Copyright Text */}
          <p className="text-center text-sm mt-4 md:mt-0">
            © 2024 My Pets. All rights reserved.
          </p>

          {/* Social Icons */}
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="https://fb.com" target="_blank" className="hover:text-orange-400 transition">
              <FaFacebookF size={20} />
            </a>
            <a href="https://twitter.com" target="_blank" className="hover:text-orange-400 transition">
              <FaTwitter size={20} />
            </a>
            <a href="https://instagram.com" target="_blank" className="hover:text-orange-400 transition">
              <FaInstagram size={20} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
