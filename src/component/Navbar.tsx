"use client";

import React, { useState } from "react";
import Link from "next/link";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false); // State for mobile menu toggle

  return (
    <header className="fixed top-0 left-0 w-full bg-white shadow-md z-50">
      <div className="container mx-auto flex items-center justify-between h-16 px-4 lg:px-10">
        {/* Logo */}
        <div>
          <Link href="/">
            <h1 className="text-3xl text-gray-900 tracking-wide cursor-pointer hover:text-primary">
              NorthStar
            </h1>
          </Link>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex space-x-6">
          <Link href="/" className="hover:text-primary text-gray-800 font-medium">
            HOME
          </Link>
          <Link href="/About" className="hover:text-primary text-gray-800 font-medium">
            ABOUT
          </Link>
          <Link href="/Contact" className="hover:text-primary text-gray-800 font-medium">
            CONTACT US
          </Link>
        </nav>

        {/* Icons */}
        <div className="flex items-center space-x-4">
          {/* Profile */}
          <Link href="/profile" className="hover:text-primary">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={2}
              stroke="currentColor"
              className="w-6 h-6 text-gray-800"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2"
              />
              <circle cx="12" cy="7" r="4" />
            </svg>
          </Link>

          {/* Cart */}
          <Link href="/cart" className="relative hover:text-primary">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={2}
              stroke="currentColor"
              className="w-6 h-6 text-gray-800"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2 4h14M9 21h6M9 21a2 2 0 11-4 0m6 0a2 2 0 104 0"
              />
            </svg>
            <span className="absolute -top-2 -right-2 bg-primary text-white text-xs font-bold rounded-full w-5 h-5 flex items-center justify-center">
              3
            </span>
          </Link>

          {/* Hamburger Menu for Mobile */}
          <button
            className="md:hidden focus:outline-none"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={2}
              stroke="currentColor"
              className="w-6 h-6 text-gray-800"
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <nav className="absolute top-16 left-0 w-full bg-white shadow-md z-50 md:hidden">
          <div className="flex flex-col px-4 py-2 space-y-2">
            <Link
              href="/"
              className="block text-gray-800 hover:text-primary px-4 py-2 rounded-md"
              onClick={() => setIsMenuOpen(false)}
            >
              HOME
            </Link>
            <Link
              href="/about"
              className="block text-gray-800 hover:text-primary px-4 py-2 rounded-md"
              onClick={() => setIsMenuOpen(false)}
            >
              ABOUT
            </Link>
            <Link
              href="/contact"
              className="block text-gray-800 hover:text-primary px-4 py-2 rounded-md"
              onClick={() => setIsMenuOpen(false)}
            >
              CONTACT US
            </Link>
          </div>
        </nav>
      )}
    </header>
  );
};

export default Navbar;
