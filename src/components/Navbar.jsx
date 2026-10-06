import React, { useState } from "react";
import { Link } from "react-router-dom";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="w-full border-2 border-yellow-600 px-4 sm:px-6 md:px-10 xl:px-10 py-4 xl:flex xl:items-center">

      {/* Logo + Hamburger */}
      <div className="flex items-center justify-between xl:w-[25%]">
        <img
          src="Matrimony logo.png"
          alt="logo"
          className="w-56"
        />

        <button
          className="text-3xl text-gray-700 xl:hidden"
          onClick={() => setIsOpen(!isOpen)}
        >
          ☰
        </button>
      </div>

      {/* Desktop Menu */}
      <ul className="hidden xl:flex xl:w-[65%] list-none text-lg justify-center items-center m-0 p-0 text-gray-600">
        <Link to="/"><li className="px-4">Home</li></Link>
        <li className="px-4">About</li>
        <li className="px-4">Membership</li>
        <li className="px-4">Home</li>
        <li className="px-4">Search</li>
        <li className="px-4">Contact</li>
      </ul>

      {/* Login */}
      <div className="hidden xl:flex xl:w-[10%] justify-end items-center">
        <Link to="/login">
          <button className="bg-gradient-to-r from-purple-900 to-red-700 hover:from-red-700 hover:to-purple-900 text-white font-semibold py-2.5 px-6 rounded-xl shadow-md transition-all">
            Login
          </button>
        </Link>
      </div>

      {/* Mobile + Tablet Menu */}
      {isOpen && (
        <div className="mt-5 flex flex-col items-center gap-5 xl:hidden">

          <ul className="w-[70%] flex flex-col items-center gap-4 list-none m-0 p-0 text-lg text-gray-600">
            <Link to="/"><li>Home</li></Link>
            <li>About</li>
            <li>Membership</li>
            <li>Home</li>
            <li>Search</li>
            <li>Contact</li>
          </ul>

          <Link to="/login">
            <button className="bg-gradient-to-r from-purple-900 to-red-700 hover:from-red-700 hover:to-purple-900 text-white font-semibold py-2.5 px-6 rounded-xl shadow-md transition-all">
              Login
            </button>
          </Link>

        </div>
      )}
    </nav>
  );
}

export default Navbar;