"use client";

import Image from "next/image";
import Link from "next/link";
import { Play, ChevronLeft, ChevronRight } from "lucide-react";
import { useEffect, useState } from "react";

export default function Testimonial() {
  const testimonials = [
    {
      quote: "I am a very anxious person but use this and feel so relaxed and sleep way better now with the aid of sleepstiq.",
      name: "James Miller",
      title: "CEO, Techbias",
      avatar: "/avatar.png"
    },
    {
      quote: "Sleepstiq has completely transformed my sleep routine. I wake up feeling refreshed every morning.",
      name: "Sarah Johnson",
      title: "Sleep Specialist",
      avatar: "/sarah.jpg"
    },
    {
      quote: "As a busy entrepreneur, quality sleep is crucial. Sleepstiq has been a game-changer for my productivity.",
      name: "Michael Chang",
      title: "Founder, InnovateTech",
      avatar: "/avatar.png"
    }
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
    }, 3000);

    return () => clearInterval(timer);
  }, []);

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
  };

  const goToPrevious = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? testimonials.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const goToNext = () => {
    const isLastSlide = currentIndex === testimonials.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  return (
    <div className="w-full bg-white flex justify-center mt-10 sm:mt-20 px-4 sm:px-6 lg:p-3">
      <div className="ml-0 lg:ml-14">
      <div className="flex flex-col lg:flex-row gap-8 lg:gap-0 w-full max-w-6xl">
        {/* Left Side */}
        <div className="flex-1 w-full lg:w-[475px] p-3 bg-white">
          <h4 className="text-sm font-medium text-gray-500 mb-2">
            Our Amazing Story
          </h4>
          <h2 className="text-3xl sm:text-4xl font-bold text-[#12305B] mb-4">
            10k+ <span className="bg-yellow-100">Happy Customers</span>
          </h2>
          <p className="text-gray-600 mb-4">
            There&apos;s no secret sauce, no wizard behind the curtain. What makes
            Aerolab tick is an interdisciplinary team with a framework that
            fosters candid collaboration.
          </p>
          <Link
            href="#"
            className="text-[#12305B] font-medium inline-flex items-center underline"
          >
            <span className="mr-2 text-xl font-extrabold"><Play /></span>More know about us
          </Link>
        </div>

        {/* Right Side */}
        <div className="relative p-6 h-[400px] sm:h-[455px] w-full lg:w-[474px] bg-yellow-50 shadow-2xl flex flex-col justify-between overflow-hidden">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className={`absolute inset-0 p-6 flex flex-col justify-between transition-opacity duration-500 ease-in-out ${
                index === currentIndex ? 'opacity-100' : 'opacity-0'
              }`}
              aria-hidden={index !== currentIndex}
            >
              <blockquote className="text-gray-700 py-4 sm:py-10 italic mb-4 text-sm sm:text-base">
                "{testimonial.quote}"
              </blockquote>
              <div className="flex items-center">
                <div className="flex-shrink-0 mr-4">
                  <Image
                    src={testimonial.avatar}
                    alt={testimonial.name}
                    width={50}
                    height={50}
                    className="rounded-full"
                  />
                </div>
                <div>
                  <p className="text-gray-900 font-bold">{testimonial.name}</p>
                  <p className="text-gray-500 text-sm">{testimonial.title}</p>
                </div>
              </div>
            </div>
          ))}
          <div className="absolute bottom-4 left-0 right-0 flex justify-center items-center space-x-2">
            <button
              onClick={goToPrevious}
              className="p-2 rounded-full bg-white/50 hover:bg-white/75 transition-colors"
              aria-label="Previous testimonial"
            >
             
            </button>
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`w-2 h-2 rounded-full transition-colors ${
                  index === currentIndex ? 'bg-gray-700' : 'bg-gray-300'
                }`}
                aria-label={`Go to slide ${index + 1}`}
                aria-current={index === currentIndex}
              />
            ))}
            <button
              onClick={goToNext}
              className="p-2 rounded-full bg-white/50 hover:bg-white/75 transition-colors"
              aria-label="Next testimonial"
            >
        
            </button>
          </div>
        </div>
      </div>
    </div>
    </div>
  );
}