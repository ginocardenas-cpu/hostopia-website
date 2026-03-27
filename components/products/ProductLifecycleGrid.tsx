"use client";

import { useState, useCallback } from "react";
import { cn } from "@/lib/utils";
import type { ProductLifecycleStep } from "@/lib/product-json-types";

/**
 * One accent per lifecycle column (brand palette): teal, green, orange, medium gray.
 * Cycles if a product ever defines more than four steps.
 */
const STEP_ACCENTS = ["#2cadb2", "#66bc29", "#ff8400", "#97999b"] as const;

function norm(s: string) {
  return s.trim().toLowerCase().replace(/\s+/g, " ");
}

type Props = {
  steps: ProductLifecycleStep[];
  /** Page product name — used to detect portfolio fit when JSON matches `step.productName` */
  productLabel?: string;
};

export default function ProductLifecycleGrid({ steps, productLabel }: Props) {
  const [expanded, setExpanded] = useState<Record<string, boolean>>(() => {
    const init: Record<string, boolean> = {};
    for (const s of steps) {
      init[s.step] = !!s.highlight;
    }
    return init;
  });

  const toggle = useCallback((stepId: string) => {
    setExpanded((prev) => ({ ...prev, [stepId]: !prev[stepId] }));
  }, []);

  return (
    <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-4 lg:items-stretch lg:gap-5">
      {steps.map((step, i) => {
        const accent = STEP_ACCENTS[i % STEP_ACCENTS.length];
        const isExpanded = expanded[step.step] ?? false;
        const nameMatch =
          !!productLabel &&
          !!step.productName &&
          norm(step.productName) === norm(productLabel);
        const isPortfolioFit = !!step.highlight || nameMatch;
        const showAccentRing = !isPortfolioFit && isExpanded;

        return (
          <button
            key={step.step}
            type="button"
            onClick={() => toggle(step.step)}
            className={cn(
              "group relative flex w-full cursor-pointer flex-col overflow-hidden rounded-2xl border bg-white text-left shadow-sm transition-all duration-300",
              "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-teal focus-visible:ring-offset-2",
              "border-gray-200/90 hover:border-gray-300 hover:shadow-md",
              isPortfolioFit &&
                "z-[1] border-teal/35 shadow-lg shadow-charcoal/10 ring-1 ring-teal/25 lg:scale-[1.04] lg:-translate-y-1",
            )}
            style={
              showAccentRing
                ? { boxShadow: `inset 0 0 0 2px ${accent}99` }
                : undefined
            }
          >
            <div className="flex flex-1 flex-col p-8 pt-9 lg:p-9">
              <span
                className="mb-5 block select-none font-montserrat font-black leading-none"
                style={{
                  fontSize: "clamp(3.25rem, 8vw, 5rem)",
                  color: accent,
                  opacity: isPortfolioFit ? 0.5 : 0.18,
                }}
              >
                {step.step}
              </span>
              <div
                className={cn(
                  "mb-6 h-1 rounded-full transition-all duration-300 ease-out",
                  isExpanded ? "w-16" : "w-10 group-hover:w-16",
                )}
                style={{ backgroundColor: accent }}
              />
              <h3 className="mb-4 font-montserrat text-xl font-black text-charcoal">{step.title}</h3>
              <p className="font-raleway text-sm leading-relaxed text-gray-500">{step.body}</p>
            </div>
            <div
              className="h-1.5 w-full shrink-0"
              style={{ backgroundColor: accent }}
              aria-hidden
            />
          </button>
        );
      })}
    </div>
  );
}
