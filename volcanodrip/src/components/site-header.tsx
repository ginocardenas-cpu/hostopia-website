"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

const links = [
  { href: "/", label: "Home" },
  { href: "/coffees", label: "Coffees" },
  { href: "/sourcing", label: "Sourcing" },
  { href: "/brewing", label: "Brewing" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
  { href: "/cart", label: "Cart" },
];

export function SiteHeader() {
  const pathname = usePathname();

  return (
    <header className="mx-auto flex max-w-5xl items-center justify-between px-6 pt-6 text-[0.7rem] uppercase tracking-[0.3em] text-neutral-500 sm:px-8 lg:px-10">
      <div className="flex items-center gap-3">
        <div className="relative h-12 w-12">
          <Image
            src="/volcanodrip-logo.png"
            alt="Volcanodrip logo"
            fill
            sizes="48px"
            className="object-contain"
            priority
          />
        </div>
      </div>
      <nav className="hidden items-center gap-6 sm:flex">
        {links.map((link) => {
          const isActive =
            link.href === "/"
              ? pathname === "/"
              : pathname === link.href || pathname.startsWith(link.href + "/");

          return (
            <Link
              key={link.href}
              href={link.href}
              className={`relative pb-1 text-[0.6rem] tracking-[0.25em] ${
                isActive ? "text-neutral-800" : "text-neutral-500"
              }`}
            >
              {link.label}
              {isActive && (
                <span className="absolute inset-x-0 -bottom-0.5 h-px bg-neutral-800" />
              )}
            </Link>
          );
        })}
      </nav>
    </header>
  );
}

