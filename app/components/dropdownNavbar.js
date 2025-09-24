'use client'
import { useState } from "react";
import Link from "next/link";
import { ChevronDownIcon, ChevronUpIcon } from '@heroicons/react/24/solid';
import { motion, AnimatePresence } from "framer-motion";

export default function DropdownMenu({ label, items, closeSidebar }) {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => setIsOpen(!isOpen);

  // Motion variants for dropdown items
  const itemVariants = {
    open: { opacity: 1, y: 0 },
    closed: { opacity: 0, y: -10 },
  };

  return (
    <div className="relative w-full lg:w-auto lg:text-white">
      {/* Main button */}
      <button
        onClick={toggleDropdown}
        className="w-full lg:w-auto  flex justify-between items-center py-4 px-4 lg:px-2 focus:outline-none hover:bg-white/20 rounded transition"
      >
        <span>{label}</span>
        {isOpen ? (
          <ChevronUpIcon className="w-5 h-5 lg:text-white ml-1" />
        ) : (
          <ChevronDownIcon className="w-5 h-5 lg:text-white ml-1" />
        )}
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial="closed"
            animate="open"
            exit="closed"
            variants={{
              open: { transition: { staggerChildren: 0.1, delayChildren: 0.1 } },
              closed: { transition: { staggerChildren: 0.1, staggerDirection: -1 } },
            }}
            className="flex flex-col lg:absolute lg:left-0 lg:mt-2 lg:w-48  hover:bg-white/20 shadow-lg z-50 overflow-hidden"
          >
            {items.map((item, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                transition={{ duration: 0.2, ease: "easeOut" }}
              >
                <Link
                  href={item.href}
                  onClick={() => closeSidebar && closeSidebar()}
                  className="block py-2 px-8 border-b last:border-b-0 hover:bg-gray-100 text-gray-700"
                >
                  {item.text}
                </Link>
              </motion.div>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
