"use client";

import Navbar from "./navbar";
import { useState, useEffect } from "react";

export default function ShopHero() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const images = ["/hero1.png"];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 5000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="relative">
      {/* Navbar */}
      <Navbar page="" />

      {/* Hero Section with Auto Image Slider */}
      <div className="relative h-[50vh] sm:h-[60vh] md:h-[70vh] lg:h-screen">
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
            <div className="text-left sm:ml-0 md:ml-[70px] lg:ml-[140px] max-w-lg">
              <p className="font-normal text-base sm:text-lg text-logoLink mb-2">
                We&apos;re here to help you
              </p>
              <h1 className="font-bold text-5xl sm:text-5xl md:text-6xl lg:text-6xl text-logoLink">
                Relax & Rest
              </h1>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}