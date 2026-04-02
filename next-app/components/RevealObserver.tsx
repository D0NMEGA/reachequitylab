"use client";

import { useEffect } from "react";

export function RevealObserver() {
  useEffect(() => {
    const revealNodes = document.querySelectorAll(".reveal");

    if ("IntersectionObserver" in window) {
      const io = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              entry.target.classList.add("is-visible");
              io.unobserve(entry.target);
            }
          });
        },
        { threshold: 0.12, rootMargin: "0px 0px -32px 0px" }
      );

      revealNodes.forEach((node) => io.observe(node));

      return () => io.disconnect();
    } else {
      revealNodes.forEach((node) => node.classList.add("is-visible"));
    }
  }, []);

  return null;
}
