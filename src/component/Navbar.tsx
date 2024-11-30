"use client";
import React, { useState } from "react";
import Link from "next/link";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false); // State to handle menu toggle

  return (
    <header className="flex items-center justify-between w-full h-20 px-6 bg-white shadow-md">
      {/* Logo */}
      <div>
        <h1 className="text-4xl text-heading">NorthStar</h1>
      </div>

      {/* Links for Larger Screens */}
      <nav className="hidden md:flex space-x-6">
        <Link href="/" className="text-gray-800 hover:text-primary">
          HOME
        </Link>
        <Link href="/About" className="text-gray-800 hover:text-primary">
          ABOUT
        </Link>
        <Link href="/Contact" className="text-gray-800 hover:text-primary">
          CONTACT US
        </Link>
      </nav>

      {/* Icons */}
      <div className="flex items-center space-x-4">
        {/* Profile Icon */}
        <Link href="/profile" className="text-gray-800 hover:text-primary">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={2}
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2"
            />
            <circle cx="12" cy="7" r="4" />
          </svg>
        </Link>

        {/* Cart Icon */}
        <Link href="/cart" className="relative text-gray-800 hover:text-primary">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={2}
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2 4h14M9 21h6M9 21a2 2 0 11-4 0m6 0a2 2 0 104 0"
            />
          </svg>
          <span className="absolute -top-2 -right-2 bg-prtext-primary text-white text-xs font-bold rounded-full w-5 h-5 bg-primary flex items-center justify-center">
            14
          </span>
        </Link>

        {/* Hamburger Menu for Mobile */}
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="md:hidden focus:outline-none"
        >
          <svg
            className="w-6 h-6 text-gray-800"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </button>
      </div>

      {/* Mobile Menu Dropdown */}
      {isMenuOpen && (
        <nav className="absolute top-20 left-0 w-full bg-white shadow-md md:hidden">
          <div className="flex flex-col space-y-2 px-6 py-4">
            <Link
              href="/"
              className="text-gray-800 hover:bg-primary px-4 py-2 rounded-md"
              onClick={() => setIsMenuOpen(false)}
            >
              Home
            </Link>
            <Link
              href="/About"
              className="text-gray-800 hover:bg-primary px-4 py-2 rounded-md"
              onClick={() => setIsMenuOpen(false)}
            >
              About
            </Link>
            <Link
              href="/Contact"
              className="text-gray-800 hover:bg-primary px-4 py-2 rounded-md"
              onClick={() => setIsMenuOpen(false)}
            >
              Contact Us
            </Link>
          </div>
        </nav>
      )}
    </header>
  );
};

export default Navbar;
