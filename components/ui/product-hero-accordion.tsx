"use client";

import { useCallback, useRef } from "react";
import Image from "next/image";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { cn } from "@/lib/utils";

function splitContentLines(text: string): string[] {
  return text
    .split("\n")
    .map((line) => line.trim())
    .filter(Boolean);
}

function stripLeadingBulletPrefix(text: string): string {
  return text.replace(/^\s*[•·]\s*/, "").replace(/^\s*[-*]\s+/, "");
}

function HeroAccordionBody({ text }: { text: string }) {
  const lines = splitContentLines(text);
  if (lines.length <= 1) {
    return (
      <p className="font-raleway text-sm leading-relaxed text-gray-500">
        {stripLeadingBulletPrefix(lines[0] ?? text)}
      </p>
    );
  }
  return (
    <ul className="list-none space-y-3 font-raleway text-sm leading-relaxed text-gray-500">
      {lines.map((line, i) => {
        const content = stripLeadingBulletPrefix(line);
        return (
          <li key={i} className="flex w-full items-start gap-3">
            <span
              className="mt-[0.55em] h-2 w-2 shrink-0 rounded-full bg-teal"
              aria-hidden
            />
            <span className="min-w-0 flex-1 text-left">{content}</span>
          </li>
        );
      })}
    </ul>
  );
}

export type ProductHeroAccordionItem = {
  id: string;
  title: string;
  content: string;
  imageSrc?: string;
  imageAlt?: string;
};

export type ProductHeroAccordionProps = {
  sectionHeading: string;
  items: ProductHeroAccordionItem[];
};

export function ProductHeroAccordion({ sectionHeading, items }: ProductHeroAccordionProps) {
  if (items.length === 0) return null;

  const defaultOpen = items[0]?.id ?? "01";
  const scrollYBeforeInteraction = useRef(0);

  /** Prevents jump-to-bottom when height changes under `scroll-behavior: smooth` on `html`. */
  const restoreScrollAfterToggle = useCallback(() => {
    const y = scrollYBeforeInteraction.current;
    requestAnimationFrame(() => {
      requestAnimationFrame(() => {
        window.scrollTo({ top: y, behavior: "auto" });
      });
    });
  }, []);

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

        <div className="w-full overflow-hidden rounded-2xl border border-gray-200/80 bg-white shadow-sm [overflow-anchor:none]">
          <Accordion
            type="single"
            defaultValue={defaultOpen}
            collapsible
            className="w-full [overflow-anchor:none]"
            onValueChange={restoreScrollAfterToggle}
          >
            {items.map((item) => {
              const hasImage = Boolean(item.imageSrc);
              return (
                <AccordionItem className="relative px-0" value={item.id} key={item.id}>
                  <AccordionTrigger className="px-5 py-5 hover:no-underline md:px-6 md:py-6">
                    <span className="font-montserrat text-xl font-black tracking-tight text-charcoal">{item.title}</span>
                  </AccordionTrigger>
                  <AccordionContent>
                    <div
                      className={cn(
                        "grid w-full gap-0 border-t border-gray-200/80",
                        hasImage ? "md:grid-cols-2" : "grid-cols-1"
                      )}
                    >
                      <div className="space-y-4 px-5 py-6 md:px-6 md:py-8">
                        <HeroAccordionBody text={item.content} />
                      </div>
                      {hasImage && item.imageSrc ? (
                        <div className="relative min-h-[220px] w-full border-t border-gray-200/80 md:min-h-[280px] md:border-l md:border-t-0">
                          <Image
                            src={item.imageSrc}
                            alt={item.imageAlt ?? item.title}
                            fill
                            sizes="(max-width: 768px) 100vw, 50vw"
                            quality={92}
                            className="object-cover"
                          />
                        </div>
                      ) : null}
                    </div>
                  </AccordionContent>
                </AccordionItem>
              );
            })}
          </Accordion>
        </div>
      </div>
    </section>
  );
}
