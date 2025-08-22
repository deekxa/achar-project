import React from "react";
import { FaFacebook, FaInstagram } from "react-icons/fa";
import { useTheme } from "../context/ThemeContext";

const Footer = () => {
  const { theme } = useTheme();

  return (
    <footer
      className={`shadow-lg py-6 sm:py-10 transition-colors duration-500 ${
        theme === "dark" ? "bg-black/90 text-yellow-400" : "bg-yellow-50 text-red-500"
      }`}
    >
      <div className="container mx-auto px-6">

        <div className="mb-4 sm:mb-6 text-center">
          <p
            className={`text-sm sm:text-base transition-colors duration-500 ${
              theme === "dark" ? "text-gray-300" : "text-gray-700"
            }`}
          >
            Passion for achar, stories, and flavors from all over the world.
          </p>
          <p
            className={`text-xs sm:text-lg transition-colors duration-500 ${
              theme === "dark" ? "text-gray-500" : "text-gray-600"
            }`}
          >
            Let’s connect and share the love for spicy, tangy goodness!
          </p>
        </div>

     
        <div className="mb-6 text-center">
          <a
            href="tel:+917011327067"
            className={`text-xl sm:text-2xl transition-all duration-300 ${
              theme === "dark"
                ? "text-yellow-400 hover:text-yellow-500"
                : "text-red-500 hover:text-red-600"
            }`}
          >
            Call Aavash: +91 70113 27067
          </a>
        </div>

  
        <div className="mb-6 flex justify-center space-x-6 sm:space-x-8">
          <a
            href="https://www.facebook.com/binge07"
            target="_blank"
            rel="noopener noreferrer"
            className={`text-2xl sm:text-3xl transition-all duration-300 ${
              theme === "dark" ? "text-yellow-400 hover:text-white" : "text-red-500 hover:text-blue-600"
            }`}
          >
            <FaFacebook />
          </a>
          <a
            href="https://www.instagram.com/hangkimg_sangkim/"
            target="_blank"
            rel="noopener noreferrer"
            className={`text-2xl sm:text-3xl transition-all duration-300 ${
              theme === "dark" ? "text-yellow-400 hover:text-white" : "text-red-500 hover:text-pink-600"
            }`}
          >
            <FaInstagram />
          </a>
        </div>


        <div
          className={`text-center text-xs sm:text-sm transition-colors duration-500 ${
            theme === "dark" ? "text-gray-500" : "text-gray-600"
          }`}
        >
          <p>&copy; {new Date().getFullYear()} AcharLover. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
