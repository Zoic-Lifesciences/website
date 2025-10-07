"use client";

import Image from "next/image";
import { useState, useEffect } from "react";

export default function Testimonial({ testimonials }) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const itemsPerSlide = 2;

  // Autoplay
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) =>
        prev + itemsPerSlide >= testimonials.length ? 0 : prev + itemsPerSlide
      );
    }, 4000); // change every 4 seconds

    return () => clearInterval(interval);
  }, [testimonials.length]);

  // Calculate visible testimonials
  const visibleTestimonials = testimonials.slice(
    currentIndex,
    currentIndex + itemsPerSlide
  );

  // Dots
  const totalSlides = Math.ceil(testimonials.length / itemsPerSlide);

  return (
    <section className="py-16 bg-[#E1DEE9] flex flex-col items-center">
      <div className="w-[80%] flex justify-between items-center flex-col">
      <h2 className="text-3xl font-semibold mb-12">Client Testimonials</h2>

<div className="flex flex-wrap justify-center gap-10 w-full max-w-5xl transition-all duration-500">
  {visibleTestimonials.map((item, index) => (
    <div
      key={currentIndex + index}
      className="relative bg-white rounded-2xl shadow-md p-6 w-[350px] flex flex-col items-center text-center"
    >
      <h3 className="text-lg font-semibold mb-2">{item.title}</h3>
      <p className="text-gray-600 text-sm italic">"{item.feedback}"</p>

      <div className="absolute bottom-[-10px] w-0 h-0 border-l-[10px] border-r-[10px] border-t-[10px] border-transparent border-t-white"></div>

      <div className="flex flex-col items-center mt-10">
        <Image
          src={item.image}
          alt={item.name}
          width={50}
          height={50}
          className="rounded-full"
        />
        <p className="font-medium mt-2">{item.name}</p>
        <p className="text-gray-500 text-sm">{item.location}</p>
      </div>
    </div>
  ))}
</div>

{/* Dots */}
<div className="flex gap-2 mt-8">
  {Array.from({ length: totalSlides }).map((_, i) => (
    <span
      key={i}
      className={`w-3 h-3 rounded-full ${
        i === Math.floor(currentIndex / itemsPerSlide)
          ? "bg-gray-800"
          : "bg-gray-400"
      }`}
    ></span>
  ))}
</div>
      </div>
      
    </section>
  );
}
