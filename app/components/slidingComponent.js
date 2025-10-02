"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function SlidingComponent({ offerings }) {
  return (
    <section className="p-4 pt-12">
      <div className="text-center">
        <h2 className="font-bold text-3xl mb-2">What We Offer</h2>
        <p>Partner with us to leverage our expertise and resources.</p>
      </div>

      <div className="mt-12 flex flex-col items-center">
        {offerings.map((item, idx) => (
          <motion.div
            key={idx}
            className="flex flex-col items-center text-center mb-12"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: idx * 0.5 }}
          >
            <Image src={item.img} alt={item.title} width={150} height={150} />
            <h1 className="font-bold text-xl mt-4">{item.title}</h1>
            <h2 className="w-[90%] text-gray-700 mt-2">{item.text}</h2>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
