"use client";

import { useState, useRef, useCallback, useEffect } from "react";
import { cn } from "@/lib/utils";

export type ImageComparisonProps = {
  beforeImage: string;
  afterImage: string;
  altBefore?: string;
  altAfter?: string;
  className?: string;
};

/**
 * Before/after image comparison. Bottom layer = "before" (left side default);
 * top layer = "after" clipped from the left so the handle reveals "after" on the right.
 */
export function ImageComparison({
  beforeImage,
  afterImage,
  altBefore = "Before",
  altAfter = "After",
  className,
}: ImageComparisonProps) {
  const [sliderPosition, setSliderPosition] = useState(50);
  const [isDragging, setIsDragging] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const updateFromClientX = useCallback(
    (clientX: number) => {
      const el = containerRef.current;
      if (!el) return;
      const rect = el.getBoundingClientRect();
      let next = ((clientX - rect.left) / rect.width) * 100;
      next = Math.max(0, Math.min(100, next));
      setSliderPosition(next);
    },
    []
  );

  useEffect(() => {
    if (!isDragging) return;
    const move = (e: PointerEvent) => updateFromClientX(e.clientX);
    const up = () => setIsDragging(false);
    window.addEventListener("pointermove", move);
    window.addEventListener("pointerup", up);
    window.addEventListener("pointercancel", up);
    return () => {
      window.removeEventListener("pointermove", move);
      window.removeEventListener("pointerup", up);
      window.removeEventListener("pointercancel", up);
    };
  }, [isDragging, updateFromClientX]);

  return (
    <div
      className={cn(
        "relative mx-auto w-full max-w-4xl select-none overflow-hidden rounded-2xl border border-gray-200/80 shadow-lg md:rounded-3xl",
        className
      )}
      style={{ touchAction: "none" }}
    >
      <div
        ref={containerRef}
        className="relative aspect-[16/10] w-full cursor-ew-resize md:aspect-[16/9]"
        onPointerDown={(e) => {
          e.preventDefault();
          setIsDragging(true);
          updateFromClientX(e.clientX);
        }}
      >
        {/* Before (dated / weaker) — full width underneath */}
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={beforeImage}
          alt={altBefore}
          className="pointer-events-none absolute inset-0 h-full w-full object-cover object-center"
          draggable={false}
        />

        {/* After (professional) — clipped: visible from slider to right edge */}
        <div
          className="pointer-events-none absolute inset-0 overflow-hidden"
          style={{ clipPath: `inset(0 0 0 ${sliderPosition}%)` }}
        >
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={afterImage}
            alt={altAfter}
            className="h-full w-full object-cover object-center"
            draggable={false}
          />
        </div>

        {/* Handle */}
        <div
          data-comparison-handle
          className="pointer-events-none absolute bottom-0 top-0 z-10 w-1 bg-white/90 shadow-sm md:w-1.5"
          style={{ left: `calc(${sliderPosition}% - 2px)` }}
        >
          <div
            className={cn(
              "pointer-events-auto absolute left-1/2 top-1/2 flex h-11 w-11 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-white shadow-md transition-transform md:h-12 md:w-12",
              isDragging && "scale-110 shadow-xl"
            )}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="22"
              height="22"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="text-charcoal"
              aria-hidden
            >
              <line x1="15" y1="18" x2="9" y2="12" />
              <line x1="9" y1="6" x2="15" y2="12" />
            </svg>
          </div>
        </div>

        <span className="pointer-events-none absolute bottom-3 left-3 rounded bg-black/55 px-2 py-1 font-raleway text-[10px] font-semibold uppercase tracking-wider text-white md:text-xs">
          Before
        </span>
        <span className="pointer-events-none absolute bottom-3 right-3 rounded bg-black/55 px-2 py-1 font-raleway text-[10px] font-semibold uppercase tracking-wider text-white md:text-xs">
          After
        </span>
      </div>
    </div>
  );
}
