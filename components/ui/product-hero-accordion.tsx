"use client";

import Image from "next/image";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { cn } from "@/lib/utils";

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

  return (
    <section className="w-full bg-white py-12 md:py-16 lg:py-24">
      <div className="mx-auto w-full max-w-7xl px-6">
        <h2 className="mb-8 font-montserrat text-3xl font-black tracking-tight text-charcoal text-balance md:mb-10 md:text-4xl lg:text-5xl">
          {sectionHeading}
        </h2>

        <div className="w-full overflow-hidden rounded-2xl border border-gray-200/80 bg-white shadow-sm">
          <Accordion type="single" defaultValue={defaultOpen} collapsible className="w-full">
            {items.map((item) => {
              const hasImage = Boolean(item.imageSrc);
              return (
                <AccordionItem className="relative px-0" value={item.id} key={item.id}>
                  <AccordionTrigger className="px-5 py-5 hover:no-underline md:px-6 md:py-6">
                    <span className="font-montserrat text-2xl font-bold tracking-tight text-charcoal md:text-3xl lg:text-4xl">
                      {item.title}
                    </span>
                  </AccordionTrigger>
                  <AccordionContent>
                    <div
                      className={cn(
                        "grid w-full gap-0 border-t border-gray-200/80",
                        hasImage ? "md:grid-cols-2" : "grid-cols-1"
                      )}
                    >
                      <div className="space-y-4 px-5 py-6 md:px-6 md:py-8">
                        <p className="font-raleway text-2xl font-normal leading-relaxed tracking-tight text-gray-500 md:text-3xl lg:text-4xl">
                          {item.content}
                        </p>
                      </div>
                      {hasImage && item.imageSrc ? (
                        <div className="relative min-h-[220px] w-full border-t border-gray-200/80 md:min-h-[280px] md:border-l md:border-t-0">
                          <Image
                            src={item.imageSrc}
                            alt={item.imageAlt ?? item.title}
                            fill
                            sizes="(max-width: 768px) 100vw, 50vw"
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
