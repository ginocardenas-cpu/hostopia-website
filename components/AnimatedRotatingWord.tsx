"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";

const ROTATING_WORDS = [
  "Cablecos",
  "Distributors",
  "ISPs",
  "Mobile Carriers",
  "Registrars",
  "Resellers",
  "Telcos",
];

type AnimatedRotatingWordProps = {
  words?: string[];
  intervalMs?: number;
  className?: string;
};

export default function AnimatedRotatingWord({
  words = ROTATING_WORDS,
  intervalMs = 4000,
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
      className={`relative inline-block overflow-hidden align-baseline ${className}`}
      style={{
        height: "1em",
        lineHeight: 1,
        fontSize: "inherit",
        verticalAlign: "baseline",
        margin: 0,
        padding: 0,
        marginLeft: "0.28em",
      }}
      aria-live="polite"
      aria-label={words[index]}
    >
      {/* Invisible sizer so container has width; same metrics as visible word for exact baseline match */}
      <span
        aria-hidden
        className="invisible whitespace-nowrap font-black tracking-tight"
        style={{
          fontFamily: "Montserrat, sans-serif",
          fontSize: "inherit",
          lineHeight: 1,
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
            lineHeight: 1,
            color: "inherit",
          }}
        >
          {word}
        </motion.span>
      ))}
    </span>
  );
}
