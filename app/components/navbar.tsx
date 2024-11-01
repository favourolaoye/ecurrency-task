import Link from "next/link";
import React, { useState } from "react";
import { Menu, X } from "lucide-react";
import Logo from "@/public/logo.svg";


export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="fixed p-2 top-0 left-0 right-0 z-20 bg-white bg-opacity-10 backdrop-blur">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <div className="flex-shrink-0 md:ml-[130px]">
              <Link href="/" className="text-white text-2xl font-bold">
                <Logo className="w-16 h-auto md:w-24" />
              </Link>
            </div>
            <div className="hidden md:flex items-center justify-between ml-[220px]">
              <Link
                href="/"
                className="text-logoLink p-2 text-lg focus:font-bold active:font-bold"
              >
                Home
              </Link>
              <Link
                href="#about"
                className="text-logoLink p-2 ml-8 text-lg font-normal active:font-bold"
              >
                About
              </Link>
              <Link
                href="/shop"
                className="text-logoLink p-2 ml-8 text-lg font-normal focus:font-bold"
              >
                Shop
              </Link>

              <Link
                href="/faq"
                className="text-logoLink p-2 ml-8  text-lg font-normal focus:font-bold"
              >
                FAQs
              </Link>
            </div>
          </div>
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-white hover:text-white"
              aria-label="Toggle menu"
            >
              {isMenuOpen ? (
                <X className="block h-6 w-6 text-logoLink" />
              ) : (
                <Menu className="block h-6 w-6 text-logoLink" />
              )}
            </button>
          </div>
        </div>
      </div>
      {isMenuOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <Link
              href="/"
              className="text-logoLink hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
            >
              Home
            </Link>
            <Link
              href="#about"
              className="text-logoLink hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
            >
              About
            </Link>
            <Link
              href="/services"
              className="text-logoLink hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
            >
              Services
            </Link>
            <Link
              href="/contact"
              className="text-logoLink hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
            >
              Contact
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}
