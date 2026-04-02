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
    <header className={`site-header${menuOpen ? " open" : ""}`}>
      <div className="container nav-wrap">
        <Link className="brand" href="/">
          <img
            src="/icon-banner-transparent.png"
            alt="REACH Equity Lab"
            className="brand-logo"
          />
        </Link>
        <nav className="site-nav" aria-label="Main navigation">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={pathname === link.href ? "active" : ""}
              onClick={() => setMenuOpen(false)}
            >
              {link.label}
            </Link>
          ))}
          <Link
            href="/contact"
            className={`nav-cta${pathname === "/contact" ? " active" : ""}`}
            onClick={() => setMenuOpen(false)}
          >
            Contact Us
          </Link>
        </nav>
        <button
          className="menu-toggle"
          aria-label="Open menu"
          onClick={() => setMenuOpen((prev) => !prev)}
        >
          &#9776;
        </button>
      </div>
    </header>
  );
}
