"use client";

import { useCallback, useEffect, useState } from "react";
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
import type { CarouselImage } from "@/components/customers/CustomerImageCarousel";

const ACCENT = "#2CADB2";

export type BundlePerspective = { for: string; benefit: string };

type BundlesEconomicsCarouselProps = {
  heading: string;
  kicker?: string;
  perspectives: BundlePerspective[];
  images: CarouselImage[];
  autoplay?: boolean;
  autoplayMs?: number;
};

export default function BundlesEconomicsCarousel({
  heading,
  kicker = "Why bundles work",
  perspectives,
  images,
  autoplay = true,
  autoplayMs = 9000,
}: BundlesEconomicsCarouselProps) {
  const n = perspectives.length;
  const [index, setIndex] = useState(0);
  const safeN = Math.max(n, 1);

  const go = useCallback(
    (dir: -1 | 1) => {
      setIndex((i) => (i + dir + safeN) % safeN);
    },
    [safeN],
  );

  useEffect(() => {
    if (!autoplay || n <= 1) return;
    const t = setInterval(() => go(1), autoplayMs);
    return () => clearInterval(t);
  }, [autoplay, autoplayMs, n, go]);

  const slides =
    images.length >= n ? images.slice(0, n) : [...images, ...images, ...images].slice(0, Math.max(n, 1));
  const current = slides[Math.min(index, Math.max(slides.length - 1, 0))] ?? images[0];

  return (
    <div className="mx-auto max-w-6xl">
      <p
        className="mb-3 text-center text-xs font-semibold uppercase tracking-[0.2em]"
        style={{ fontFamily: "Montserrat, sans-serif", color: ACCENT }}
      >
        {kicker}
      </p>
      <h2
        className="mb-12 text-center text-3xl font-semibold tracking-tight text-[#24282B] md:text-4xl"
        style={{ fontFamily: "Montserrat, sans-serif" }}
      >
        {heading}
      </h2>

      <div className="relative mb-10">
        <div className="relative mx-auto aspect-[16/10] w-full max-w-5xl overflow-hidden rounded-2xl bg-neutral-100 shadow-xl shadow-neutral-300/40 ring-1 ring-black/[0.06]">
          <AnimatePresence initial={false} mode="wait">
            <motion.div
              key={current.src + index}
              initial={{ opacity: 0, x: 36 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -36 }}
              transition={{ type: "spring", stiffness: 320, damping: 34 }}
              className="absolute inset-0"
            >
              <Image
                src={current.src}
                alt={current.alt}
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 1024px"
              />
            </motion.div>
          </AnimatePresence>

          {n > 1 ? (
            <>
              <button
                type="button"
                onClick={() => go(-1)}
                className="absolute left-3 top-1/2 z-10 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full bg-white/90 text-[#24282B] shadow-md backdrop-blur-sm transition hover:bg-white hover:text-[#2CADB2]"
                aria-label="Previous slide"
              >
                <ChevronLeft className="h-5 w-5" />
              </button>
              <button
                type="button"
                onClick={() => go(1)}
                className="absolute right-3 top-1/2 z-10 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full bg-white/90 text-[#24282B] shadow-md backdrop-blur-sm transition hover:bg-white hover:text-[#2CADB2]"
                aria-label="Next slide"
              >
                <ChevronRight className="h-5 w-5" />
              </button>
            </>
          ) : null}
        </div>

        {n > 1 ? (
          <div className="mt-5 flex justify-center gap-1.5">
            {perspectives.map((_, i) => (
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

      <div className="grid gap-4 md:grid-cols-3 md:items-stretch">
        {perspectives.map((p, i) => {
          const active = i === index;
          return (
            <motion.div
              key={p.for}
              layout
              initial={false}
              animate={{
                scale: active ? 1 : 0.98,
                opacity: active ? 1 : 0.88,
              }}
              transition={{ type: "spring", stiffness: 380, damping: 28 }}
              className={`rounded-2xl border p-6 text-left shadow-sm transition-colors duration-300 ${
                active
                  ? "border-[#2CADB2] bg-[#e8faf9] shadow-lg shadow-[#2CADB2]/15 ring-2 ring-[#2CADB2]/25"
                  : "border-neutral-200/80 bg-gray-50"
              }`}
            >
              <p className="mb-2 text-sm font-semibold" style={{ color: ACCENT, fontFamily: "Montserrat, sans-serif" }}>
                {p.for}
              </p>
              <p className="text-sm leading-relaxed text-neutral-600" style={{ fontFamily: "Raleway, sans-serif" }}>
                {p.benefit}
              </p>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
}
