import React from "react";
import { GrSecure } from "react-icons/gr";
import { BsGraphUp } from "react-icons/bs";
import { FaThumbsUp } from "react-icons/fa";
import Lock from "../assets/lock.jpg"; // Replace with your image
import SparklesCore from "./SparklesCore"; // Import SparklesCore
import FloatingPaper from "./FloatingPaper";

const Foot = () => {
  return (
    <>
      {/* Sparkles Effect */}
      

      <div className="min-h-[550px] flex flex-col justify-center items-center  relative">
        {/* Heading */}
        <SparklesCore />
        <FloatingPaper count={6}/>
        <h1 className="text-5xl text-center bg-clip-text text-transparent bg-gradient-to-r from-indigo-600 to-pink-500 font-bold mb-10 z-10 pb-2">
          Why Vapio
        </h1>

        <div className="flex flex-col md:flex-row items-center gap-12 container px-6 relative z-10">
          {/* Left Column: Image */}
          <div className="md:w-1/2 mt-10" data-aos="zoom-in">
            <img
              src={Lock}
              alt="Security Lock"
              className="w-full max-w-[400px] h-auto object-cover mx-auto"
            />
          </div>

          {/* Right Column: Features */}
          <div className="md:w-1/2 flex flex-col mt-10 mr-40 items-end gap-8">
            <div data-aos="fade-up" className="flex items-center gap-4">
              <GrSecure className="text-4xl h-12 w-12  text-pink-600" />
              <p className="text-2xl font-semibold text-gray-300">Security</p>
            </div>
            <div data-aos="fade-up" className="flex items-center gap-4">
              <BsGraphUp className="text-4xl h-12 w-12 text-indigo-600" />
              <p className="text-2xl font-semibold text-gray-300">Scalable</p>
            </div>
            <div data-aos="fade-up" className="flex items-center gap-4">
              <FaThumbsUp className="text-4xl h-12 w-12 text-purple-600" />
              <p className="text-2xl font-semibold text-gray-300">Reliable</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Foot;
