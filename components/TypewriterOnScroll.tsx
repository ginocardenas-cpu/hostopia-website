"use client";

import { useEffect, useRef, useState } from "react";

export default function TypewriterOnScroll() {
  const ref = useRef<HTMLSpanElement>(null);
  const [hasTriggered, setHasTriggered] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const [entry] = entries;
        if (entry?.isIntersecting && !hasTriggered) {
          setHasTriggered(true);
        }
      },
      { threshold: 0.3, rootMargin: "0px 0px -50px 0px" }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [hasTriggered]);

  return (
    <span ref={ref} style={{ color: "#2CADB2" }} className="inline-flex items-baseline">
      <span
        className={`inline-block overflow-hidden whitespace-nowrap ${
          hasTriggered ? "animate-typewriter-reveal" : "max-w-0"
        }`}
      >
        Nothing You Don&apos;t.
      </span>
      {hasTriggered && (
        <span
          className="animate-typewriter-cursor ml-0.5"
          style={{ color: "#2CADB2" }}
          aria-hidden
        >
          |
        </span>
      )}
    </span>
  );
}
