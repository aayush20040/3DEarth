import React, { useState } from "react";
import SparklesCore from "./SparklesCore";
import FloatingPaper from "./FloatingPaper";
const Submit = () => {
  // State for form fields
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  // State for errors
  const [errors, setErrors] = useState({});

  // Handle Input Change
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    setErrors({ ...errors, [e.target.name]: "" }); // Clear errors on input
  };

  // Handle Form Submit
  const handleSubmit = (e) => {
    e.preventDefault();
    let newErrors = {};

    if (!formData.name.trim()) newErrors.name = "Name is required!";
    if (!formData.email.trim()) newErrors.email = "Email is required!";
    if (!formData.message.trim()) newErrors.message = "Message cannot be empty!";

    setErrors(newErrors);

    if (Object.keys(newErrors).length === 0) {
      console.log("Form submitted successfully:", formData);
      alert("Thank you! Your message has been sent.");
      setFormData({ name: "", email: "", message: "" }); // Reset form
    }
  };

  return (
    <>
      {/* Background Sparkles */}
      <SparklesCore />

      {/* Heading with Sparkles Effect */}
      <div className="relative">
        <SparklesCore />
        <FloatingPaper count={6}/>
        <h1
          data-aos="fade-up"
          className="text-center mt-10 bg-gradient-to-r from-purple-400 to-pink-600 bg-clip-text text-transparent text-5xl md:text-6xl font-semibold tracking-wide mx-5 pb-8 relative z-10"
        >
          Interested in becoming a Vapio partner?
        </h1>
      </div>

      {/* Form Section */}
      <div className="flex flex-col md:flex-row items-center justify-center py-16 relative">
        {/* Left Section: Image */}
        <div className="w-full md:w-1/2 flex justify-center relative z-10">
          <img
            src="https://www.gupshup.io/_next/image?url=https%3A%2F%2Fgs-upload.gupshup.io%2Frevamp%2Fassets%2Fv3%2Fimages%2Fchannel-partners%2Fv5-sidehugForm-1.webp&w=640&q=80"
            alt="Placeholder"
            className="w-[450px] h-[450px] object-cover rounded-3xl shadow-xl transition-transform transform hover:scale-105"
          />
        </div>

        {/* Right Section: Contact Form */}
        <div className="w-full md:w-1/2 bg-white/10 backdrop-blur-lg p-8 shadow-xl rounded-xl max-w-md mx-auto mt-8 md:mt-4 relative z-10 border border-gray-500/20">
          <h2 className="text-3xl font-semibold text-gray-300 mb-6 text-center">
            Contact Us
          </h2>

          <form onSubmit={handleSubmit} className="space-y-5">
            {/* Name Input */}
            <div>
              <label className="block text-gray-300 font-semibold mb-2">
                Your Name
              </label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="w-full p-4 bg-gray-800/50 text-white border border-gray-500 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 transition duration-300 ease-in-out"
              />
              {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name}</p>}
            </div>

            {/* Email Input */}
            <div>
              <label className="block text-gray-300 font-semibold mb-2">
                Your Email
              </label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="w-full p-4 bg-gray-800/50 text-white border border-gray-500 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 transition duration-300 ease-in-out"
              />
              {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}
            </div>

            {/* Message Textarea */}
            <div>
              <label className="block text-gray-300 font-semibold mb-2">
                Your Message
              </label>
              <textarea
                name="message"
                rows="4"
                value={formData.message}
                onChange={handleChange}
                className="w-full p-4 bg-gray-800/50 text-white border border-gray-500 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 transition duration-300 ease-in-out"
              ></textarea>
              {errors.message && <p className="text-red-500 text-sm mt-1">{errors.message}</p>}
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="w-full p-4 bg-gradient-to-r from-purple-400 to-pink-600 text-white font-semibold rounded-lg hover:shadow-lg hover:scale-105 focus:outline-none focus:ring-2 focus:ring-pink-500 transition duration-300 ease-in-out"
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default Submit;
