"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const navLinks = [
  { href: "/about", label: "About Us" },
  { href: "/team", label: "Team" },
  { href: "/publications", label: "Publications" },
  { href: "/events", label: "Events" },
  { href: "/connect", label: "Connect" },
];

export function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-50 bg-white border-b border-[#e2e8f0] shadow-[0_1px_4px_rgba(31,58,95,0.07)]">
      <div className="flex items-center justify-between min-h-[72px] gap-[18px] w-[min(1120px,92vw)] mx-auto flex-wrap">
        <Link className="flex items-center gap-2.5 no-underline text-[#1f3a5f] font-extrabold" href="/">
          <img
            src="/icon-banner-transparent.png"
            alt="REACH Equity Lab"
            className="h-[52px] w-auto object-contain rounded-[10px] transition-[transform,box-shadow] duration-[220ms] ease-out hover:scale-105 hover:shadow-[0_4px_16px_rgba(31,58,95,0.13)]"
          />
        </Link>
        <nav
          className={`items-center gap-2 ${
            menuOpen
              ? "flex flex-wrap w-full pt-2 pb-3 border-t border-[#e2e8f0] bg-white"
              : "hidden md:flex"
          }`}
          aria-label="Main navigation"
        >
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`no-underline font-semibold px-3 py-2 rounded-lg transition-colors duration-200 ${
                pathname === link.href
                  ? "text-[#1f3a5f] bg-[#eaf4fb]"
                  : "text-[#1f3a5f] hover:text-[#3ba99c] hover:bg-[#eaf4fb]"
              }`}
              onClick={() => setMenuOpen(false)}
            >
              {link.label}
            </Link>
          ))}
          <Link
            href="/contact"
            className={`no-underline font-semibold px-3 py-2 rounded-lg transition-colors duration-200 ${
              pathname === "/contact"
                ? "bg-[#3ba99c] text-white"
                : "bg-[#1f3a5f] text-white hover:bg-[#3ba99c]"
            }`}
            onClick={() => setMenuOpen(false)}
          >
            Contact Us
          </Link>
        </nav>
        <button
          className="md:hidden border border-[#e2e8f0] bg-transparent text-[#1f3a5f] text-[1.2rem] px-2.5 py-1.5 rounded-[10px]"
          aria-label="Open menu"
          onClick={() => setMenuOpen((prev) => !prev)}
        >
          &#9776;
        </button>
      </div>
    </header>
  );
}
