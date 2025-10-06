"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

export default function Carousel({ slides, interval = 5000 }) {
  const [current, setCurrent] = useState(0);

  // Auto play effect
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, interval);

    return () => clearInterval(timer);
  }, [slides.length, interval]);

  const prevSlide = () => {
    setCurrent((prev) => (prev - 1 + slides.length) % slides.length);
  };

  const nextSlide = () => {
    setCurrent((prev) => (prev + 1) % slides.length);
  };

  return (
    <div className="flex flex-col items-center p-6">
      {/* Card */}
      <div className="max-w-sm w-full bg-white rounded-2xl shadow-md overflow-hidden">
        {/* Image */}
        <div className="relative h-68 w-full">
          <Image
            src={slides[current].image}
            alt={slides[current].title}
            fill
            className="object-cover"
          />
        </div>

        {/* Content */}
        <div className="p-6 h-[25vh]">
          <h3 className="text-xs font-semibold text-gray-500 tracking-widest mb-2">
            {slides[current].type}
          </h3>
          <p className="text-gray-700 text-sm mb-4">{slides[current].text}</p>
          {/*
          <a
            href={slides[current].link}
            className="text-green-700 font-semibold text-sm hover:underline"
          >
            WATCH NOW
          </a>
          */}
          
        </div>
      </div>

      {/* Bottom navigation */}
      <div className="flex items-center gap-6 mt-6">
        {/* Dots */}
        <div className="flex gap-2">
          {slides.map((_, index) => (
            <span
              key={index}
              className={`w-8 h-1 rounded-full ${
                index === current ? "bg-sky-800" : "bg-sky-200"
              }`}
            ></span>
          ))}
        </div>

        {/* Arrows */}
        <div className="flex gap-3">
          <button
            onClick={prevSlide}
            className="w-10 h-10 flex items-center justify-center rounded-full bg-sky-200 text-sky-800"
          >
            <FaArrowLeft size={18} />
          </button>
          <button
            onClick={nextSlide}
            className="w-10 h-10 flex items-center justify-center rounded-full bg-sky-800 text-white"
          >
            <FaArrowRight size={18} />
          </button>
        </div>
      </div>
    </div>
  );
}
