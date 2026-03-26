"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";

export type InteractiveImageAccordionItem = {
  id: string;
  title: string;
  body: string;
  imageSrc: string;
  imageAlt: string;
};

export type InteractiveImageAccordionProps = {
  sectionHeading: string;
  items: InteractiveImageAccordionItem[];
};

function AccordionStrip({
  item,
  isActive,
  onActivate,
}: {
  item: InteractiveImageAccordionItem;
  isActive: boolean;
  onActivate: () => void;
}) {
  return (
    <button
      type="button"
      onClick={onActivate}
      onMouseEnter={onActivate}
      className={cn(
        "relative h-[min(42vh,320px)] shrink-0 overflow-hidden rounded-2xl border border-white/10 text-left transition-all duration-700 ease-in-out focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-teal focus-visible:ring-offset-2 md:h-[450px]",
        isActive ? "w-[min(78vw,400px)] md:w-[400px]" : "w-12 md:w-[60px]"
      )}
    >
      <Image
        src={item.imageSrc}
        alt={item.imageAlt}
        fill
        sizes="(max-width: 768px) 80vw, 400px"
        className="object-cover"
        priority={isActive}
      />
      <div className="absolute inset-0 bg-black/40" aria-hidden />

      <span
        className={cn(
          "absolute text-white transition-all duration-300 ease-in-out",
          isActive
            ? "bottom-5 left-1/2 max-w-[90%] -translate-x-1/2 text-center font-montserrat text-base font-bold leading-tight md:bottom-6 md:text-lg"
            : "bottom-20 left-1/2 w-max max-w-none -translate-x-1/2 rotate-90 font-montserrat text-[11px] font-semibold uppercase tracking-wide opacity-90 md:bottom-24 md:text-xs"
        )}
      >
        {item.title}
      </span>
    </button>
  );
}

export function InteractiveImageAccordion({ sectionHeading, items }: InteractiveImageAccordionProps) {
  const [activeIndex, setActiveIndex] = useState(0);
  const active = items[activeIndex];

  if (!items.length) return null;

  return (
    <div className="w-full">
      <div className="flex flex-col gap-10 lg:flex-row lg:items-stretch lg:justify-between lg:gap-14">
        <div className="w-full text-center lg:w-[46%] lg:max-w-xl lg:text-left">
          <h2 className="mb-8 font-montserrat text-4xl font-black leading-tight tracking-tight text-charcoal text-balance md:text-5xl lg:text-6xl">
            {sectionHeading}
          </h2>

          <AnimatePresence mode="wait">
            {active ? (
              <motion.div
                key={active.id}
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -6 }}
                transition={{ duration: 0.25, ease: [0.23, 1, 0.32, 1] }}
                className="space-y-4"
              >
                <h3 className="font-montserrat text-xl font-black text-charcoal md:text-2xl">{active.title}</h3>
                <p className="font-raleway text-base leading-relaxed text-gray-500 md:text-lg">{active.body}</p>
              </motion.div>
            ) : null}
          </AnimatePresence>
        </div>

        <div className="w-full min-w-0 lg:w-[54%]">
          <ul
            className="flex list-none flex-row items-stretch justify-center gap-2 overflow-x-auto pb-2 pt-1 md:gap-4 md:pb-0"
            aria-label="Feature images"
          >
            {items.map((item, index) => (
              <li key={item.id} className="list-none">
                <AccordionStrip
                  item={item}
                  isActive={index === activeIndex}
                  onActivate={() => setActiveIndex(index)}
                />
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
