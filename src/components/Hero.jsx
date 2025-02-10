import { motion } from "framer-motion";
import { FileText, Sparkles } from "lucide-react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination, Autoplay } from "swiper/modules";
import FloatingPaper from "./FloatingPaper";
import RoboAnimation from "./RoboAnimation";
import EarthGlobe from "./EarthGlobe";
import React from "react";
import img from '../assets/image.png'
import Trusted from "./Imageslider";
import SparklesCore from "./SparklesCore";
import Sumbit from "./Sumbit";
import Foot from './Foot';
import Footer from "./Footer";
function Hero() {
  return (
    <div>
      {/* Full-Screen Swiper */}
      <Swiper
        modules={[Pagination, Autoplay]}
        spaceBetween={0}
        slidesPerView={1}
        pagination={{ clickable: true }}
        autoplay={{ delay: 7000 }}
        className="h-screen w-full"
      >
        {/* First Slide: Text on left, Earth on right */}
        <SwiperSlide className="flex items-center justify-between px-12 relative">
          {/* Left: Text Content */}
          <div className="text-4xl md:text-4xl lg:text-4xl font-bold text-white mt-60">
            Expand Your Global Reach with Our SMS APIs <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">
              {" "}
              Vapio’s SMS
            </span>
          </div>

          <p className="text-left text-white mt-10 text-lg">
            Vapio’s SMS<strong /> API platform empowers businesses to engage
            <br />
            customers worldwide with seamless, high-volume messaging. Deliver
            <br />
            personalized, timely SMS at scale—whether you’re reaching a few or
            millions<br />
            backed by reliable performance and real-time analytics. Scale
            effortlessly with our proven, secure APIs.
          </p>
          <button className="bg-gradient-to-r from-purple-400 to-pink-600 text-white px-10 py-3 mt-10 ml-1 text-xl rounded-xl">
            Connect to Me
          </button>

          {/* Right: 3D Earth */}
          <div
            className="absolute"
            style={{
              top: "40px", // Adjust position as needed
              left: "500px", // Adjust position as needed
              width: "400px",
              height: "400px",
              zIndex: 10,
            }}
          >
            <EarthGlobe />
          </div>
        </SwiperSlide>

        {/* Second Slide with Heading, Description, and Image */}
        <SwiperSlide className="flex items-center justify-between px-12">
          {/* Left: Heading and Description */}
          <div className="w-1/2 text-left">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="text-3xl font-bold text-white mb-4"
            >
              Unlock the Power of AI for Research
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-gray-400 text-lg"
            >
              With Vapio, transform your research papers into engaging, multimedia
              content. Our AI-powered platform makes it easy to convert complex
              research into visually appealing presentations, podcasts, and more.
            </motion.p>
          </div>

          {/* Right: Image */}
          <div className="w-1/2">
            <img
              src="https://via.placeholder.com/500" // Replace with your actual image URL
              alt="AI for research"
              className="w-full h-auto object-cover rounded-lg"
            />
          </div>
        </SwiperSlide>
      </Swiper>

      {/* Heading Section (After the Swiper) */}
      <div className="relative min-h-[calc(100vh-76px)] flex items-center">
        <FloatingPaper count={6} />
        <SparklesCore/>
        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <h1 className="text-4xl mb-100 font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">
                Your All-in-One Solution for Marketing, Commerce, and Customer Engagement
              </h1>
            </motion.div>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-gray-400 text-xl mt-[-350px] mx-auto"
            >
              Vapio combines powerful tools for marketing automation, personalized
              messaging, and customer support into a single integrated platform.
              Whether you're running targeted campaigns, driving sales through
              seamless commerce solutions, or providing real-time support, Vapio
              streamlines communication at every customer touchpoint. Our platform
              is designed to scale with your business, ensuring efficient and
              impactful engagement with customers across all channels—SMS, email,
              chat, and voice—helping you drive growth and enhance customer loyalty.
            </motion.p>
          </div>
        </div>
        <div className="absolute bottom-0 right-0 w-96 h-96">
          <RoboAnimation />
          
        </div>
      </div>

      {/* New Heading and Image Section (At the End) */}
      <div className="relative flex items-center justify-between px-12 py-20 bg-transparent">
        {/* Left: Heading and Description */}
        <FloatingPaper count={6} />
        <SparklesCore/>
        <div className="w-1/2 text-left">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5,  delay:0.2}}
            className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600 mb-4"
          >
            Instant API Integrations for Rapid Setup
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-gray-400 text-lg mt-10"
          >
            Get up and running quickly with Vapio’s ready-to-use API integrations. Effortlessly connect with your existing systems and start optimizing customer engagement without delays.
          </motion.p>
        </div>

        {/* Right: Image */}
        <div className="w-1/2 flex justify-center h-70 w-150">
          <img
            src={img} // Replace with your actual image URL
            alt="Business Growth"
            className="w-full h-auto object-cover rounded-lg"
          />
        </div>
        

        {/* Robo Animation */}
        
      </div>
      <Trusted/>
      <Sumbit/>
      <Foot/>
      <Footer/>
    </div>
    
  );
}

export default Hero;
