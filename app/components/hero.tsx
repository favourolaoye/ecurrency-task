"use client";

import { useState, useEffect } from "react";
import Navbar from "./navbar";
import Patners from "./patners";

export default function HeroSection() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const images = ["/hero1.png","/man.png"];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000);

    return () => clearInterval(timer);
  });

  return (
    <div className="relative">
      {/* Navbar */}
      <Navbar/>

      {/* Hero Section */}
      <div className="relative h-[60vh] sm:h-[80vh] md:h-screen">
        {images.map((image, index) => (
          <div
            key={index}
            className={`absolute inset-0 bg-cover bg-center transition-opacity duration-1000 ${
              index === currentImageIndex ? "opacity-100" : "opacity-0"
            }`}
            style={{ backgroundImage: `url(${image})` }}
          />
        ))}
        <div className="absolute inset-0 bg-black bg-opacity-10" />
        <div className="absolute inset-0 flex items-center">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-left ml-4 sm:ml-8 md:ml-16 lg:ml-[140px] max-w-lg">
              <p className="font-normal text-base sm:text-lg text-logoLink">
                We&apos;re here to help you
              </p>
              <h1 className="font-bold text-4xl sm:text-5xl md:text-6xl text-logoLink mt-2">
                Relax & Rest
              </h1>
              <p className="text-sm sm:text-base text-logoLink mb-6 sm:mb-8 mt-2">
                With the aid of our Melatonin Sleepstiq, we can assure you that
                you can get quality sleep.
              </p>
              <button className="bg-btnBg text-white p-2 sm:p-3 text-sm font-semibold w-full sm:w-52 text-center rounded transition duration-300">
                Visit Shop
              </button>
            </div>
          </div>
        </div>
      </div>
      <Patners />
    </div>
  );
}