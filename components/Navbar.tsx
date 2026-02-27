"use client";
import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

const navLinks = [
  { label: "Solutions", href: "/products" },
  { label: "Platform", href: "/platform" },
  { label: "Resources", href: "/resources" },
  { label: "Company", href: "/company" },
  { label: "Contact", href: "/contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white border-b border-gray-100 shadow-sm"
          : "bg-white/95"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between h-18 py-4">
        {/* Logo */}
        <a href="/" className="flex items-center gap-2.5 shrink-0">
          <img
            src="/logo.png"
            alt="Hostopia — A HostPapa Company"
            className="h-11 min-h-[44px] w-auto max-w-[220px] object-contain object-left"
          />
        </a>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="text-sm font-medium transition-colors duration-200 hover:text-teal"
              style={{ fontFamily: "Raleway, sans-serif", color: "#24282B" }}
            >
              {link.label}
            </a>
          ))}
        </div>

        {/* CTA */}
        <div className="hidden md:flex items-center">
          <a
            href="/contact"
            className="text-sm font-bold px-5 py-2.5 rounded-full transition-all duration-200 hover:scale-105 hover:shadow-lg"
            style={{
              fontFamily: "Montserrat, sans-serif",
              backgroundColor: "#F8CF41",
              color: "#24282B",
            }}
          >
            Become a Partner
          </a>
        </div>

        {/* Mobile toggle */}
        <button
          className="md:hidden p-2"
          onClick={() => setOpen(!open)}
          style={{ color: "#24282B" }}
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {open && (
        <div className="md:hidden bg-white border-t border-gray-100 px-6 py-5 flex flex-col gap-4">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="text-sm font-medium py-2 border-b border-gray-50"
              style={{ fontFamily: "Raleway, sans-serif", color: "#24282B" }}
              onClick={() => setOpen(false)}
            >
              {link.label}
            </a>
          ))}
          <a
            href="/contact"
            className="text-sm font-bold px-5 py-3 rounded-full text-center mt-2"
            style={{ backgroundColor: "#F8CF41", color: "#24282B", fontFamily: "Montserrat, sans-serif" }}
            onClick={() => setOpen(false)}
          >
            Become a Partner
          </a>
        </div>
      )}
    </nav>
  );
}
