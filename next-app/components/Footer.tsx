"use client";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-[#e2e8f0] bg-[#1f3a5f] py-[18px]">
      <div className="flex flex-wrap justify-between items-center gap-2.5 w-[min(1120px,92vw)] mx-auto">
        <p className="text-white">
          &copy; <span>{year}</span> REACH Equity Lab
        </p>
        <div className="flex flex-wrap gap-3.5">
          <a
            href="https://www.linkedin.com"
            target="_blank"
            rel="noreferrer"
            className="no-underline text-white font-semibold"
          >
            LinkedIn
          </a>
        </div>
      </div>
    </footer>
  );
}
