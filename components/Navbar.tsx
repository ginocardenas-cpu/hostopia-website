"use client";
import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { Menu, X, ChevronDown } from "lucide-react";
import { productsDropdownSections } from "@/lib/nav-products";

const navLinks = [
  { label: "Resources", href: "/resources" },
  { label: "Contact Us", href: "/contact" },
];

const platformLinks = [
  { label: "DMS", description: "Domain management system", href: "/platform#dms" },
  { label: "Portal", description: "Partner portal and billing", href: "/platform#portal" },
  { label: "Shop", description: "White-label storefront", href: "/platform#shop" },
  { label: "Signup Server", description: "Automated provisioning", href: "/platform#signup-server" },
  { label: "WebhostOS", description: "Hosting control panel", href: "/platform#webhostos" },
];

const programLinks = [
  { label: "Programs Overview", description: "All go-to-market programs", href: "/programs" },
  { label: "Channel as a Service", description: "Full channel support", href: "/programs/channel-as-a-service" },
  { label: "Partner Marketing", description: "Co-marketing and enablement", href: "/programs/partner-marketing" },
  { label: "Project Management", description: "Migration and onboarding", href: "/programs/project-management" },
  { label: "Service Management", description: "Ongoing support", href: "/programs/service-management" },
  { label: "Support", description: "Dedicated partner support", href: "/programs/support" },
];

const customerTypeLinks = [
  { label: "Cablecos", description: "Cable operators", href: "/customers/cablecos" },
  { label: "Distributors", description: "Distribution partners", href: "/customers/distributors" },
  { label: "ISPs", description: "Internet service providers", href: "/customers/isps" },
  { label: "Mobile Carriers", description: "Mobile network operators", href: "/customers/mobile-carriers" },
  { label: "Registrars", description: "Domain registrars", href: "/customers/registrars" },
  { label: "Resellers", description: "Value-added resellers", href: "/customers/resellers" },
  { label: "Telcos", description: "Telecommunications companies", href: "/customers/telcos" },
];

const customerOutcomeLinks = [
  { label: "Bundles", description: "Bundle products for SMBs", href: "/customers/goals/bundles" },
  { label: "Differentiate Core", description: "Differentiate core business", href: "/customers/goals/differentiate-core" },
  { label: "Grow Existing Revenues", description: "Expand digital revenue", href: "/customers/goals/grow-existing-revenues" },
  { label: "Improve Retention", description: "Reduce churn", href: "/customers/goals/improve-retention" },
  { label: "Migrate and Save", description: "Migration and cost savings", href: "/customers/goals/migrate-and-save" },
  { label: "New Revenue Streams", description: "Add digital services", href: "/customers/goals/new-revenue-streams" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [productsOpen, setProductsOpen] = useState(false);
  const [platformOpen, setPlatformOpen] = useState(false);
  const [programsOpen, setProgramsOpen] = useState(false);
  const [customersOpen, setCustomersOpen] = useState(false);
  const productsRef = useRef<HTMLDivElement>(null);
  const platformRef = useRef<HTMLDivElement>(null);
  const programsRef = useRef<HTMLDivElement>(null);
  const customersRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      const target = e.target as Node;
      if (
        (!productsRef.current || !productsRef.current.contains(target)) &&
        (!platformRef.current || !platformRef.current.contains(target)) &&
        (!programsRef.current || !programsRef.current.contains(target)) &&
        (!customersRef.current || !customersRef.current.contains(target))
      ) {
        setProductsOpen(false);
        setPlatformOpen(false);
        setProgramsOpen(false);
        setCustomersOpen(false);
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
                setProgramsOpen(false);
                setCustomersOpen(false);
              }}
              className="flex items-center gap-1 rounded px-3 py-2 font-raleway text-sm font-medium text-charcoal transition-colors duration-200 hover:text-teal"
            >
              Products
              <ChevronDown className={`w-4 h-4 transition-transform ${productsOpen ? "rotate-180" : ""}`} />
            </button>
            {productsOpen && (
              <div className="absolute left-0 top-full pt-1 min-w-[640px]">
                <div className="bg-white border border-gray-100 rounded-lg shadow-lg py-4 px-4">
                  <p
                    className="mb-3 border-b border-gray-100 pb-3 font-raleway text-xs font-bold uppercase tracking-wider text-gray-400"
                  >
                    Help your customers
                  </p>

                  <div className="grid grid-cols-4 gap-x-10 gap-y-3">
                    {productsDropdownSections.map((section) => (
                      <div key={section.heading}>
                        <p
                          className="mb-2 font-raleway text-sm font-semibold text-teal"
                        >
                          {section.heading}
                        </p>
                        <div className="space-y-2">
                          {section.links.map((link) => (
                            <Link
                              key={link.href}
                              href={link.href}
                              className="block py-1 pr-2 rounded hover:bg-gray-50 transition-colors"
                              onClick={() => setProductsOpen(false)}
                            >
                              <span className="block font-raleway text-sm font-semibold text-charcoal">
                                {link.label}
                              </span>
                              <span className="mt-0.5 block font-raleway text-xs text-gray-500">
                                {link.description}
                              </span>
                            </Link>
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>

                  <Link
                    href="/products"
                    className="mt-4 flex items-center gap-1 border-t border-gray-100 pt-3 font-raleway text-sm font-semibold text-teal"
                    onClick={() => setProductsOpen(false)}
                  >
                    View all Products →
                  </Link>
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
                setProgramsOpen(false);
                setCustomersOpen(false);
              }}
              className="flex items-center gap-1 rounded px-3 py-2 font-raleway text-sm font-medium text-charcoal transition-colors duration-200 hover:text-teal"
            >
              Platform
              <ChevronDown className={`w-4 h-4 transition-transform ${platformOpen ? "rotate-180" : ""}`} />
            </button>
            {platformOpen && (
              <div className="absolute left-0 top-full pt-1 min-w-[380px]">
                <div className="bg-white border border-gray-100 rounded-lg shadow-lg py-4 px-4">
                  <p
                    className="mb-3 border-b border-gray-100 pb-3 font-raleway text-xs font-bold uppercase tracking-wider text-gray-400"
                  >
                    Platform
                  </p>
                  <div className="space-y-2">
                    {platformLinks.map((link) => (
                      <Link
                        key={link.href}
                        href={link.href}
                        className="block py-2 px-2 rounded hover:bg-gray-50 transition-colors"
                        onClick={() => setPlatformOpen(false)}
                      >
                        <span className="block font-raleway text-sm font-semibold text-charcoal">
                          {link.label}
                        </span>
                        <span className="mt-0.5 block font-raleway text-xs text-gray-500">
                          {link.description}
                        </span>
                      </Link>
                    ))}
                  </div>
                  <Link
                    href="/platform"
                    className="mt-4 flex items-center gap-1 border-t border-gray-100 pt-3 font-raleway text-sm font-semibold text-teal"
                    onClick={() => setPlatformOpen(false)}
                  >
                    View Platform →
                  </Link>
                </div>
              </div>
            )}
          </div>

          {/* Programs dropdown */}
          <div className="relative" ref={programsRef}>
            <button
              type="button"
              onClick={() => {
                setProgramsOpen(!programsOpen);
                setProductsOpen(false);
                setPlatformOpen(false);
                setCustomersOpen(false);
              }}
              className="flex items-center gap-1 rounded px-3 py-2 font-raleway text-sm font-medium text-charcoal transition-colors duration-200 hover:text-teal"
            >
              Programs
              <ChevronDown className={`w-4 h-4 transition-transform ${programsOpen ? "rotate-180" : ""}`} />
            </button>
            {programsOpen && (
              <div className="absolute left-0 top-full pt-1 min-w-[380px]">
                <div className="bg-white border border-gray-100 rounded-lg shadow-lg py-4 px-4">
                  <p
                    className="mb-3 border-b border-gray-100 pb-3 font-raleway text-xs font-bold uppercase tracking-wider text-gray-400"
                  >
                    Programs
                  </p>
                  <div className="space-y-2">
                    {programLinks.map((link) => (
                      <Link
                        key={link.href}
                        href={link.href}
                        className="block py-2 px-2 rounded hover:bg-gray-50 transition-colors"
                        onClick={() => setProgramsOpen(false)}
                      >
                        <span className="block font-raleway text-sm font-semibold text-charcoal">
                          {link.label}
                        </span>
                        <span className="mt-0.5 block font-raleway text-xs text-gray-500">
                          {link.description}
                        </span>
                      </Link>
                    ))}
                  </div>
                  <Link
                    href="/programs"
                    className="mt-4 flex items-center gap-1 border-t border-gray-100 pt-3 font-raleway text-sm font-semibold text-teal"
                    onClick={() => setProgramsOpen(false)}
                  >
                    View Programs →
                  </Link>
                </div>
              </div>
            )}
          </div>

          {/* Customers dropdown */}
          <div className="relative" ref={customersRef}>
            <button
              type="button"
              onClick={() => {
                setCustomersOpen(!customersOpen);
                setProductsOpen(false);
                setPlatformOpen(false);
                setProgramsOpen(false);
              }}
              className="flex items-center gap-1 rounded px-3 py-2 font-raleway text-sm font-medium text-charcoal transition-colors duration-200 hover:text-teal"
            >
              Customers
              <ChevronDown className={`w-4 h-4 transition-transform ${customersOpen ? "rotate-180" : ""}`} />
            </button>
            {customersOpen && (
              <div className="absolute left-0 top-full pt-1 min-w-[640px]">
                <div className="bg-white border border-gray-100 rounded-lg shadow-lg py-4 px-4">
                  <p
                    className="mb-3 border-b border-gray-100 pb-3 font-raleway text-xs font-bold uppercase tracking-wider text-gray-400"
                  >
                    Customers
                  </p>
                  <div className="grid grid-cols-2 gap-x-10 gap-y-2">
                    <div>
                      <p className="mb-2 font-raleway text-sm font-semibold text-teal">
                        Who we work with
                      </p>
                      <div className="space-y-2">
                        {customerTypeLinks.map((link) => (
                          <Link
                            key={link.href}
                            href={link.href}
                            className="block py-1 pr-2 rounded hover:bg-gray-50 transition-colors"
                            onClick={() => setCustomersOpen(false)}
                          >
                            <span className="block font-raleway text-sm font-semibold text-charcoal">
                              {link.label}
                            </span>
                            <span className="mt-0.5 block font-raleway text-xs text-gray-500">
                              {link.description}
                            </span>
                          </Link>
                        ))}
                      </div>
                    </div>
                    <div>
                      <p className="mb-2 font-raleway text-sm font-semibold text-teal">
                        What they want
                      </p>
                      <div className="space-y-2">
                        {customerOutcomeLinks.map((link) => (
                          <Link
                            key={link.href}
                            href={link.href}
                            className="block py-1 pr-2 rounded hover:bg-gray-50 transition-colors"
                            onClick={() => setCustomersOpen(false)}
                          >
                            <span className="block font-raleway text-sm font-semibold text-charcoal">
                              {link.label}
                            </span>
                            <span className="mt-0.5 block font-raleway text-xs text-gray-500">
                              {link.description}
                            </span>
                          </Link>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>

          {navLinks.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              className="rounded px-3 py-2 font-raleway text-sm font-medium text-charcoal transition-colors duration-200 hover:text-teal"
            >
              {link.label}
            </Link>
          ))}
        </div>

        {/* CTA */}
        <div className="hidden md:flex items-center">
          <Link
            href="#partner"
            className="rounded-full bg-gold px-5 py-2.5 font-raleway text-sm font-semibold uppercase tracking-wide text-charcoal shadow-sm transition-colors duration-200 hover:bg-gold-dark hover:shadow-md"
          >
            Become a Partner
          </Link>
        </div>

        {/* Mobile toggle */}
        <button
          type="button"
          className="p-2 text-charcoal md:hidden"
          onClick={() => setOpen(!open)}
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
              className="flex w-full items-center justify-between border-b border-gray-50 py-2 font-raleway text-sm font-medium text-charcoal"
              onClick={() => setProductsOpen(!productsOpen)}
            >
              Products
              <ChevronDown className={`w-4 h-4 transition-transform ${productsOpen ? "rotate-180" : ""}`} />
            </button>
            {productsOpen && (
              <div className="pl-3 py-2 border-b border-gray-50">
                <p className="pb-2 font-raleway text-xs font-bold uppercase tracking-wider text-gray-400">
                  Help your customers
                </p>
                {productsDropdownSections.map((section) => (
                  <div key={section.heading} className="mb-3">
                    <p className="py-1 font-raleway text-xs font-semibold text-teal">
                      {section.heading}
                    </p>
                    {section.links.map((link) => (
                      <Link
                        key={link.href}
                        href={link.href}
                        className="block py-2 pl-2"
                        onClick={closeMobile}
                      >
                        <span className="block font-raleway text-sm font-semibold text-charcoal">
                          {link.label}
                        </span>
                        <span className="mt-0.5 block font-raleway text-xs text-gray-500">
                          {link.description}
                        </span>
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
              className="flex w-full items-center justify-between border-b border-gray-50 py-2 font-raleway text-sm font-medium text-charcoal"
              onClick={() => setPlatformOpen(!platformOpen)}
            >
              Platform
              <ChevronDown className={`w-4 h-4 transition-transform ${platformOpen ? "rotate-180" : ""}`} />
            </button>
            {platformOpen && (
              <div className="pl-3 py-2 border-b border-gray-50">
                {platformLinks.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    className="block py-2 pl-2"
                    onClick={closeMobile}
                  >
                    <span className="block font-raleway text-sm font-semibold text-charcoal">
                      {link.label}
                    </span>
                    <span className="mt-0.5 block font-raleway text-xs text-gray-500">
                      {link.description}
                    </span>
                  </Link>
                ))}
              </div>
            )}
          </div>

          {/* Programs expandable */}
          <div>
            <button
              type="button"
              className="flex w-full items-center justify-between border-b border-gray-50 py-2 font-raleway text-sm font-medium text-charcoal"
              onClick={() => setProgramsOpen(!programsOpen)}
            >
              Programs
              <ChevronDown className={`w-4 h-4 transition-transform ${programsOpen ? "rotate-180" : ""}`} />
            </button>
            {programsOpen && (
              <div className="pl-3 py-2 border-b border-gray-50">
                {programLinks.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    className="block py-2 pl-2"
                    onClick={closeMobile}
                  >
                    <span className="block font-raleway text-sm font-semibold text-charcoal">
                      {link.label}
                    </span>
                    <span className="mt-0.5 block font-raleway text-xs text-gray-500">
                      {link.description}
                    </span>
                  </Link>
                ))}
              </div>
            )}
          </div>

          {/* Customers expandable */}
          <div>
            <button
              type="button"
              className="flex w-full items-center justify-between border-b border-gray-50 py-2 font-raleway text-sm font-medium text-charcoal"
              onClick={() => setCustomersOpen(!customersOpen)}
            >
              Customers
              <ChevronDown className={`w-4 h-4 transition-transform ${customersOpen ? "rotate-180" : ""}`} />
            </button>
            {customersOpen && (
              <div className="pl-3 py-2 border-b border-gray-50">
                <p className="pb-2 font-raleway text-xs font-bold uppercase tracking-wider text-gray-400">
                  Who we work with
                </p>
                {customerTypeLinks.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    className="block py-2 pl-2"
                    onClick={closeMobile}
                  >
                    <span className="block font-raleway text-sm font-semibold text-charcoal">
                      {link.label}
                    </span>
                    <span className="mt-0.5 block font-raleway text-xs text-gray-500">
                      {link.description}
                    </span>
                  </Link>
                ))}
                <p className="pb-2 pt-3 font-raleway text-xs font-bold uppercase tracking-wider text-gray-400">
                  What they want
                </p>
                {customerOutcomeLinks.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    className="block py-2 pl-2"
                    onClick={closeMobile}
                  >
                    <span className="block font-raleway text-sm font-semibold text-charcoal">
                      {link.label}
                    </span>
                    <span className="mt-0.5 block font-raleway text-xs text-gray-500">
                      {link.description}
                    </span>
                  </Link>
                ))}
              </div>
            )}
          </div>

          {navLinks.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              className="border-b border-gray-50 py-2 font-raleway text-sm font-medium text-charcoal"
              onClick={closeMobile}
            >
              {link.label}
            </Link>
          ))}
          <Link
            href="#partner"
            className="mt-2 rounded-full bg-gold px-5 py-3 text-center font-raleway text-sm font-semibold uppercase tracking-wide text-charcoal shadow-sm transition-colors duration-200 hover:bg-gold-dark"
            onClick={closeMobile}
          >
            Become a Partner
          </Link>
        </div>
      )}
    </nav>
  );
}
