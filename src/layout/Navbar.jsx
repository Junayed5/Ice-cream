import React, { useState } from "react";
import Search from "../components/Search";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [search, setSearch] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };
  return (
    <div className="sticky top-0">
      <nav className="bg-[#51659C]">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-20">
            <div className="flex items-center">
              <a href="#" className="text-white font-semibold text-xl">
                <img src="tittle.png" alt="" />
              </a>
            </div>
            <div className="hidden md:flex">
              <div className="flex items-center space-x-4">
                <Link to="/" className="text-[#FFFFFF] px-3 py-2 rounded-md">
                  Home
                </Link>
                <Link
                  to="/about"
                  className="text-[#FFFFFF] px-3 py-2 rounded-md"
                >
                  About
                </Link>
                <a
                  href="#skills"
                  className="text-[#FFFFFF] px-3 py-2 rounded-md"
                >
                  Shop
                </a>
                <a
                  href="#projects"
                  className="text-[#FFFFFF] px-3 py-2 rounded-md"
                >
                  Catering
                </a>
                <a
                  href="#contact"
                  className="text-[#FFFFFF] px-3 py-2 rounded-md"
                >
                  Contact
                </a>
              </div>
            </div>
            <div className="hidden md:flex">
              <div className="flex items-center space-x-4">
                <a
                  href="#"
                  className=" px-3 py-2 rounded-md"
                  onClick={() => setSearch(true)}
                >
                  <img src="search.png" alt="" />
                </a>
                <a href="#" className=" px-3 py-2 rounded-md">
                  <img src="user.png" alt="" />
                </a>
                <a href="#" className="px-3 py-2 rounded-md">
                  <img src="cart.png" alt="" />
                </a>
              </div>
            </div>
            <div className="md:hidden">
              <button
                className="mobile-menu-button p-2"
                onClick={toggleMobileMenu}
              >
                <svg
                  className="h-6 w-6 text-white"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              </button>
            </div>
          </div>
        </div>
        <div
          className={`${
            isMobileMenuOpen ? "" : "hidden"
          } md:hidden mobile-menu`}
        >
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <a
              href="#"
              className="text-gray-300 hover:text-cyan-300 font-semibold block px-3 py-2 rounded-md"
            >
              Home
            </a>
            <a
              href="#about"
              className="text-gray-300 hover:text-cyan-300 font-semibold block px-3 py-2 rounded-md"
            >
              About
            </a>
            <a
              href="#skills"
              className="text-gray-300 hover:text-cyan-300 font-semibold block px-3 py-2 rounded-md"
            >
              Skills
            </a>
            <a
              href="#projects"
              className="text-gray-300 hover:text-cyan-300 font-semibold block px-3 py-2 rounded-md"
            >
              Portfolio
            </a>
            <a
              href="#contact"
              className="text-gray-300 hover:text-cyan-300 font-semibold block px-3 py-2 rounded-md"
            >
              Contact
            </a>
          </div>
        </div>
      </nav>
      {search && <Search/>}
    </div>
  );
};

export default Navbar;
