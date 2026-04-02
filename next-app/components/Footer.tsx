"use client";

import Link from "next/link";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-[#1f3a5f] text-white/80">
      <div className="w-[min(1120px,92vw)] mx-auto py-10">
        {/* Top row: brand + description */}
        <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-6 mb-8">
          <div className="max-w-[420px]">
            <p className="text-white font-bold text-[1.15rem] m-0">
              REACH Equity Lab
            </p>
            <p className="text-white/60 text-[0.88rem] mt-2 m-0 leading-relaxed">
              Research in Epidemiology, Access &amp; Community Health.
              Advancing equity through undergraduate research at UT Austin.
            </p>
          </div>
          {/* Social */}
          <a
            href="https://www.linkedin.com/company/reach-equity-lab/"
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-2 text-white/80 no-underline text-[0.9rem] font-medium hover:text-white transition-colors duration-150"
            aria-label="REACH Equity Lab on LinkedIn"
          >
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

        {/* Divider */}
        <div className="border-t border-white/10 pt-6">
          {/* Links row */}
          <div className="flex flex-wrap items-center gap-x-2 gap-y-1 text-[0.85rem] mb-4">
            <Link href="/about" className="text-white/70 no-underline hover:text-white transition-colors">About</Link>
            <span className="text-white/30">&middot;</span>
            <Link href="/team" className="text-white/70 no-underline hover:text-white transition-colors">Team</Link>
            <span className="text-white/30">&middot;</span>
            <Link href="/publications" className="text-white/70 no-underline hover:text-white transition-colors">Publications</Link>
            <span className="text-white/30">&middot;</span>
            <Link href="/events" className="text-white/70 no-underline hover:text-white transition-colors">Events</Link>
            <span className="text-white/30">&middot;</span>
            <Link href="/connect" className="text-white/70 no-underline hover:text-white transition-colors">Connect</Link>
            <span className="text-white/30">&middot;</span>
            <Link href="/contact" className="text-white/70 no-underline hover:text-white transition-colors">Contact</Link>
          </div>

          {/* Tagline */}
          <p className="text-white/40 text-[0.82rem] m-0 mb-3 italic">
            Research. Equity. Access. Community. Health. Built for impact.
          </p>

          {/* Copyright */}
          <p className="text-white/40 text-[0.8rem] m-0">
            &copy; {year} REACH Equity Lab, The University of Texas at Austin. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
