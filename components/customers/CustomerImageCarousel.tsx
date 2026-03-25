"use client";

import { useCallback, useEffect, useState } from "react";
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";

export type CarouselImage = { src: string; alt: string };

type CustomerImageCarouselProps = {
  images: CarouselImage[];
  className?: string;
};

export default function CustomerImageCarousel({ images, className = "" }: CustomerImageCarouselProps) {
  const [index, setIndex] = useState(0);
  const len = images.length;
  const safeLen = Math.max(len, 1);

  const go = useCallback(
    (dir: -1 | 1) => {
      setIndex((i) => (i + dir + safeLen) % safeLen);
    },
    [safeLen],
  );

  useEffect(() => {
    if (len <= 1) return;
    const t = setInterval(() => go(1), 6500);
    return () => clearInterval(t);
  }, [len, go]);

  if (len === 0) {
    return (
      <div
        className={`aspect-[4/3] rounded-2xl bg-gradient-to-br from-neutral-100 to-neutral-200 shadow-lg shadow-neutral-200/60 ring-1 ring-black/[0.04] ${className}`}
      />
    );
  }

  const current = images[index];

  return (
    <div className={`relative ${className}`}>
      <div className="relative aspect-[4/3] overflow-hidden rounded-2xl bg-neutral-100 shadow-lg shadow-neutral-300/40 ring-1 ring-black/[0.06]">
        <AnimatePresence initial={false} mode="wait">
          <motion.div
            key={current.src + index}
            initial={{ opacity: 0, x: 28 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -28 }}
            transition={{ type: "spring", stiffness: 380, damping: 36 }}
            className="absolute inset-0"
          >
            <Image
              src={current.src}
              alt={current.alt}
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 480px"
            />
          </motion.div>
        </AnimatePresence>

        {len > 1 ? (
          <>
            <button
              type="button"
              onClick={() => go(-1)}
              className="absolute left-3 top-1/2 z-10 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full bg-white/90 text-[#24282B] shadow-md backdrop-blur-sm transition hover:bg-white hover:text-[#2CADB2]"
              aria-label="Previous image"
            >
              <ChevronLeft className="h-5 w-5" />
            </button>
            <button
              type="button"
              onClick={() => go(1)}
              className="absolute right-3 top-1/2 z-10 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full bg-white/90 text-[#24282B] shadow-md backdrop-blur-sm transition hover:bg-white hover:text-[#2CADB2]"
              aria-label="Next image"
            >
              <ChevronRight className="h-5 w-5" />
            </button>
          </>
        ) : null}
      </div>

      {len > 1 ? (
        <div className="mt-5 flex justify-center gap-1.5">
          {images.map((_, i) => (
            <button
              key={i}
              type="button"
              onClick={() => setIndex(i)}
              className={`h-1.5 rounded-full transition-all duration-300 ${
                i === index ? "w-8 bg-[#2CADB2]" : "w-1.5 bg-neutral-300 hover:bg-neutral-400"
              }`}
              aria-label={`Go to slide ${i + 1}`}
            />
          ))}
        </div>
      ) : null}
    </div>
  );
}
