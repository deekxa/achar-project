import React, { useState } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import { toast } from "react-toastify";
import ReCAPTCHA from "react-google-recaptcha";
import { useTheme } from "../context/ThemeContext";
import { FaPepperHot, FaGlobe, FaStar } from "react-icons/fa";

const acharOptions = [
  "Spicy Mango Achar",
  "Exotic Mixed Veggies",
  "Tangy Tropical Fruits",
  "Smoky Chili Fusion",
  "Sweet & Sour Classics",
];

const ApplicationForm = () => {
  const { theme } = useTheme();
  const [verified, setVerified] = useState(false);

  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      message: "",
      favoriteAchar: "",
    },
    validationSchema: Yup.object({
      name: Yup.string().required("Name is required"),
      email: Yup.string().email("Invalid email address").required("Email is required"),
      message: Yup.string().required("Tell us why you're interested in Achar Adventures"),
      favoriteAchar: Yup.string().required("Select your favorite achar"),
    }),
    onSubmit: (values, { resetForm }) => {
      if (!verified) {
        toast.error("Please complete the CAPTCHA to continue");
        return;
      }
      console.log(values);
      toast.success("Your application was submitted successfully!");
      resetForm();
    },
  });

  const handleCaptcha = () => setVerified(true);

  return (
    <div
      className={`min-h-screen flex justify-center items-center p-4 transition-colors duration-500 ${
        theme === "dark"
          ? "bg-gradient-to-t from-gray-900 via-gray-800 to-black text-gray-200"
          : "bg-gradient-to-t from-yellow-50 via-yellow-100 to-yellow-200 text-gray-900"
      }`}
    >
      <div
        className={`w-full max-w-lg p-8 rounded-2xl shadow-2xl transition-all ${
          theme === "dark" ? "bg-gray-800" : "bg-white"
        }`}
      >
        <h2
          className={`text-3xl font-extrabold text-center mb-6 ${
            theme === "dark" ? "text-yellow-400" : "text-blue-600"
          }`}
        >
          Join the AcharLover Adventure!
        </h2>
        <p className="text-center text-sm sm:text-base mb-6 italic">
          Tell us why you love Achar and your favorite flavors — spice up our global community! 🌶️
        </p>

        <form onSubmit={formik.handleSubmit} className="space-y-5">
          
          <div>
            <input
              type="text"
              name="name"
              placeholder="Full Name"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.name}
              className={`w-full px-4 py-3 rounded-lg border focus:ring-2 outline-none transition ${
                theme === "dark"
                  ? "bg-gray-700 border-gray-600 focus:ring-yellow-400"
                  : "bg-yellow-50 border-yellow-200 focus:ring-blue-500"
              }`}
            />
            {formik.touched.name && formik.errors.name && (
              <p className="text-red-400 text-sm mt-1">{formik.errors.name}</p>
            )}
          </div>


          <div>
            <input
              type="email"
              name="email"
              placeholder="Email Address"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.email}
              className={`w-full px-4 py-3 rounded-lg border focus:ring-2 outline-none transition ${
                theme === "dark"
                  ? "bg-gray-700 border-gray-600 focus:ring-yellow-400"
                  : "bg-yellow-50 border-yellow-200 focus:ring-blue-500"
              }`}
            />
            {formik.touched.email && formik.errors.email && (
              <p className="text-red-400 text-sm mt-1">{formik.errors.email}</p>
            )}
          </div>

     
          <div>
            <select
              name="favoriteAchar"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.favoriteAchar}
              className={`w-full px-4 py-3 rounded-lg border focus:ring-2 outline-none transition ${
                theme === "dark"
                  ? "bg-gray-700 border-gray-600 focus:ring-yellow-400"
                  : "bg-yellow-50 border-yellow-200 focus:ring-blue-500"
              }`}
            >
              <option value="">Select Your Favorite Achar</option>
              {acharOptions.map((achar, idx) => (
                <option key={idx} value={achar}>
                  {achar}
                </option>
              ))}
            </select>
            {formik.touched.favoriteAchar && formik.errors.favoriteAchar && (
              <p className="text-red-400 text-sm mt-1">{formik.errors.favoriteAchar}</p>
            )}
          </div>


          <div>
            <textarea
              name="message"
              placeholder="Why are you excited to join the Achar adventure?"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.message}
              className={`w-full px-4 py-3 rounded-lg border focus:ring-2 outline-none transition resize-none h-28 ${
                theme === "dark"
                  ? "bg-gray-700 border-gray-600 focus:ring-yellow-400"
                  : "bg-yellow-50 border-yellow-200 focus:ring-blue-500"
              }`}
            />
            {formik.touched.message && formik.errors.message && (
              <p className="text-red-400 text-sm mt-1">{formik.errors.message}</p>
            )}
          </div>


          <div className="flex justify-center">
            <ReCAPTCHA
              sitekey="6LeIxAcTAAAAAJcZVRqyHh71UMIEGNQ_MXjiZKhI"
              onChange={handleCaptcha}
            />
          </div>

  
          <button
            type="submit"
            className={`w-full py-3 rounded-lg font-bold text-white transition-transform transform hover:scale-105 ${
              theme === "dark"
                ? "bg-gradient-to-r from-yellow-500 to-yellow-400"
                : "bg-gradient-to-r from-blue-500 to-purple-500"
            }`}
          >
            Submit Application
          </button>
        </form>

        <p className="mt-6 text-center text-sm italic text-gray-400 dark:text-gray-300">
          “Spice up your life — one achar adventure at a time!” <FaPepperHot className="inline text-red-400 ml-1" />
        </p>
      </div>
    </div>
  );
};

export default ApplicationForm;
