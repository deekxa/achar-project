import React from "react";
import { useTheme } from "../context/ThemeContext";
import { FaStar } from "react-icons/fa";

const acharData = [
  {
    name: "Spicy Mango Achar",
    rating: 5,
    flavors: ["Spicy", "Tangy"],
    origin: "Tropical Islands",
    image: "https://mallko.store/cdn/shop/collections/Dallas_chilli.jpg?v=1717005406&width=750",
    story: "A perfect blend of tangy and spicy. A global favorite among foodies who love that kick in every bite!",
    timesTasted: 23,
  },
  {
    name: "Exotic Mixed Veggies",
    rating: 4,
    flavors: ["Savory", "Crunchy"],
    origin: "Far East Adventures",
    image: "https://d4pmlgzenkweq.cloudfront.net/p0breg5a6kp4lx7k9oxspwctzxog",
    story: "A colorful mix that brings together flavors from different continents. Crunchy, zesty, unforgettable!",
    timesTasted: 15,
  },
  {
    name: "Tangy Tropical Fruits",
    rating: 5,
    flavors: ["Sweet", "Tangy"],
    origin: "Caribbean",
    image: "https://thaifoodproduct.com/wp-content/uploads/2017/06/acar.jpg",
    story: "Aachar made from fresh tropical fruits, loved by those who crave adventure in every jar.",
    timesTasted: 30,
  },
  {
    name: "Smoky Chili Fusion",
    rating: 5,
    flavors: ["Smoky", "Spicy"],
    origin: "World Fusion",
    image: "https://cdn11.bigcommerce.com/s-lbtzfspbze/images/stencil/1280x1280/products/3836/8867/spanish__74383.1693254428.jpg?c=2",
    story: "Smoky, fiery, and bold. Perfect for spicy food enthusiasts seeking a world-spanning flavor journey.",
    timesTasted: 18,
  },
  {
    name: "Sweet & Sour Classics",
    rating: 4,
    flavors: ["Sweet", "Sour"],
    origin: "Global Classic",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSpdmmalgrUoYyIiOMAEH5LOOJI1uCeNu8ksQ&s",
    story: "A timeless favorite. Sweet meets sour in harmony — a must-try for any true achar lover.",
    timesTasted: 20,
  },
];

const AcharCollection = () => {
  const { theme } = useTheme();

  return (
    <div
      className={`min-h-screen pt-24 px-6 sm:px-8 transition-colors duration-500 ${
        theme === "dark"
          ? "bg-gradient-to-t from-black via-gray-900 to-gray-800 text-white"
          : "bg-gradient-to-t from-yellow-50 via-yellow-100 to-yellow-200 text-gray-900"
      }`}
    >
      <h2
        className={`text-3xl sm:text-4xl font-extrabold text-center mb-4 transition-colors duration-500 ${
          theme === "dark" ? "text-yellow-400" : "text-blue-600"
        }`}
      >
        Achar Adventures Around the World
      </h2>
      <p className="text-center max-w-3xl mx-auto mb-12 text-lg sm:text-xl">
        Explore the favorite achar of a global enthusiast unique flavors, fun stories, and little surprises from every corner of the world! Each jar tells a story, and every taste is a journey.
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
        {acharData.map((achar, idx) => (
          <div
            key={idx}
            className={`bg-opacity-90 backdrop-blur-md rounded-2xl shadow-lg overflow-hidden relative transform transition-all hover:scale-105 hover:shadow-2xl ${
              theme === "dark" ? "bg-gray-800" : "bg-white"
            }`}
          >
       
            <div className="relative w-full h-64 flex items-center justify-center overflow-hidden group">
              <img
                src={achar.image}
                alt={achar.name}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-black/40 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col justify-center items-center p-4 text-center">
                <p className="font-semibold text-lg">{achar.origin}</p>
                <p className="text-sm mt-2 font-medium">{achar.flavors.join(", ")}</p>
                <p className="text-xs mt-2 italic">Tasted {achar.timesTasted} times</p>
              </div>
            </div>

         
            <div className="p-5">
              <h3
                className={`text-xl font-bold mb-2 transition-colors duration-500 ${
                  theme === "dark" ? "text-yellow-400" : "text-blue-600"
                }`}
              >
                {achar.name}
              </h3>
              <p className="text-sm mb-3">{achar.story}</p>

              <div className="flex items-center mb-3">
                {[...Array(5)].map((_, i) => (
                  <FaStar
                    key={i}
                    className={`mr-1 text-xl ${
                      i < achar.rating ? "text-yellow-400" : "text-gray-400"
                    }`}
                  />
                ))}
              </div>

 
              <div className="flex flex-wrap gap-2 mb-2">
                {achar.flavors.map((flavor, i) => (
                  <span
                    key={i}
                    className={`px-2 py-1 rounded-full text-xs font-semibold ${
                      theme === "dark"
                        ? "bg-yellow-400 text-black"
                        : "bg-blue-100 text-blue-800"
                    }`}
                  >
                    {flavor}
                  </span>
                ))}
              </div>

              <p className="text-xs italic text-gray-400 dark:text-gray-300">
                Experience a taste journey like no other!
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AcharCollection;
