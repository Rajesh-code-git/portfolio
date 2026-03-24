import React, { useState } from "react";
import { FaBars } from "react-icons/fa";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <div className="fixed top-0 left-0 w-full z-50 bg-black/60 backdrop-blur-lg border-b border-white/10 text-white">

      <div className="max-w-6xl mx-auto flex justify-between items-center px-6 py-4">

        {/* Logo */}
        <h1 className="font-bold text-xl">Rajesh</h1>

        {/* Desktop Menu */}
        <div className="hidden md:flex gap-8">
          <a href="#about" className="hover:text-blue-400 transition">About</a>
          <a href="#projects" className="hover:text-blue-400 transition">Projects</a>
          <a href="#contact" className="hover:text-blue-400 transition">Contact</a>
        </div>

        {/* Mobile Button */}
        <button
          className="md:hidden text-2xl"
          onClick={() => setOpen(!open)}
        >
          <FaBars />
        </button>

        {/* Mobile Menu */}
        {open && (
          <div className="absolute top-16 right-4 bg-gray-900 p-4 rounded-xl flex flex-col gap-4 shadow-lg">
            <a href="#about" onClick={() => setOpen(false)}>About</a>
            <a href="#projects" onClick={() => setOpen(false)}>Projects</a>
            <a href="#contact" onClick={() => setOpen(false)}>Contact</a>
          </div>
        )}

      </div>
    </div>
  );
};

export default Navbar;