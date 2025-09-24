'use client'
import { useState } from "react";
import Link from "next/link";
import { ChevronDownIcon, ChevronUpIcon } from '@heroicons/react/24/solid';
import { motion, AnimatePresence } from "framer-motion";

export default function DropdownMenu({ label, items, closeSidebar }) {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => setIsOpen(!isOpen);

  return (
    <div className="w-full">
      {/* Main button */}
      <button
        onClick={toggleDropdown}
        className="w-full flex justify-between items-center py-4 px-4 focus:outline-none"
      >
        <span>{label}</span>
        {isOpen ? (
          <ChevronUpIcon className="w-5 h-5 text-gray-600" />
        ) : (
          <ChevronDownIcon className="w-5 h-5 text-gray-600" />
        )}
      </button>

      <AnimatePresence>
  {isOpen && (
    <motion.div
      initial="closed"
      animate="open"
      exit="closed"
      variants={{
        open: { transition: { staggerChildren: 0.1, delayChildren: 0.15 } },
        closed: { transition: { staggerChildren: 0.1, staggerDirection: -1 } },
      }}
      className="flex flex-col bg-white overflow-hidden"
    >
      {items.map((item, index) => (
        <motion.div
          key={index}
          variants={{
            open: { opacity: 1, y: 0 },
            closed: { opacity: 0, y: -10 },
          }}
          transition={{ duration: 0.2, ease: "easeOut" }}
        >
          <Link
            href={item.href}
            onClick={() => closeSidebar && closeSidebar()}
            className="block py-2 px-8 border-b last:border-b-0 hover:bg-gray-100"
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
