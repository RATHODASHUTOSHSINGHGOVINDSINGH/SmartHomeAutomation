import React from "react";
import { Link } from "react-router-dom";
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-20">
        {/* Footer Content */}
        <div className="grid grid-cols-1 gap-y-8 sm:grid-cols-2 md:grid-cols-3 gap-8 text-center md:text-left">
          {/* Logo & About */}
          <div>
            <h2 className="text-xl sm:text-2xl font-bold">SMARTIFY</h2>
            <p className="text-gray-400 mt-2 text-sm sm:text-base">
              India's leading home automation provider. Experience the future of smart living.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-base sm:text-lg font-semibold">Quick Links</h3>
            <ul className="mt-2 text-gray-400 space-y-1 sm:space-y-2 text-sm sm:text-base">
              <li><Link to="/" className="hover:text-gray-200 transition-colors">Home</Link></li>
              <li><Link to="/automate" className="hover:text-gray-200 transition-colors">Automate</Link></li>
              <li><Link to="/usecase" className="hover:text-gray-200 transition-colors">Use-Cases</Link></li>
              <li><Link to="/auth" className="hover:text-gray-200 transition-colors">Login</Link></li>
            </ul>
          </div>

          {/* Social Media */}
          <div>
            <h3 className="text-base sm:text-lg font-semibold">Follow Us</h3>
            <div className="flex justify-center md:justify-start space-x-4 mt-2">
              <a href="#" className="text-gray-400 hover:text-gray-200 transition-colors">
                <FaFacebook size={18} />
              </a>
              <a href="#" className="text-gray-400 hover:text-gray-200 transition-colors">
                <FaTwitter size={18} />
              </a>
              <a href="#" className="text-gray-400 hover:text-gray-200 transition-colors">
                <FaInstagram size={18} />
              </a>
              <a href="#" className="text-gray-400 hover:text-gray-200 transition-colors">
                <FaLinkedin size={18} />
              </a>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-8 border-t border-gray-700 pt-4 text-center text-gray-500 text-xs sm:text-sm">
          © 2025 Smartify. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
