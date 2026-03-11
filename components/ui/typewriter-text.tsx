"use client";

import { useEffect, useState, useRef } from "react";

export interface TypewriterProps {
  text: string | string[];
  speed?: number;
  cursor?: string;
  loop?: boolean;
  deleteSpeed?: number;
  delay?: number;
  className?: string;
  style?: React.CSSProperties;
}

export function Typewriter({
  text,
  speed = 100,
  cursor = "|",
  loop = false,
  deleteSpeed = 50,
  delay = 1500,
  className,
  style,
}: TypewriterProps) {
  const [displayText, setDisplayText] = useState("");
  const textArray = Array.isArray(text) ? text : [text];
  const textIndexRef = useRef(0);
  const charIndexRef = useRef(0);
  const isDeletingRef = useRef(false);
  const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    const currentText = textArray[textIndexRef.current] || "";
    if (!currentText) return;

    const tick = () => {
      if (!isDeletingRef.current) {
        // Typing
        if (charIndexRef.current < currentText.length) {
          setDisplayText(currentText.slice(0, charIndexRef.current + 1));
          charIndexRef.current += 1;
          timeoutRef.current = setTimeout(tick, speed);
        } else if (loop) {
          // Pause before deleting
          timeoutRef.current = setTimeout(() => {
            isDeletingRef.current = true;
            tick();
          }, delay);
        }
      } else {
        // Deleting
        if (charIndexRef.current > 0) {
          charIndexRef.current -= 1;
          setDisplayText(currentText.slice(0, charIndexRef.current));
          timeoutRef.current = setTimeout(tick, deleteSpeed);
        } else {
          isDeletingRef.current = false;
          textIndexRef.current = (textIndexRef.current + 1) % textArray.length;
          timeoutRef.current = setTimeout(tick, speed);
        }
      }
    };

    timeoutRef.current = setTimeout(tick, speed);

    return () => {
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
    };
  }, [textArray.join(","), loop, speed, deleteSpeed, delay]);

  return (
    <span className={className} style={style}>
      {displayText}
      <span className="animate-pulse" aria-hidden>
        {cursor}
      </span>
    </span>
  );
}
