'use client'
import Image from "next/image";

import { useState } from "react";
import Link from "next/link";


  

export default function Navbar() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
     setIsMenuOpen(!isMenuOpen);
    };
  return (
    <>
    <nav className="bg-blue-600 p-4 shadow-md">
      <div className="container mx-auto flex items-center justify-between">
         {/* Logo */}
         <div className="text-white text-xl font-bold">
             <Link href="/">ZOIC ™ Life Sciences</Link>
         </div>  

            {/* Menu Toggle Button (Hamburger) */}
         <button
             onClick={toggleMenu}
             className="lg:hidden text-white focus:outline-none"
         >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
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

        <div className="hidden flex flex-col gap-4 h-screen text-white">
            <Link href="/" className="">
                Home
            </Link>
            <Link href="/about">
                About Us
            </Link>
            
        </div> 
    </nav>
    </>
  );
}
