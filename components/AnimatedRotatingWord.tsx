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

  const currentWord = words[index];

  return (
    <motion.span
      key={currentWord}
      initial={{ opacity: 0, y: 8 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ type: "spring", stiffness: 80, damping: 20 }}
      className={className}
      style={{
        marginLeft: "0.35em",
        fontFamily: "Montserrat, sans-serif",
        fontSize: "inherit",
        lineHeight: 1,
        fontWeight: 900,
        color: "inherit",
        display: "inline-block",
        verticalAlign: "baseline",
      }}
      aria-live="polite"
      aria-label={currentWord}
    >
      {currentWord}
    </motion.span>
  );
}
