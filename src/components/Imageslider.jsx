import React, { useState, useEffect } from 'react';
import FloatingPaper from './FloatingPaper'; // Import FloatingPaper
import photo from "../assets/photo.jpg";
import image3 from "../assets/image3.jpg";
import SparklesCore from './SparklesCore';
export default function ImageSlider() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      image: photo,
      text: "Life is often about finding the right balance between ambition and mindfulness. It's about moving forward but also appreciating where you've been. Every challenge we face is an opportunity for growth, and every setback offers a chance to come back stronger"
    },
    {
      image: image3,
      text: "Life is often about finding the right balance between ambition and mindfulness. It's about moving forward but also appreciating where you've been. Every challenge we face is an opportunity for growth, and every setback offers a chance to come back stronger"
    },
    {
      image: image3,
      text: "Life is often about finding the right balance between ambition and mindfulness. It's about moving forward but also appreciating where you've been. Every challenge we face is an opportunity for growth, and every setback offers a chance to come back stronger"
    },
    {
      image: image3,
      text: "Life is often about finding the right balance between ambition and mindfulness. It's about moving forward but also appreciating where you've been. Every challenge we face is an opportunity for growth, and every setback offers a chance to come back stronger"
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 3000); // Change slide every 3 seconds
    return () => clearInterval(interval);
  }, [slides.length]);

  return (
    <div className="relative h-[600px] flex flex-col items-center mb-0">
      {/* Floating Papers in Background */}
      <FloatingPaper count={6} />
      <SparklesCore/>

      {/* Heading */}
      <h1 className="text-5xl font-bold mt-3 mb-4 text-center text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-pink-500 pb-4">
        Trusted by your favorite companies
      </h1>

      {/* Slider */}
      <div className="relative w-full max-w-6xl overflow-hidden">
        <div
          className="flex transition-transform duration-500 ease-in-out"
          style={{ transform: `translateX(-${currentSlide * 100}%)` }}
        >
          {slides.map((slide, index) => (
            <div key={index} className="flex-shrink-0 w-full flex items-center justify-between mt-2 px-4 py-4">
              {/* Left Side: Image */}
              <div className="w-1/2">
                <img
                  src={slide.image}
                  alt={`Slide ${index + 1}`}
                  className="w-full h-auto object-cover rounded-lg"
                />
              </div>

              {/* Right Side: Paragraph/Text */}
              <div className="w-1/2 pl-10 pr-10">
                <p className="text-lg text-gray-400">{slide.text}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Navigation */}
        <div className="absolute top-1/2 left-0 right-0 flex justify-between px-4">
          <button
            className="bg-gray-800 text-white p-2 rounded-full"
            onClick={() => setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length)}
          >
            &#8249;
          </button>
          <button
            className="bg-gray-800 text-white p-2 rounded-full"
            onClick={() => setCurrentSlide((prev) => (prev + 1) % slides.length)}
          >
            &#8250;
          </button>
        </div>
      </div>
    </div>
  );
}
