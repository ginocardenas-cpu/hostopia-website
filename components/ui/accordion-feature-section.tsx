"use client";

import { useCallback, useRef, useState } from "react";
import Image from "next/image";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { cn } from "@/lib/utils";

export type AccordionFeatureSectionItem = {
  id: string;
  title: string;
  description: string;
  image: string;
  imageAlt?: string;
};

export type AccordionFeatureSectionProps = {
  sectionHeading: string;
  items: AccordionFeatureSectionItem[];
};

/**
 * Two-column accordion + preview image (desktop). Mobile shows image inside open item.
 * Typography matches ProductHeroAccordion (Montserrat / Raleway, charcoal / gray-500).
 */
export function AccordionFeatureSection({ sectionHeading, items }: AccordionFeatureSectionProps) {
  const scrollYBeforeInteraction = useRef(0);
  const firstId = items[0]?.id ?? "01";
  const [open, setOpen] = useState(firstId);

  const restoreScrollAfterToggle = useCallback(() => {
    const y = scrollYBeforeInteraction.current;
    requestAnimationFrame(() => {
      requestAnimationFrame(() => {
        window.scrollTo({ top: y, behavior: "auto" });
      });
    });
  }, []);

  if (items.length === 0) return null;

  const active = items.find((item) => item.id === open) ?? items[0];

  return (
    <section
      className="w-full bg-white py-12 [overflow-anchor:none] md:py-16 lg:py-24"
      onPointerDownCapture={() => {
        scrollYBeforeInteraction.current = window.scrollY;
      }}
    >
      <div className="mx-auto w-full max-w-7xl px-6 [overflow-anchor:none]">
        <h2 className="mb-8 max-w-4xl font-montserrat text-4xl font-black leading-tight tracking-tight text-charcoal text-balance md:mb-10 md:text-5xl lg:text-6xl">
          {sectionHeading}
        </h2>

        <div className="flex w-full flex-col items-stretch gap-10 lg:flex-row lg:items-start lg:justify-between lg:gap-14">
          <div className="w-full lg:w-1/2">
            <Accordion
              type="single"
              collapsible={false}
              value={open}
              onValueChange={(v) => {
                if (v) setOpen(v);
                restoreScrollAfterToggle();
              }}
              className="w-full [overflow-anchor:none]"
            >
              {items.map((item) => (
                <AccordionItem key={item.id} value={item.id} className="border-gray-200/80">
                  <AccordionTrigger className="py-5 hover:no-underline md:py-6">
                    <span
                      className={cn(
                        "text-left font-montserrat text-xl font-black tracking-tight transition-colors",
                        item.id === open ? "text-charcoal" : "text-gray-500"
                      )}
                    >
                      {item.title}
                    </span>
                  </AccordionTrigger>
                  <AccordionContent>
                    <p className="mt-1 font-raleway text-sm leading-relaxed text-gray-500 md:mt-0">{item.description}</p>
                    <div className="relative mt-4 aspect-[4/3] w-full md:hidden">
                      <Image
                        src={item.image}
                        alt={item.imageAlt ?? item.title}
                        fill
                        sizes="100vw"
                        quality={92}
                        className="rounded-xl object-cover"
                      />
                    </div>
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>

          <div className="relative hidden w-full overflow-hidden rounded-2xl border border-gray-200/80 bg-gray-100/50 lg:block lg:w-1/2">
            <div className="relative aspect-[4/3] w-full">
              <Image
                key={active.image}
                src={active.image}
                alt={active.imageAlt ?? active.title}
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                quality={92}
                className="object-cover"
                priority={false}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
