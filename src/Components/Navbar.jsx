import React, { useState } from "react";
import { Menu, X } from "lucide-react";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Skills", href: "#skills" },
    { name: "Projects", href: "#projects" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <nav className="fixed w-full z-50 top-0 left-0">
      <div className="backdrop-blur-lg bg-white/5 border-b border-white/10 shadow-md">
        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
          {/* Logo */}
          <h1 className="text-2xl font-bold text-[#FFA552]">Naleem Nabriz</h1>

          {/* Desktop Nav */}
          <ul className="hidden md:flex space-x-8 text-white font-medium">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="relative group transition hover:text-[#FFA552]"
                >
                  {link.name}
                  <span className="block h-0.5 max-w-0 group-hover:max-w-full transition-all duration-300 bg-[#FFA552]"></span>
                </a>
              </li>
            ))}
          </ul>

          {/* Mobile Menu Button */}
          <div
            className="md:hidden text-white cursor-pointer"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </div>
        </div>
      </div>

      {/* Mobile Slide Menu */}
      <div
        className={`md:hidden fixed top-0 right-0 h-full w-2/3 bg-[#1f1c2c] shadow-lg transform ${
          isOpen ? "translate-x-0" : "translate-x-full"
        } transition-transform duration-300 ease-in-out z-40`}
      >
        <div className="px-6 py-6">
          <ul className="space-y-6 text-white font-medium">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className="block text-lg hover:text-[#FFA552] transition"
                >
                  {link.name}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
