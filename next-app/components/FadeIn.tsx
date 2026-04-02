"use client";

import { motion, type Variants } from "framer-motion";
import { type ReactNode } from "react";

interface FadeInProps {
  children: ReactNode;
  delay?: number;
  duration?: number;
  y?: number;
  className?: string;
  as?: "div" | "section" | "article" | "aside" | "li";
}

const fadeInVariants: Variants = {
  hidden: { opacity: 0, y: 14 },
  visible: {
    opacity: 1,
    y: 0,
  },
};

export function FadeIn({
  children,
  delay = 0,
  duration = 0.65,
  y = 14,
  className,
  as = "div",
}: FadeInProps) {
  const MotionComponent = motion[as as keyof typeof motion] as typeof motion.div;

  return (
    <MotionComponent
      variants={fadeInVariants}
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration, delay, ease: "easeOut" }}
      viewport={{ once: true, margin: "0px 0px -32px 0px", amount: 0.12 }}
      className={className}
    >
      {children}
    </MotionComponent>
  );
}
