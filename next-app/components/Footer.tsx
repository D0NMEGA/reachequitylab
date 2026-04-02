"use client";

import Link from "next/link";

const navLinks = [
  { label: "About", href: "/about" },
  { label: "Team", href: "/team" },
  { label: "Publications", href: "/publications" },
  { label: "Events", href: "/events" },
  { label: "Connect", href: "/connect" },
];

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-[#e2e8f0] bg-[#1f3a5f]">
      <div className="w-[min(1120px,92vw)] mx-auto py-10 grid gap-6">
        {/* Tagline */}
        <div>
          <p className="text-white font-bold text-[1.1rem] m-0">
            REACH Equity Lab
          </p>
          <p className="text-white/70 text-[0.9rem] mt-1 m-0">
            Advancing equity through undergraduate research
          </p>
        </div>

        {/* Nav links */}
        <nav aria-label="Footer navigation">
          <ul className="flex flex-wrap gap-x-6 gap-y-2 list-none m-0 p-0">
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="text-white/80 no-underline text-[0.9rem] hover:text-white transition-colors duration-150"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        {/* Bottom row: copyright + social */}
        <div className="flex flex-wrap justify-between items-center gap-3 border-t border-white/10 pt-5">
          <p className="text-white/60 text-[0.85rem] m-0">
            &copy; {year} REACH Equity Lab. All rights reserved.
          </p>
          <a
            href="https://www.linkedin.com/company/reach-equity-lab/"
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-2 text-white/80 no-underline text-[0.9rem] font-medium hover:text-white transition-colors duration-150"
            aria-label="REACH Equity Lab on LinkedIn"
          >
            {/* LinkedIn SVG icon */}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="currentColor"
              aria-hidden="true"
            >
              <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
            </svg>
            LinkedIn
          </a>
        </div>
      </div>
    </footer>
  );
}
