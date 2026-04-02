"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface AccordionItem {
  letter: string;
  word: string;
  description: string;
}

const items: AccordionItem[] = [
  {
    letter: "R",
    word: "Research",
    description:
      "We ground every initiative in careful inquiry and evidence-driven analysis. Our studies draw from nationally representative datasets to uncover patterns that shape health outcomes.",
  },
  {
    letter: "E",
    word: "Epidemiology",
    description:
      "Our work tracks patterns of disease and outcomes across populations and systems. We apply epidemiologic methods to quantify disparities and identify modifiable risk factors.",
  },
  {
    letter: "A",
    word: "Access",
    description:
      "We examine barriers to care, affordability, and the pathways people use to seek help. Understanding access gaps is essential to designing interventions that reach the most affected communities.",
  },
  {
    letter: "C",
    word: "Community",
    description:
      "We elevate community voices and align findings with lived experience and local context. Our research prioritizes translating evidence into resources that communities can act on directly.",
  },
  {
    letter: "H",
    word: "Health",
    description:
      "Our end goal is better, more equitable health outcomes through actionable insights. Every project is oriented toward practical recommendations for clinicians, policymakers, and advocates.",
  },
];

export function ReachAccordion() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <div className="mt-5 grid gap-2">
      {items.map((item, idx) => {
        const isOpen = openIndex === idx;
        return (
          <div
            key={item.letter}
            className="border border-[#e2e8f0] rounded-xl overflow-hidden bg-white"
          >
            <button
              type="button"
              className="w-full flex items-center gap-4 px-5 py-4 text-left cursor-pointer hover:bg-[#f8fbff] transition-colors duration-150"
              onClick={() => setOpenIndex(isOpen ? null : idx)}
              aria-expanded={isOpen}
            >
              <span className="shrink-0 w-9 h-9 rounded-full bg-[#1f3a5f] text-white font-extrabold text-lg grid place-items-center leading-none">
                {item.letter}
              </span>
              <span className="font-semibold text-[#1f3a5f] text-[1rem]">
                {item.word}
              </span>
              <motion.span
                className="ml-auto text-[#3ba99c] shrink-0"
                animate={{ rotate: isOpen ? 180 : 0 }}
                transition={{ duration: 0.25 }}
                aria-hidden="true"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <polyline points="6 9 12 15 18 9" />
                </svg>
              </motion.span>
            </button>
            <AnimatePresence initial={false}>
              {isOpen && (
                <motion.div
                  key="content"
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.28, ease: "easeInOut" }}
                  className="overflow-hidden"
                >
                  <p className="px-5 pb-5 pt-1 text-[#4a4a4a] leading-relaxed m-0">
                    {item.description}
                  </p>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        );
      })}
    </div>
  );
}
