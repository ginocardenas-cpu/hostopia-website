"use client";

import { useState, useEffect, useCallback } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import {
  Server,
  TrendingUp,
  LayoutDashboard,
  Package,
  Shield,
  Globe2,
  Layers,
  type LucideIcon,
} from "lucide-react";
import { cn } from "@/lib/utils";

const ICONS: LucideIcon[] = [Server, TrendingUp, LayoutDashboard, Package, Shield, Globe2, Layers];

export type FeatureCarouselItem = {
  id: string;
  label: string;
  description: string;
  imageSrc: string;
  imageAlt: string;
};

export type FeatureCarouselProps = {
  items: FeatureCarouselItem[];
};

const AUTO_PLAY_INTERVAL = 3500;
const ITEM_HEIGHT = 68;

function wrap(min: number, max: number, v: number) {
  const rangeSize = max - min;
  return ((((v - min) % rangeSize) + rangeSize) % rangeSize) + min;
}

export function FeatureCarousel({ items }: FeatureCarouselProps) {
  const [step, setStep] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const len = items.length;
  const currentIndex = ((step % len) + len) % len;

  const nextStep = useCallback(() => {
    setStep((prev) => prev + 1);
  }, []);

  const handleChipClick = (index: number) => {
    const diff = (index - currentIndex + len) % len;
    if (diff > 0) setStep((s) => s + diff);
  };

  useEffect(() => {
    if (isPaused || len < 2) return;
    const interval = setInterval(nextStep, AUTO_PLAY_INTERVAL);
    return () => clearInterval(interval);
  }, [nextStep, isPaused, len]);

  const getCardStatus = (index: number) => {
    const diff = index - currentIndex;
    let normalizedDiff = diff;
    if (diff > len / 2) normalizedDiff -= len;
    if (diff < -len / 2) normalizedDiff += len;
    if (normalizedDiff === 0) return "active";
    if (normalizedDiff === -1) return "prev";
    if (normalizedDiff === 1) return "next";
    return "hidden";
  };

  if (!len) return null;

  return (
    <div className="mx-auto w-full max-w-7xl md:p-4 lg:p-6">
      <div className="relative flex min-h-[520px] flex-col overflow-hidden rounded-[2rem] border border-gray-200/80 bg-white lg:aspect-video lg:min-h-[560px] lg:flex-row">
        {/* Left: teal chip list */}
        <div className="relative z-30 flex min-h-[320px] w-full flex-col items-start justify-center overflow-hidden bg-teal px-6 py-12 md:min-h-[380px] md:px-12 lg:h-full lg:w-[42%] lg:min-h-0 lg:py-10 lg:pl-12 lg:pr-8">
          <div className="absolute inset-x-0 top-0 z-40 h-10 bg-gradient-to-b from-teal via-teal/85 to-transparent md:h-14" />
          <div className="absolute inset-x-0 bottom-0 z-40 h-10 bg-gradient-to-t from-teal via-teal/85 to-transparent md:h-14" />
          <div className="relative z-20 flex h-[min(320px,55vh)] w-full items-center justify-center lg:h-full lg:justify-start">
            {items.map((feature, index) => {
              const isActive = index === currentIndex;
              const distance = index - currentIndex;
              const wrappedDistance = wrap(-(len / 2), len / 2, distance);
              const Icon = ICONS[index % ICONS.length];

              return (
                <motion.div
                  key={feature.id}
                  style={{ height: ITEM_HEIGHT, width: "fit-content" }}
                  animate={{
                    y: wrappedDistance * ITEM_HEIGHT,
                    opacity: 1 - Math.abs(wrappedDistance) * 0.22,
                  }}
                  transition={{
                    type: "spring",
                    stiffness: 90,
                    damping: 22,
                    mass: 1,
                  }}
                  className="absolute flex items-center justify-start"
                >
                  <button
                    type="button"
                    onClick={() => handleChipClick(index)}
                    onMouseEnter={() => setIsPaused(true)}
                    onMouseLeave={() => setIsPaused(false)}
                    className={cn(
                      "group relative flex items-center gap-3 rounded-full border px-4 py-3 text-left transition-all duration-500 md:gap-4 md:px-8 md:py-4 lg:px-7",
                      isActive
                        ? "z-10 border-white bg-white text-teal shadow-md"
                        : "border-white/25 bg-transparent text-white/65 hover:border-white/45 hover:text-white"
                    )}
                  >
                    <span
                      className={cn(
                        "flex h-8 w-8 shrink-0 items-center justify-center rounded-full transition-colors duration-500 md:h-9 md:w-9",
                        isActive ? "bg-teal/10 text-teal" : "bg-white/10 text-white/45 group-hover:text-white/80"
                      )}
                    >
                      <Icon className="h-4 w-4 md:h-[18px] md:w-[18px]" strokeWidth={2} aria-hidden />
                    </span>
                    <span className="max-w-[14rem] font-raleway text-xs font-semibold leading-snug tracking-tight text-current sm:max-w-[16rem] md:text-[15px]">
                      {feature.label}
                    </span>
                  </button>
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* Right: image stack */}
        <div className="relative flex min-h-[420px] flex-1 items-center justify-center overflow-hidden border-t border-gray-200/60 bg-gray-50 px-5 py-12 md:min-h-[480px] md:px-10 lg:border-l lg:border-t-0 lg:py-10">
          <div className="relative flex aspect-[4/5] w-full max-w-[400px] items-center justify-center md:max-w-[420px]">
            {items.map((feature, index) => {
              const status = getCardStatus(index);
              const isActive = status === "active";
              const isPrev = status === "prev";
              const isNext = status === "next";

              return (
                <motion.div
                  key={feature.id}
                  initial={false}
                  animate={{
                    x: isActive ? 0 : isPrev ? -90 : isNext ? 90 : 0,
                    scale: isActive ? 1 : isPrev || isNext ? 0.86 : 0.72,
                    opacity: isActive ? 1 : isPrev || isNext ? 0.38 : 0,
                    rotate: isPrev ? -2.5 : isNext ? 2.5 : 0,
                    zIndex: isActive ? 20 : isPrev || isNext ? 10 : 0,
                  }}
                  transition={{
                    type: "spring",
                    stiffness: 260,
                    damping: 26,
                    mass: 0.85,
                  }}
                  className="absolute inset-0 origin-center overflow-hidden rounded-[1.75rem] border-[6px] border-white bg-white shadow-lg md:rounded-[2.25rem] md:border-[8px]"
                  style={{ pointerEvents: isActive ? "auto" : "none" }}
                >
                  <Image
                    src={feature.imageSrc}
                    alt={feature.imageAlt}
                    fill
                    className={cn(
                      "object-cover transition-all duration-700",
                      isActive ? "blur-0 grayscale-0" : "brightness-[0.85] blur-[1.5px] grayscale"
                    )}
                    sizes="(max-width: 1024px) 90vw, 420px"
                  />

                  <AnimatePresence>
                    {isActive ? (
                      <motion.div
                        initial={{ opacity: 0, y: 16 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 8 }}
                        transition={{ duration: 0.35 }}
                        className="pointer-events-none absolute inset-x-0 bottom-0 flex flex-col justify-end bg-gradient-to-t from-black/88 via-black/35 to-transparent p-6 pb-8 pt-24 md:p-10 md:pt-32"
                      >
                        <div className="mb-2 w-fit rounded-full border border-white/20 bg-white/95 px-3 py-1 font-raleway text-[10px] font-semibold uppercase tracking-[0.18em] text-charcoal shadow-sm md:text-[11px]">
                          {index + 1} · {feature.label}
                        </div>
                        <p className="font-raleway text-lg font-normal leading-snug tracking-tight text-white drop-shadow-md md:text-xl">
                          {feature.description}
                        </p>
                      </motion.div>
                    ) : null}
                  </AnimatePresence>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
