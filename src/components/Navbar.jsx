import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { RiHome4Line } from "react-icons/ri";
import { MdInfoOutline } from "react-icons/md";
import { FaRegAddressCard } from "react-icons/fa";
import { GiNotebook } from "react-icons/gi"; 
import { IoMdImages } from "react-icons/io";
import { BsSun, BsMoon } from "react-icons/bs";
import { useTheme } from "../context/ThemeContext";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { theme, toggleTheme } = useTheme();
  const location = useLocation();

  const navItems = [
    { to: "/", label: "Home", icon: <RiHome4Line size={20} /> },
    { to: "/about", label: "About", icon: <MdInfoOutline size={20} /> },
    { to: "/achar-collection", label: "Achar Collection", icon: <GiNotebook size={20} /> },
   
    { to: "/applicationform", label: "Application", icon: <FaRegAddressCard size={20} /> },
  ];

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 shadow-md transition-colors duration-500 ${
        theme === "dark" ? "bg-black/90" : "bg-yellow-100/90"
      }`}
    >
      <div className="container mx-auto px-6 py-3 flex items-center justify-between">
        <div className={`font-bold text-2xl tracking-wide ${theme === "dark" ? "text-white" : "text-gray-900"}`}>
          <Link to="/" className="hover:opacity-80 transition-all duration-300">
            AcharLover
          </Link>
        </div>

        <div className="hidden md:flex space-x-6 items-center">
          {navItems.map((item, index) => {
            const isActive = location.pathname === item.to;
            return (
              <Link
                key={index}
                to={item.to}
                className={`flex items-center text-base font-medium transition-all duration-300 relative group ${
                  theme === "dark"
                    ? isActive
                      ? "text-yellow-400"
                      : "text-gray-300 hover:text-yellow-400"
                    : isActive
                    ? "text-red-500"
                    : "text-gray-800 hover:text-red-500"
                }`}
              >
                {item.icon}
                <span className="ml-2">{item.label}</span>
                <span
                  className={`absolute -bottom-1 left-0 w-full h-[2px] scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-300 ${
                    theme === "dark" ? "bg-yellow-400" : "bg-red-500"
                  }`}
                />
              </Link>
            );
          })}
        </div>

        <button
          onClick={toggleTheme}
          className={`p-2 rounded-full transition-all duration-300 ${
            theme === "dark" ? "hover:bg-gray-800/70" : "hover:bg-yellow-200/70"
          }`}
          aria-label="Toggle theme"
        >
          {theme === "light" ? (
            <BsMoon size={22} className="text-red-500 transition-transform duration-500 transform hover:rotate-45" />
          ) : (
            <BsSun size={22} className="text-yellow-400 transition-transform duration-500 transform hover:rotate-45" />
          )}
        </button>

        <div className="md:hidden flex items-center">
          <button
            className={`focus:outline-none ${theme === "dark" ? "text-white" : "text-gray-900"}`}
            onClick={toggleMenu}
          >
            <svg
              className="w-7 h-7"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d={isMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}
              />
            </svg>
          </button>
        </div>
      </div>

      {isMenuOpen && (
        <div
          className={`md:hidden px-6 py-4 space-y-4 transition-all duration-500 ${
            theme === "dark" ? "bg-black/90 text-white" : "bg-yellow-100 text-gray-900"
          }`}
        >
          {navItems.map((item, index) => {
            const isActive = location.pathname === item.to;
            return (
              <Link
                key={index}
                to={item.to}
                className={`flex items-center text-lg transition-colors duration-300 ${
                  theme === "dark"
                    ? isActive
                      ? "text-yellow-400"
                      : "hover:text-yellow-400"
                    : isActive
                    ? "text-red-500"
                    : "hover:text-red-500"
                }`}
                onClick={() => setIsMenuOpen(false)}
              >
                {item.icon}
                <span className="ml-2">{item.label}</span>
              </Link>
            );
          })}
        </div>
      )}
    </nav>
  );
};

export default Navbar;
