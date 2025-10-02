'use client'
import { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import DropdownMenu from './dropdownNavbar';
import Image from 'next/image';

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  // Sidebar motion variants (slower)
  const sidebarVariants = {
    hidden: { x: "100%" },
    visible: { 
      x: 0, 
      transition: { type: "spring", stiffness: 200, damping: 20, mass: 0.8, duration: 0.8 } 
    },
    exit: { 
      x: "100%", 
      transition: { type: "spring", stiffness: 200, damping: 20, mass: 0.8, duration: 0.8 } 
    },
  };

  // Links motion variants (slower)
  const linkVariants = {
    hidden: { opacity: 0, x: 30, scale: 0.95 },
    visible: (i) => ({
      opacity: 1,
      x: 0,
      scale: 1,
      transition: { delay: i * 0.15, duration: 0.5, ease: "easeOut" },
    }),
  };

  // Links array with About Us in between
  const links = [
    { type: "link", text: "Home", href: "/" },
    { type: "dropdown", label: "Services", items: [
        { href: "/about/team", text: "Team" },
        { href: "/about/mission", text: "Mission" },
        { href: "/about/careers", text: "Careers" },
      ]
    },
    { type: "link", text: "About", href: "/about" },
    { type: "link", text: "Contact", href: "/" },
  ];

  return (
    <nav className="p-4 shadow-md relative w-[100vw]">
      <div className="flex flex-row">
      <div className="container mx-auto flex items-center justify-between">
        <div className="text-white text-xl font-bold">
          <Link href="/">
            <Image 
              src="/logo.png" 
              alt="Logo"
              width={50}
              height={50}
            />
          </Link>
        </div>

        <button
          onClick={toggleMenu}
          className="lg:hidden focus:outline-none"
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </button>
      </div>

      <AnimatePresence>
        {isMenuOpen && (
          <>
            {/* Overlay */}
            <motion.div
              className="fixed inset-0 bg-black/30 z-40"
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.7, transition: { duration: 0.5 } }}
              exit={{ opacity: 0, transition: { duration: 0.5 } }}
              onClick={toggleMenu}
            />

            {/* Full-width Sidebar */}
            <motion.div
              className="fixed top-0 right-0 h-full w-full bg-white flex flex-col z-50 p-4 shadow-lg"
              variants={sidebarVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
            >
              <button
                onClick={toggleMenu}
                className="self-end focus:outline-none p-2 mb-4"
              >
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>

              {links.map((item, index) => {
                if(item.type === "link") {
                  return (
                    <motion.div
                      key={index}
                      custom={index}
                      variants={linkVariants}
                      initial="hidden"
                      animate="visible"
                      exit="hidden"
                    >
                      <Link
                        href={item.href}
                        onClick={() => setIsMenuOpen(false)}
                        className="block py-3 px-4 rounded hover:bg-gray-100 border-b border-gray-200"
                      >
                        {item.text}
                      </Link>
                    </motion.div>
                  );
                } else if(item.type === "dropdown") {
                  return (
                    <div key={index} className="border-b border-gray-200 mb-1">
                      <DropdownMenu
                        label={item.label}
                        items={item.items}
                        closeSidebar={() => setIsMenuOpen(false)}
                      />
                    </div>
                  );
                }
              })}
            </motion.div>
          </>
        )}
      </AnimatePresence>

      <div className="hidden lg:flex flex-row items-center gap-6 ml-auto">
  {links.map((item, index) => {
    if (item.type === "link") {
      return (
        <motion.div
          key={index}
          custom={index}
          variants={linkVariants}
          initial="hidden"
          animate="visible"
          exit="hidden"
        >
          <Link
            href={item.href}
            onClick={() => setIsMenuOpen(false)}
            className="text-white font-medium px-4 py-2 hover:bg-white/20 rounded transition"
          >
            {item.text}
          </Link>
        </motion.div>
      );
    } else if (item.type === "dropdown") {
      return (
        <motion.div
          key={index}
          custom={index}
          variants={linkVariants}
          initial="hidden"
          animate="visible"
          exit="hidden"
          className="relative"
        >
          <DropdownMenu
            label={item.label}
            items={item.items}
            closeSidebar={() => setIsMenuOpen(false)}
          />
        </motion.div>
      );
    }
  })}
</div>

      </div>
      
      
    </nav>
  );
}
