"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";

const ROTATING_WORDS = [
  "Platform",
  "Products",
  "People",
  "Technology",
  "Support",
  "Experience",
];

type AnimatedRotatingWordProps = {
  words?: string[];
  intervalMs?: number;
  className?: string;
};

export default function AnimatedRotatingWord({
  words = ROTATING_WORDS,
  intervalMs = 2000,
  className = "",
}: AnimatedRotatingWordProps) {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const id = setInterval(() => {
      setIndex((i) => (i === words.length - 1 ? 0 : i + 1));
    }, intervalMs);
    return () => clearInterval(id);
  }, [words.length, intervalMs]);

  const longestWord = words.reduce((a, b) => (a.length >= b.length ? a : b), "");

  return (
    <span
      className={`relative inline-block align-baseline overflow-hidden ${className}`}
      style={{ height: "1.15em", fontSize: "inherit" }}
      aria-live="polite"
      aria-label={words[index]}
    >
      {/* Invisible sizer so container has width (absolute children don't affect layout) */}
      <span
        aria-hidden
        className="invisible whitespace-nowrap font-black tracking-tight"
        style={{
          fontFamily: "Montserrat, sans-serif",
          fontSize: "inherit",
        }}
      >
        {longestWord}
      </span>
      {words.map((word, i) => (
        <motion.span
          key={word}
          className="absolute left-0 top-0 whitespace-nowrap font-black tracking-tight"
          initial={false}
          animate={
            index === i
              ? { y: 0, opacity: 1 }
              : {
                  y: index > i ? -120 : 120,
                  opacity: 0,
                }
          }
          transition={{ type: "spring", stiffness: 80, damping: 24 }}
          style={{
            fontFamily: "Montserrat, sans-serif",
            fontSize: "inherit",
            color: "#24282B",
          }}
        >
          {word}
        </motion.span>
      ))}
    </span>
  );
}
