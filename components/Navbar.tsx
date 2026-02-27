"use client";
import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { Menu, X, ChevronDown } from "lucide-react";
import { productsDropdownSections } from "@/lib/nav-products";

const navLinks = [
  { label: "Resources", href: "/resources" },
  { label: "Company", href: "/company" },
  { label: "Contact", href: "/contact" },
];

const platformDropdownLinks = [
  { label: "Platform Overview", href: "/platform" },
  { label: "Partner Portal", href: "/platform#portal" },
  { label: "API & Integration", href: "/platform#api" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [productsOpen, setProductsOpen] = useState(false);
  const [platformOpen, setPlatformOpen] = useState(false);
  const productsRef = useRef<HTMLDivElement>(null);
  const platformRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (
        productsRef.current && !productsRef.current.contains(e.target as Node) &&
        platformRef.current && !platformRef.current.contains(e.target as Node)
      ) {
        setProductsOpen(false);
        setPlatformOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const closeMobile = () => setOpen(false);

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
        <Link href="/" className="flex items-center gap-2.5 shrink-0">
          <Image
            src="/logo.png"
            alt="Hostopia — A HostPapa Company"
            width={165}
            height={45}
            className="h-8 w-auto max-w-[165px] object-contain object-left brightness-0"
            priority
            unoptimized
          />
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          {/* Products dropdown */}
          <div className="relative" ref={productsRef}>
            <button
              type="button"
              onClick={() => {
                setProductsOpen(!productsOpen);
                setPlatformOpen(false);
              }}
              className="flex items-center gap-1 px-3 py-2 text-sm font-medium transition-colors duration-200 hover:text-teal rounded"
              style={{ fontFamily: "Raleway, sans-serif", color: "#24282B" }}
            >
              Products
              <ChevronDown className={`w-4 h-4 transition-transform ${productsOpen ? "rotate-180" : ""}`} />
            </button>
            {productsOpen && (
  <div className="absolute left-0 top-full pt-1 min-w-[640px]">
    <div className="bg-white border border-gray-100 rounded-lg shadow-lg py-4 px-4">
      <p
        className="text-xs font-bold uppercase tracking-wider text-gray-400 pb-3 mb-3 border-b border-gray-100"
        style={{ fontFamily: "Montserrat, sans-serif" }}
      >
        Help your customers
      </p>

      <div className="grid grid-cols-4 gap-x-10 gap-y-2">
        {productsDropdownSections.map((section) => (
          <div key={section.heading}>
            <p
              className="text-sm font-semibold mb-2"
              style={{ fontFamily: "Montserrat, sans-serif", color: "#0C7E8F" }} // blue subtitle
            >
              {section.heading}
            </p>
            <div className="space-y-1">
              {section.links.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="block text-sm py-1 pl-4 pr-2 rounded hover:bg-gray-50 transition-colors"
                  style={{ fontFamily: "Raleway, sans-serif", color: "#24282B" }}
                  onClick={() => setProductsOpen(false)}
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  </div>
)}
          </div>

          {/* Platform dropdown */}
          <div className="relative" ref={platformRef}>
            <button
              type="button"
              onClick={() => {
                setPlatformOpen(!platformOpen);
                setProductsOpen(false);
              }}
              className="flex items-center gap-1 px-3 py-2 text-sm font-medium transition-colors duration-200 hover:text-teal rounded"
              style={{ fontFamily: "Raleway, sans-serif", color: "#24282B" }}
            >
              Platform
              <ChevronDown className={`w-4 h-4 transition-transform ${platformOpen ? "rotate-180" : ""}`} />
            </button>
            {platformOpen && (
              <div className="absolute left-0 top-full pt-1 min-w-[200px]">
                <div className="bg-white border border-gray-100 rounded-lg shadow-lg py-2">
                  {platformDropdownLinks.map((link) => (
                    <Link
                      key={link.href}
                      href={link.href}
                      className="block text-sm py-2 px-4 rounded hover:bg-gray-50 transition-colors"
                      style={{ fontFamily: "Raleway, sans-serif", color: "#24282B" }}
                      onClick={() => setPlatformOpen(false)}
                    >
                      {link.label}
                    </Link>
                  ))}
                </div>
              </div>
            )}
          </div>

          {navLinks.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              className="px-3 py-2 text-sm font-medium transition-colors duration-200 hover:text-teal rounded"
              style={{ fontFamily: "Raleway, sans-serif", color: "#24282B" }}
            >
              {link.label}
            </Link>
          ))}
        </div>

        {/* CTA */}
        <div className="hidden md:flex items-center">
          <Link
            href="/contact"
            className="text-sm font-bold px-5 py-2.5 rounded-full transition-all duration-200 hover:scale-105 hover:shadow-lg"
            style={{
              fontFamily: "Montserrat, sans-serif",
              backgroundColor: "#F8CF41",
              color: "#24282B",
            }}
          >
            Become a Partner
          </Link>
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
        <div className="md:hidden bg-white border-t border-gray-100 px-6 py-5 flex flex-col gap-2">
          {/* Products expandable */}
          <div>
            <button
              type="button"
              className="flex items-center justify-between w-full text-sm font-medium py-2 border-b border-gray-50"
              style={{ fontFamily: "Raleway, sans-serif", color: "#24282B" }}
              onClick={() => setProductsOpen(!productsOpen)}
            >
              Products
              <ChevronDown className={`w-4 h-4 transition-transform ${productsOpen ? "rotate-180" : ""}`} />
            </button>
            {productsOpen && (
              <div className="pl-3 py-2 border-b border-gray-50">
                <p className="text-xs font-bold uppercase tracking-wider text-gray-400 pb-2" style={{ fontFamily: "Montserrat, sans-serif" }}>
                  Help your customers
                </p>
                {productsDropdownSections.map((section) => (
                  <div key={section.heading} className="mb-3">
                    <p className="text-xs font-semibold text-gray-500 py-1" style={{ fontFamily: "Montserrat, sans-serif" }}>
                      {section.heading}
                    </p>
                    {section.links.map((link) => (
                      <Link
                        key={link.href}
                        href={link.href}
                        className="block text-sm py-1.5 pl-2"
                        style={{ fontFamily: "Raleway, sans-serif", color: "#24282B" }}
                        onClick={closeMobile}
                      >
                        {link.label}
                      </Link>
                    ))}
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Platform expandable */}
          <div>
            <button
              type="button"
              className="flex items-center justify-between w-full text-sm font-medium py-2 border-b border-gray-50"
              style={{ fontFamily: "Raleway, sans-serif", color: "#24282B" }}
              onClick={() => setPlatformOpen(!platformOpen)}
            >
              Platform
              <ChevronDown className={`w-4 h-4 transition-transform ${platformOpen ? "rotate-180" : ""}`} />
            </button>
            {platformOpen && (
              <div className="pl-3 py-2 border-b border-gray-50">
                {platformDropdownLinks.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    className="block text-sm py-1.5 pl-2"
                    style={{ fontFamily: "Raleway, sans-serif", color: "#24282B" }}
                    onClick={closeMobile}
                  >
                    {link.label}
                  </Link>
                ))}
              </div>
            )}
          </div>

          {navLinks.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              className="text-sm font-medium py-2 border-b border-gray-50"
              style={{ fontFamily: "Raleway, sans-serif", color: "#24282B" }}
              onClick={closeMobile}
            >
              {link.label}
            </Link>
          ))}
          <Link
            href="/contact"
            className="text-sm font-bold px-5 py-3 rounded-full text-center mt-2"
            style={{ backgroundColor: "#F8CF41", color: "#24282B", fontFamily: "Montserrat, sans-serif" }}
            onClick={closeMobile}
          >
            Become a Partner
          </Link>
        </div>
      )}
    </nav>
  );
}
