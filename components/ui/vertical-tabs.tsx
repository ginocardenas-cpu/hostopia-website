"use client";

import React, { useState, useEffect, useCallback, useRef, useLayoutEffect } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
import ProductLucideIcon from "@/components/products/ProductLucideIcon";
import { cn } from "@/lib/utils";

export type VerticalTabItem = {
  id: string;
  title: string;
  description: string;
  imageSrc: string;
  imageAlt: string;
  /** Optional Lucide icon shown above the description under the gallery. */
  icon?: string;
};

export type VerticalTabsProps = {
  sectionHeading: string;
  items: VerticalTabItem[];
};

const AUTO_PLAY_DURATION = 5000;

const PARAGRAPH_CLASS =
  "w-full text-left font-raleway text-sm font-normal leading-relaxed text-gray-500 md:text-base";

function splitDescriptionLines(description: string): string[] {
  return description
    .split("\n")
    .map((line) => line.trim())
    .filter(Boolean);
}

/** Strip markdown-style or typographic bullets so teal dots are the only markers. */
function stripLeadingBulletPrefix(text: string): string {
  return text.replace(/^\s*[•·]\s*/, "").replace(/^\s*[-*]\s+/, "");
}

function DescriptionBody({ description }: { description: string }) {
  const lines = splitDescriptionLines(description);
  if (lines.length === 0) {
    return <p className={PARAGRAPH_CLASS}>{description}</p>;
  }
  if (lines.length === 1) {
    return <p className={PARAGRAPH_CLASS}>{stripLeadingBulletPrefix(lines[0]!)}</p>;
  }
  return (
    <ul className="w-full list-none space-y-3.5 text-left">
      {lines.map((line, i) => {
        const text = stripLeadingBulletPrefix(line);
        return (
          <li key={i} className="flex w-full items-start gap-3">
            <span
              className="mt-[0.55em] h-2 w-2 shrink-0 rounded-full bg-teal"
              aria-hidden
            />
            <span className="min-w-0 flex-1 text-left font-raleway text-sm font-normal leading-relaxed text-gray-500 md:text-base">
              {text}
            </span>
          </li>
        );
      })}
    </ul>
  );
}

function TabPanelUnderImage({
  icon,
  description,
  forMeasurement,
}: {
  icon?: string;
  description: string;
  forMeasurement?: boolean;
}) {
  return (
    <div
      className="flex w-full flex-col items-start"
      {...(forMeasurement ? { "data-measure-desc": true } : {})}
    >
      {icon ? (
        <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-teal/10">
          <ProductLucideIcon name={icon} className="h-6 w-6 text-teal" size={24} />
        </div>
      ) : null}
      <DescriptionBody description={description} />
    </div>
  );
}

export function VerticalTabs({ sectionHeading, items }: VerticalTabsProps) {
  const [activeIndex, setActiveIndex] = useState(0);
  const [direction, setDirection] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  /** Reserved height for the description block so tab switches do not shift the layout below. */
  const [descriptionSlotPx, setDescriptionSlotPx] = useState(0);
  const measureDescriptionsRef = useRef<HTMLDivElement>(null);

  const handleNext = useCallback(() => {
    setDirection(1);
    setActiveIndex((prev) => (prev + 1) % items.length);
  }, [items.length]);

  const handlePrev = useCallback(() => {
    setDirection(-1);
    setActiveIndex((prev) => (prev - 1 + items.length) % items.length);
  }, [items.length]);

  const handleTabClick = (index: number) => {
    if (index === activeIndex) return;
    setDirection(index > activeIndex ? 1 : -1);
    setActiveIndex(index);
    setIsPaused(false);
  };

  useEffect(() => {
    if (isPaused || items.length === 0) return;

    const interval = setInterval(() => {
      handleNext();
    }, AUTO_PLAY_DURATION);

    return () => clearInterval(interval);
  }, [activeIndex, isPaused, handleNext, items.length]);

  useLayoutEffect(() => {
    const root = measureDescriptionsRef.current;
    if (!root) return;

    const measure = () => {
      const paragraphs = root.querySelectorAll<HTMLElement>("[data-measure-desc]");
      let max = 0;
      paragraphs.forEach((el) => {
        max = Math.max(max, el.getBoundingClientRect().height);
      });
      setDescriptionSlotPx(max);
    };

    measure();
    const ro = typeof ResizeObserver !== "undefined" ? new ResizeObserver(measure) : null;
    if (ro) ro.observe(root);
    window.addEventListener("resize", measure);
    return () => {
      if (ro) ro.disconnect();
      window.removeEventListener("resize", measure);
    };
  }, [items]);

  const variants = {
    enter: (dir: number) => ({
      y: dir > 0 ? "-100%" : "100%",
      opacity: 0,
    }),
    center: {
      zIndex: 1,
      y: 0,
      opacity: 1,
    },
    exit: (dir: number) => ({
      zIndex: 0,
      y: dir > 0 ? "100%" : "-100%",
      opacity: 0,
    }),
  };

  if (items.length === 0) return null;

  const active = items[activeIndex];

  return (
    <section className="w-full bg-white py-12 md:py-16 lg:py-24">
      <div className="mx-auto w-full max-w-7xl px-6">
        {/* Hidden: measure tallest description so each tab row reserves the same vertical space. */}
        <div
          ref={measureDescriptionsRef}
          className="pointer-events-none absolute -left-[9999px] top-0 w-full max-w-xl opacity-0 lg:max-w-2xl"
          aria-hidden
        >
          {items.map((item) => (
            <TabPanelUnderImage
              key={`measure-${item.id}`}
              icon={item.icon}
              description={item.description}
              forMeasurement
            />
          ))}
        </div>

        <div className="grid grid-cols-1 items-start gap-12 lg:grid-cols-12 lg:gap-16">
          <div className="order-2 flex flex-col justify-center pt-4 lg:order-1 lg:col-span-5">
            <div className="mb-10 space-y-1 lg:mb-12">
              <h2 className="max-w-4xl font-montserrat text-4xl font-black leading-tight tracking-tight text-charcoal text-balance md:text-5xl lg:text-6xl">
                {sectionHeading}
              </h2>
            </div>

            <div className="flex flex-col space-y-0" role="tablist" aria-label={sectionHeading}>
              {items.map((item, index) => {
                const isActive = activeIndex === index;
                return (
                  <button
                    key={item.id}
                    type="button"
                    role="tab"
                    id={`vertical-tab-${item.id}`}
                    aria-selected={isActive}
                    aria-controls="vertical-tabs-description-panel"
                    onClick={() => handleTabClick(index)}
                    className={cn(
                      "group relative flex items-start gap-4 border-t border-gray-200/80 py-6 text-left transition-all duration-500 first:border-0 md:py-8",
                      isActive ? "text-charcoal" : "text-gray-500/70 hover:text-charcoal"
                    )}
                  >
                    <div className="absolute bottom-0 left-[-16px] top-0 w-0.5 bg-gray-200 md:left-[-24px]">
                      {isActive ? (
                        <motion.div
                          key={`progress-${index}-${isPaused}`}
                          className="absolute left-0 top-0 w-full origin-top bg-teal"
                          initial={{ height: "0%" }}
                          animate={isPaused ? { height: "0%" } : { height: "100%" }}
                          transition={{
                            duration: AUTO_PLAY_DURATION / 1000,
                            ease: "linear",
                          }}
                        />
                      ) : null}
                    </div>

                    <span className="mt-1 font-raleway text-[9px] font-semibold tabular-nums opacity-50 md:text-[10px]">
                      /{item.id}
                    </span>

                    <span
                      className={cn(
                        "flex-1 font-montserrat text-xl font-black tracking-tight transition-colors duration-500",
                        isActive ? "text-charcoal" : ""
                      )}
                    >
                      {item.title}
                    </span>
                  </button>
                );
              })}
            </div>
          </div>

          <div className="order-1 flex h-full flex-col justify-end lg:order-2 lg:col-span-7">
            <div className="mx-auto flex w-full max-w-xl flex-col lg:max-w-2xl">
              <div
                className="relative group/gallery"
                onMouseEnter={() => setIsPaused(true)}
                onMouseLeave={() => setIsPaused(false)}
              >
                <div className="relative aspect-[4/5] overflow-hidden rounded-3xl border border-gray-200/80 bg-gray-100/50 md:aspect-[4/3] lg:aspect-[16/10] md:rounded-[2.5rem]">
                  <AnimatePresence initial={false} custom={direction} mode="popLayout">
                  <motion.div
                    key={activeIndex}
                    custom={direction}
                    variants={variants}
                    initial="enter"
                    animate="center"
                    exit="exit"
                    transition={{
                      y: { type: "spring", stiffness: 260, damping: 32 },
                      opacity: { duration: 0.4 },
                    }}
                    className="absolute inset-0 h-full w-full cursor-pointer"
                    onClick={handleNext}
                  >
                    <Image
                      src={active.imageSrc}
                      alt={active.imageAlt}
                      fill
                      sizes="(max-width: 1024px) 100vw, 672px"
                      quality={92}
                      className="m-0 block object-cover p-0 transition-transform duration-700 hover:scale-105"
                    />
                    <div className="pointer-events-none absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-black/20 via-transparent to-transparent opacity-60" />
                  </motion.div>
                  </AnimatePresence>

                  <div className="absolute bottom-6 right-6 z-20 flex gap-2 md:bottom-8 md:right-8 md:gap-3">
                  <button
                    type="button"
                    onClick={(e) => {
                      e.stopPropagation();
                      handlePrev();
                    }}
                    className="flex h-10 w-10 items-center justify-center rounded-full border border-gray-200/80 bg-white/90 text-charcoal backdrop-blur-md transition-all hover:bg-white active:scale-90 md:h-12 md:w-12"
                    aria-label="Previous"
                  >
                    <ChevronLeft className="h-5 w-5" strokeWidth={2} />
                  </button>
                  <button
                    type="button"
                    onClick={(e) => {
                      e.stopPropagation();
                      handleNext();
                    }}
                    className="flex h-10 w-10 items-center justify-center rounded-full border border-gray-200/80 bg-white/90 text-charcoal backdrop-blur-md transition-all hover:bg-white active:scale-90 md:h-12 md:w-12"
                    aria-label="Next"
                  >
                    <ChevronRight className="h-5 w-5" strokeWidth={2} />
                  </button>
                  </div>
                </div>
              </div>

              {/* Tab detail copy: left-aligned teal bullets under image; min-height avoids jump when tabs change. */}
              <div
                className="relative mt-6 w-full flex flex-col items-stretch px-0"
                style={descriptionSlotPx > 0 ? { minHeight: descriptionSlotPx } : undefined}
              >
                <AnimatePresence mode="wait" initial={false}>
                  <motion.div
                    key={active.id}
                    role="tabpanel"
                    id="vertical-tabs-description-panel"
                    aria-labelledby={`vertical-tab-${active.id}`}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.2, ease: [0.23, 1, 0.32, 1] }}
                    className="flex w-full flex-col items-start"
                  >
                    <TabPanelUnderImage icon={active.icon} description={active.description} />
                  </motion.div>
                </AnimatePresence>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
