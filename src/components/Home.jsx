import React from "react";
import Slider from "react-slick";
import { FaUtensils, FaGlobe, FaSeedling, FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { useTheme } from "../context/ThemeContext";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


const miniAcharData = [
  {
    name: "Spicy Mango",
    image: "https://mallko.store/cdn/shop/collections/Dallas_chilli.jpg?v=1717005406&width=750",
    link: "/achar-collection",
  },
  {
    name: "Exotic Veggies",
    image: "https://d4pmlgzenkweq.cloudfront.net/p0breg5a6kp4lx7k9oxspwctzxog",
    link: "/achar-collection",
  },
  {
    name: "Tangy Tropical",
    image: "https://thaifoodproduct.com/wp-content/uploads/2017/06/acar.jpg",
    link: "/achar-collection",
  },
];


const floatingPickles = [
  { emoji: "🥒", size: 40, top: "5%", left: "10%", duration: 6 },
  { emoji: "🫛", size: 45, top: "15%", left: "70%", duration: 7 },
  { emoji: "🥒", size: 35, top: "50%", left: "30%", duration: 8 },
  { emoji: "🫛", size: 50, top: "65%", left: "80%", duration: 9 },
  { emoji: "🥒", size: 30, top: "80%", left: "20%", duration: 6 },
];


function PrevArrow(props) {
  const { onClick } = props;
  return (
    <FaChevronLeft
      onClick={onClick}
      className="text-4xl text-gray-900 dark:text-gray-200 absolute left-[-50px] top-1/2 -translate-y-1/2 z-20 cursor-pointer hover:scale-110 transition-transform"
    />
  );
}

function NextArrow(props) {
  const { onClick } = props;
  return (
    <FaChevronRight
      onClick={onClick}
      className="text-4xl text-gray-900 dark:text-gray-200 absolute right-[-50px] top-1/2 -translate-y-1/2 z-20 cursor-pointer hover:scale-110 transition-transform"
    />
  );
}


const sliderSettings = {
  dots: true,
  infinite: true,
  speed: 800,
  slidesToShow: 2,
  slidesToScroll: 1,
  centerMode: true,
  centerPadding: "60px",
  prevArrow: <PrevArrow />,
  nextArrow: <NextArrow />,
  responsive: [
    { breakpoint: 1024, settings: { slidesToShow: 1, centerPadding: "40px" } },
    { breakpoint: 640, settings: { slidesToShow: 1, centerPadding: "20px" } },
  ],
};

const Home = () => {
  const { theme } = useTheme();
  const navigate = useNavigate();

  return (
    <div
      className={`relative min-h-screen transition-colors duration-500 overflow-hidden ${
        theme === "dark"
          ? "bg-gradient-to-t from-gray-900 via-gray-800 to-black text-gray-200"
          : "bg-gradient-to-t from-yellow-50 via-yellow-100 to-yellow-200 text-gray-900"
      }`}
    >
   
      {floatingPickles.map((item, idx) => (
        <motion.div
          key={idx}
          className="absolute text-opacity-70"
          style={{ top: item.top, left: item.left, fontSize: item.size }}
          animate={{ y: ["0%", "15%", "0%"], rotate: [0, 10, -10, 0] }}
          transition={{ repeat: Infinity, duration: item.duration, ease: "easeInOut" }}
        >
          {item.emoji}
        </motion.div>
      ))}

     
      <div className="relative flex flex-col justify-center items-center min-h-[50vh] px-4 sm:px-6 text-center z-10">
        <motion.h1
          className={`text-3xl sm:text-5xl font-extrabold`}
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          Welcome to <span className={theme === "dark" ? "text-yellow-400" : "text-blue-600"}>AcharLover</span>
        </motion.h1>
        <motion.p
          className="mt-4 text-lg sm:text-xl max-w-2xl"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 1 }}
        >
          Explore the global wonders of achar — crunchy, tangy, and unforgettable!
        </motion.p>
      </div>

   
      <div className="max-w-6xl mx-auto mt-12 px-4 grid grid-cols-1 sm:grid-cols-3 gap-8 z-10 relative">
        <motion.div
          whileHover={{ scale: 1.05 }}
          className={`p-6 rounded-xl shadow-lg transition-all cursor-pointer ${
            theme === "dark" ? "bg-gray-800 hover:bg-gray-700" : "bg-white hover:bg-yellow-50"
          }`}
        >
          <FaUtensils size={48} className="mx-auto mb-4 text-yellow-400" />
          <h3 className="text-xl font-bold text-center mb-2">Flavor Discovery</h3>
          <p className="text-center text-sm">
            Dive into unique achar blends from around the world — learn what makes each jar special.
          </p>
        </motion.div>

        <motion.div
          whileHover={{ scale: 1.05 }}
          className={`p-6 rounded-xl shadow-lg transition-all cursor-pointer ${
            theme === "dark" ? "bg-gray-800 hover:bg-gray-700" : "bg-white hover:bg-yellow-50"
          }`}
        >
          <FaGlobe size={48} className="mx-auto mb-4 text-green-400" />
          <h3 className="text-xl font-bold text-center mb-2">Cultural Stories</h3>
          <p className="text-center text-sm">
            Discover the history, traditions, and secret techniques behind famous achar from every region.
          </p>
        </motion.div>

        <motion.div
          whileHover={{ scale: 1.05 }}
          className={`p-6 rounded-xl shadow-lg transition-all cursor-pointer ${
            theme === "dark" ? "bg-gray-800 hover:bg-gray-700" : "bg-white hover:bg-yellow-50"
          }`}
        >
          <FaSeedling size={48} className="mx-auto mb-4 text-red-400" />
          <h3 className="text-xl font-bold text-center mb-2">Cooking & Pairing</h3>
          <p className="text-center text-sm">
            Tips to recreate, mix, and pair achar with meals to enhance your culinary adventure.
          </p>
        </motion.div>
      </div>

      
      <div className="max-w-6xl mx-auto mt-16 px-4 relative z-10">
        <h2
          className={`text-2xl sm:text-3xl font-bold mb-6 text-center ${
            theme === "dark" ? "text-yellow-400" : "text-blue-600"
          }`}
        >
          Featured Achar Jars
        </h2>
        <Slider {...sliderSettings}>
          {miniAcharData.map((achar, idx) => (
            <motion.div
              key={idx}
              whileHover={{ scale: 1.07 }}
              className={`relative cursor-pointer rounded-xl shadow-lg overflow-hidden mx-2 transition-all`}
              onClick={() => navigate(achar.link)}
            >
              <img
                src={achar.image}
                alt={achar.name}
                className="w-full h-72 sm:h-80 md:h-96 object-cover rounded-xl"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-black/40 p-4 text-white transition-opacity opacity-0 hover:opacity-100">
                <h3 className="text-lg font-semibold">{achar.name}</h3>
                <p className="text-sm mt-1">Click to explore this jar and learn its unique flavor story.</p>
              </div>
            </motion.div>
          ))}
        </Slider>
      </div>

      <div className="h-24" />
    </div>
  );
};

export default Home;
