"use client";
import { useState, useEffect } from "react";
import Image from "next/image";

export default function Carousel({ images, interval = 3000 }) {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % images.length);
    }, interval);
    return () => clearInterval(timer);
  }, [images, interval]);

  return (
    <div className="bg-white shadow-lg rounded-2xl p-6 w-full h-full mx-auto">
      <Image
        src={images[current]}
        alt="Award"
        width={300}
        height={200}
        className="rounded-xl mx-auto"
      />
    </div>
  );
}
