"use client";

import React, { useState, useEffect } from "react";
import { Menu } from "iconoir-react";
import { Xmark } from "iconoir-react";
import LetterSwapForward from "@/fancy/components/text/letter-swap-forward-anim";

const NavBar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  // Close menu when clicking on menu links
  const handleMenuLinkClick = () => {
    setIsMenuOpen(false);
  };

  // Close menu on window resize to desktop size
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) { // lg breakpoint
        setIsMenuOpen(false);
      }
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Prevent body scroll when menu is open
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }

    // Cleanup on unmount
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isMenuOpen]);

  return (
    <>
      <nav className="grid w-screen grid-cols-3 grid-rows-1 gap-4 relative z-40">
        {/* logo */}
        <section className="flex items-center">
          <a
            href="/"
            className="flex items-center gap-x-2 sm:gap-x-4 hover:-rotate-12 transition-transform duration-300"
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
            <LetterSwapForward
              className="text-lg font-normal"
              transition={{
                duration: 0.5,
                ease: "easeInOut",
              }}
              label="services"
              staggerFrom={0}
              staggerDuration={0.1}
              reverse={false}
            />
          </a> 
          <a
            href="/work"
            className="text-lg hover:text-gray-700 transition-colors"
          >
            <LetterSwapForward
              className="text-lg font-normal"
              transition={{
                duration: 0.5,
                ease: "easeInOut",
              }}
              label="work"
              staggerFrom={0}
              staggerDuration={0.1}
              reverse={false}
            />
          </a>
          <a
            href="/about"
            className="text-lg hover:text-gray-700 transition-colors"
          >
            <LetterSwapForward
              className="text-lg font-normal"
              transition={{
                duration: 0.5,
                ease: "easeInOut",
              }}
              label="about"
              staggerFrom={0}
              staggerDuration={0.1}
              reverse={false}
            />
          </a>
          <a
            href="/contact"
            className="text-lg hover:text-gray-700 transition-colors"
          >
            <LetterSwapForward
              className="text-lg font-normal"
              transition={{
                duration: 0.5,
                ease: "easeInOut",
              }}
              label="contact"
              staggerFrom={0}
              staggerDuration={0.1}
              reverse={false}
            />
          </a>
        </section>

        {/* spacer for centering on desktop, menu icon on mobile */}
        <section className="flex justify-end items-center gap-x-2 sm:gap-x-4 mr-6 col-start-3">
          <div className="lg:hidden cursor-pointer" onClick={toggleMenu}>
            <Menu
              width={32}
              height={32}
              strokeWidth={2}
            />
          </div>
        </section>
      </nav>

      {/* menu overlay - only show on mobile/tablet */}
      <div
        className={`fixed inset-0 bg-[#FAF8EF] z-50 transition-transform duration-500 ease-in-out lg:hidden ${
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
              onClick={handleMenuLinkClick}
            >
              Home
            </a>
            <a
              href="/services"
              className="text-6xl text-center text-[#1E1E1E] hover:text-gray-700 transition-colors"
              onClick={handleMenuLinkClick}
            >
              services
            </a>
            <a
              href="/work"
              className="text-6xl text-center text-[#1E1E1E] hover:text-gray-700 transition-colors"
              onClick={handleMenuLinkClick}
            >
              work
            </a>
            <a
              href="/about"
              className="text-6xl text-center text-[#1E1E1E] hover:text-gray-700 transition-colors"
              onClick={handleMenuLinkClick}
            >
              about
            </a>
            <a
              href="/contact"
              className="text-6xl text-center text-[#1E1E1E] hover:text-gray-700 transition-colors"
              onClick={handleMenuLinkClick}
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