import React, { useState } from "react";
import { useTheme } from "../context/ThemeContext";
import { GiWorld } from "react-icons/gi";
import { FaUtensils, FaPenFancy, FaSeedling } from "react-icons/fa";

const About = () => {
  const [showDetails, setShowDetails] = useState(true);
  const { theme } = useTheme();

  return (
    <div
      className={`about-container relative min-h-screen pt-28 px-4 sm:px-6 transition-colors duration-500 ${
        theme === "dark"
          ? "bg-gradient-to-t from-black via-gray-900 to-gray-800 text-white"
          : "bg-gradient-to-t from-yellow-50 via-yellow-100 to-yellow-200 text-gray-900"
      }`}
    >

      <div className="mb-8 flex justify-center gap-4 flex-wrap">
        <button
          className={`px-5 py-2 rounded-md text-lg font-bold transition-all duration-300 shadow-md ${
            showDetails
              ? theme === "dark"
                ? "bg-yellow-400 text-black shadow-yellow-400/50"
                : "bg-blue-600 text-white shadow-blue-400/50"
              : theme === "dark"
              ? "bg-gray-800 text-gray-300 shadow-black/40"
              : "bg-gray-300 text-gray-700 shadow-gray-400/40"
          } hover:scale-105 transform`}
          onClick={() => setShowDetails(true)}
        >
          My Story
        </button>

        <button
          className={`px-5 py-2 rounded-md text-lg font-bold transition-all duration-300 shadow-md ${
            !showDetails
              ? theme === "dark"
                ? "bg-yellow-400 text-black shadow-yellow-400/50"
                : "bg-blue-600 text-white shadow-blue-400/50"
              : theme === "dark"
              ? "bg-gray-800 text-gray-300 shadow-black/40"
              : "bg-gray-300 text-gray-700 shadow-gray-400/40"
          } hover:scale-105 transform`}
          onClick={() => setShowDetails(false)}
        >
          My Passions
        </button>
      </div>

      
      {showDetails ? (
        <div className="flex flex-col md:flex-row justify-between items-center gap-6 w-full animate-fadeIn">
          <div className="w-full md:w-1/2 pl-6 text-lg md:text-xl leading-relaxed">
            <span
              className={`font-extrabold text-3xl inline-flex items-center gap-2 ${
                theme === "dark" ? "text-yellow-400" : "text-blue-600"
              }`}
            >
              <GiWorld size={32} /> Global Achar Explorer
            </span>
            <p className="mt-4">
              I’m a passionate foodie traveling the world through jars of achar. Every flavor tells a storyspicy, tangy, sweet, or smoky and I savor them all! My blog is my playground, where I share stories, recipes, and tips from my global adventures.
            </p>
            <p className="mt-2">
              From bustling city markets to hidden village kitchens, I collect flavors, learn techniques, and meet the incredible people behind each jar. My motto: “Life’s too short for boring pickles!”
            </p>
            <p className="mt-2 italic text-sm text-gray-300 dark:text-gray-400">
              “A jar of achar is a passport to culture, spice, and memories.”
            </p>
          </div>
          <img
            src="/image/photoo.jpeg"
            alt="Achar Lover"
            className="w-60 h-60 md:w-[50vh] md:h-[50vh] object-cover mx-auto my-4 shadow-2xl rounded-full border-4 border-gray-300 dark:border-gray-700 transform hover:scale-105 transition-transform duration-500"
          />
        </div>
      ) : (
        <div className="flex flex-col items-center w-full text-lg md:text-xl animate-fadeIn">
          <div className="flex flex-wrap justify-center gap-10">
            <div className="w-full sm:w-1/3 text-center p-4 bg-opacity-20 rounded-xl shadow-lg transition-all hover:shadow-2xl hover:scale-105 transform">
              <FaUtensils size={48} className="mx-auto text-yellow-400 mb-2" />
              <p className="mt-2 font-bold text-xl">Tasting Adventures</p>
              <p className="text-sm mt-1">
                Sampling unique achar flavors across continents, discovering the stories behind every spice.
              </p>
            </div>

            <div className="w-full sm:w-1/3 text-center p-4 bg-opacity-20 rounded-xl shadow-lg transition-all hover:shadow-2xl hover:scale-105 transform">
              <FaPenFancy size={48} className="mx-auto text-green-400 mb-2" />
              <p className="mt-2 font-bold text-xl">Sharing Stories</p>
              <p className="text-sm mt-1">
                Writing blog posts, creating guides, and sharing cultural tidbits to inspire fellow food lovers.
              </p>
            </div>

            <div className="w-full sm:w-1/3 text-center p-4 bg-opacity-20 rounded-xl shadow-lg transition-all hover:shadow-2xl hover:scale-105 transform">
              <FaSeedling size={48} className="mx-auto text-red-400 mb-2" />
              <p className="mt-2 font-bold text-xl">Cooking Experiments</p>
              <p className="text-sm mt-1">
                Mixing flavors, testing new ingredients, and recreating global-inspired achar at home.
              </p>
            </div>
          </div>
          <p className="mt-8 text-sm md:text-base text-gray-300 dark:text-gray-400 text-center italic">
            “Pickle the world, one jar at a time!”
          </p>
        </div>
      )}
    </div>
  );
};

export default About;
