"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const linkColor = scrolled ? "text-gray-800" : "text-white";

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        scrolled ? "bg-white shadow-md" : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo */}
        <a href="#top" className="flex items-center gap-2">
          <Image
            src="/logo.png"
            alt="Outcomex AI Logo"
            width={40}
            height={40}
            priority
          />
          <span
            className={`font-bold text-lg transition ${linkColor}`}
          >
            Outcomex AI Agency
          </span>
        </a>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-8">
          <a href="#what-we-do" className={`${linkColor} hover:text-blue-600`}>
            What We Do
          </a>
          <a href="#who-we-serve" className={`${linkColor} hover:text-blue-600`}>
            Who We Serve
          </a>
          <a href="#core-solutions" className={`${linkColor} hover:text-blue-600`}>
            Core Solutions
          </a>
          <a href="#about" className={`${linkColor} hover:text-blue-600`}>
            Who We Are
          </a>
          <a
            href="#cta"
            className="bg-blue-700 text-white px-5 py-2 rounded-md hover:bg-blue-800 transition"
          >
            Book a Call
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setOpen(!open)}
          className={`md:hidden ${linkColor}`}
        >
          ☰
        </button>
      </div>

      {/* Mobile Menu */}
      {open && (
        <div className="md:hidden bg-white shadow-lg px-6 py-4 space-y-4">
          <a href="#what-we-do" className="block text-gray-800">
            What We Do
          </a>
          <a href="#who-we-serve" className="block text-gray-800">
            Who We Serve
          </a>
          <a href="#core-solutions" className="block text-gray-800">
            Core Solutions
          </a>
          <a href="#about" className="block text-gray-800">
            Who We Are
          </a>
          <a
            href="#cta"
            className="block bg-blue-700 text-white text-center py-2 rounded"
          >
            Book a Call
          </a>
        </div>
      )}
    </nav>
  );
}
