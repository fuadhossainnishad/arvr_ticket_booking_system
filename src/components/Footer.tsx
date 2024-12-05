// components/Footer.tsx

import React from "react";
import Link from "next/link";

const Footer: React.FC = () => {
  return (
    <footer suppressHydrationWarning className="bg-gray-900 text-white py-8">
      <div suppressHydrationWarning className="container mx-auto px-6">
        {/* Top Section */}
        <div className="flex flex-col md:flex-row justify-between items-center border-b border-gray-700 pb-6">
          {/* Logo or Title */}
          <div className="text-xl font-semibold text-blue-400 mb-4 md:mb-0">
            AR/VR Events
          </div>

          {/* Navigation Links */}
          <div className="flex space-x-6">
            <Link href="/about" className="hover:text-blue-400 transition">
              About
            </Link>
            <Link href="/contact" className="hover:text-blue-400 transition">
              Contact
            </Link>
            <Link
              href="/privacy-policy"
              className="hover:text-blue-400 transition"
            >
              Privacy Policy
            </Link>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="mt-6 flex flex-col md:flex-row justify-between items-center">
          {/* Copyright */}
          <p className="text-sm text-center md:text-left text-gray-400 mb-4 md:mb-0">
            &copy; {new Date().getFullYear()} AR/VR Events Ticket Booking
            System. All rights reserved.
          </p>

          {/* Social Media Icons */}
          <div className="flex space-x-4">
            <Link
              href="https://facebook.com"
              aria-label="Facebook"
              className="text-blue-500 hover:text-blue-400 transition text-xl"
            >
              <i className="fab fa-facebook-f"></i>
            </Link>
            <Link
              href="https://twitter.com"
              aria-label="Twitter"
              className="text-blue-400 hover:text-blue-300 transition text-xl"
            >
              <i className="fab fa-twitter"></i>
            </Link>
            <Link
              href="https://instagram.com"
              aria-label="Instagram"
              className="text-pink-500 hover:text-pink-400 transition text-xl"
            >
              <i className="fab fa-instagram"></i>
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
