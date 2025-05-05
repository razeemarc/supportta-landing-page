'use client'

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState<boolean>(false);
  const [isDarkMode, setIsDarkMode] = useState<boolean>(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState<boolean>(false);
  const pathname = usePathname(); // Get current path for determining active page

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    // Check for dark mode (this could be replaced with your dark mode detection logic)
    const checkDarkMode = () => {
      // This is a simple example - you might want to update this based on your dark mode implementation
      const isDark = document.documentElement.classList.contains('dark');
      setIsDarkMode(isDark);
    };

    window.addEventListener('scroll', handleScroll);
    checkDarkMode(); // Initial check

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Toggle mobile menu
  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  // Function to determine if a link is active
  const isActive = (path: string) => {
    return pathname === path;
  };

  return (
    <>
      <nav className={`w-full py-4 fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white bg-opacity-90 shadow-md' : 'bg-transparent'
      }`}>
        <div className="container mx-auto px-4 flex justify-between items-center">
          {/* Hamburger Menu Button for mobile - positioned on the left */}
          <div className="md:hidden">
            <button
              className={`focus:outline-none ${isDarkMode ? 'text-white' : 'text-gray-800'}`}
              onClick={toggleMobileMenu}
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>

          {/* Logo */}
          <Link href="/" className="flex items-center">
            <div className="relative">
              <Image
                src="/logo.png"
                alt="Supportta Logo"
                width={150}
                height={40}
                priority
              />
            </div>
          </Link>

          {/* Navigation Links - Desktop */}
          <div className="hidden md:flex items-center space-x-8">
            <Link 
              href="/services" 
              className={`${isActive('/services') 
                ? 'text-[#E08F34] font-medium ' 
                : `${isDarkMode ? 'text-white' : 'text-gray-800'}`} 
                hover:text-[#E08F34] transition-colors`}
            >
              SERVICES
            </Link>
            <Link 
              href="/careers" 
              className={`${isActive('/careers') 
                ? 'text-[#E08F34] font-medium ' 
                : `${isDarkMode ? 'text-white' : 'text-gray-800'}`} 
                hover:text-[#E08F34] transition-colors`}
            >
              CAREERS
            </Link>
            <Link 
              href="/about-us" 
              className={`${isActive('/about-us') 
                ? 'text-[#E08F34] font-medium ' 
                : `${isDarkMode ? 'text-white' : 'text-gray-800'}`} 
                hover:text-[#E08F34] transition-colors`}
            >
              ABOUT US
            </Link>
            <Link 
              href="/contact-us" 
              className={`${isActive('/contact-us') 
                ? 'text-[#E08F34] font-medium ' 
                : `${isDarkMode ? 'text-white' : 'text-gray-800'}`} 
                hover:text-[#E08F34] transition-colors`}
            >
              CONTACT US
            </Link>
          </div>

          {/* Phone Number Button - Desktop */}
          <div className="hidden md:block">
            <a
              href="tel:+919234567786"
              className="border border-[#E08F34] text-[#E08F34] px-4 py-2 rounded-md hover:bg-[#E08F34] hover:text-white transition-colors flex items-center"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              (+91) 234557786
            </a>
          </div>

          {/* Empty div to maintain layout */}
          <div className="md:hidden w-6"></div>
        </div>
      </nav>

      {/* Mobile Menu - Fullscreen overlay */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 bg-white z-50 md:hidden flex flex-col">
          {/* Close button */}
          <div className="flex justify-end p-4">
            <button 
              onClick={toggleMobileMenu}
              className="text-gray-800 focus:outline-none"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
          
          {/* Menu Items */}
          <div className="flex flex-col items-center justify-center flex-grow text-center space-y-6">
            <Link 
              href="/services" 
              className={`${isActive('/services') 
                ? 'text-[#E08F34] font-medium ' 
                : 'text-gray-600'} text-xl`}
              onClick={toggleMobileMenu}
            >
              SERVICES
            </Link>
            <Link 
              href="/careers" 
              className={`${isActive('/careers') 
                ? 'text-[#E08F34] font-medium ' 
                : 'text-gray-600'} text-xl`}
              onClick={toggleMobileMenu}
            >
              CAREERS
            </Link>
            <Link 
              href="/about-us" 
              className={`${isActive('/about-us') 
                ? 'text-[#E08F34] font-medium ' 
                : 'text-gray-600'} text-xl`}
              onClick={toggleMobileMenu}
            >
              ABOUT US
            </Link>
            <Link 
              href="/contact-us" 
              className={`${isActive('/contact-us') 
                ? 'text-[#E08F34] font-medium ' 
                : 'text-gray-600'} text-xl`}
              onClick={toggleMobileMenu}
            >
              CONTACT US
            </Link>
          </div>
          
          {/* Social Media Icons */}
          <div className="flex justify-center space-x-6 pb-10">
            <a href="#" className="text-[#E08F34] hover:text-orange-600">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"/>
              </svg>
            </a>
            <a href="#" className="text-[#E08F34] hover:text-orange-600">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                <path d="M4.98 3.5c0 1.381-1.11 2.5-2.48 2.5s-2.48-1.119-2.48-2.5c0-1.38 1.11-2.5 2.48-2.5s2.48 1.12 2.48 2.5zm.02 4.5h-5v16h5v-16zm7.982 0h-4.968v16h4.969v-8.399c0-4.67 6.029-5.052 6.029 0v8.399h4.988v-10.131c0-7.88-8.922-7.593-11.018-3.714v-2.155z"/>
              </svg>
            </a>
            <a href="#" className="text-[#E08F34] hover:text-orange-600">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
              </svg>
            </a>
          </div>
        </div>
      )}
    </>
  );
};

export default Navbar;