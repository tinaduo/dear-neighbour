"use client";

import React, { useState } from "react";
import { Menu } from "iconoir-react";
import { Xmark } from "iconoir-react";

const NavBar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (

    
    <>
      <nav className="grid w-screen grid-cols-3 grid-rows-1 gap-4 relative z-40">
        {/* logo */}
        <section className="flex items-center">
          <a
            href="/"
            className="flex items-center gap-x-2 sm:gap-x-4"
          >
          <img
            src="/images/DN-logo.png"
            alt="Dear Neighbor Logo"
            className="w-32 h-auto object-cover"
          />
          </a>
        </section>

        {/* navigation links - desktop */}
        <section className="hidden lg:flex items-center justify-center gap-x-8 font-['FavoritMono'] text-[#1E1E1E]">
          <a
            href="/services"
            className="text-lg hover:text-gray-700 transition-colors"
          >
            services

          </a> 
          <a
            href="/work"
            className="text-lg hover:text-gray-700 transition-colors"
          >
            work
          </a>
          <a
            href="/about"
            className="text-lg hover:text-gray-700 transition-colors"
          >
            about
          </a>
          <a
            href="/contact"
            className="text-lg hover:text-gray-700 transition-colors"
          >
            contact
          </a>
        </section>

        {/* spacer for centering logo */}
        <div>
        </div>

        {/* menu icon - mobile */}
        <section
          className="flex justify-end items-center lg:hidden gap-x-2 sm:gap-x-4 cursor-pointer mr-6"
          onClick={toggleMenu}
        >
          <Menu
            width={32}
            height={32}
            strokeWidth={2}
          />
        </section>
      </nav>

      {/* menu overlay */}
      <div
        className={`fixed inset-0 bg-[#FAF8EF] z-50 transition-transform duration-500 ease-in-out ${
          isMenuOpen ? "transform translate-y-0" : "transform -translate-y-full"
        }`}
      >
        <div className="flex flex-col items-center justify-center h-full font-['Poppins'] text-white">
          {/* close button */}
          <button
            onClick={toggleMenu}
            className="absolute cursor-pointer top-8 right-8 text-[#1E1E1E] text-8xl transition-colors"
          >
            <Xmark
              width={48}
              height={48}
              strokeWidth={2} />
          </button>

          {/* menu items */}
          <div className="flex flex-col items-center space-y-12 text-center font-['FavoritMono'] lowercase">
            <a
              href="/"
              className="text-6xl text-center text-[#1E1E1E] hover:text-gray-700 transition-colors"
            >
              Home
            </a>
            <a
              href="/services"
              className="text-6xl text-center text-[#1E1E1E] hover:text-gray-700 transition-colors"
            >
              services
            </a>
            <a
              href="/about"
              className="text-6xl text-center text-[#1E1E1E] hover:text-gray-700 transition-colors"
            >
              about
            </a>
            <a
              href="/contact"
              className="text-6xl  text-center text-[#1E1E1E] hover:text-gray-700 transition-colors"
            >
              Contact
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default NavBar;
