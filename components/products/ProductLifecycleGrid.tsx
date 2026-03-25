"use client";

import { useState, useCallback } from "react";
import { Star } from "lucide-react";
import { cn } from "@/lib/utils";
import type { ProductLifecycleStep } from "@/lib/product-json-types";

/** Match homepage Pillars: teal / gold alternation */
const ACCENT = ["#2cadb2", "#f8cf41"] as const;

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
    <div className="grid gap-px overflow-hidden rounded-3xl bg-gray-100 md:grid-cols-2 lg:grid-cols-4">
      {steps.map((step, i) => {
        const accent = ACCENT[i % 2];
        const isExpanded = expanded[step.step] ?? false;
        const nameMatch =
          !!productLabel &&
          !!step.productName &&
          norm(step.productName) === norm(productLabel);
        const isPortfolioFit = !!step.highlight || nameMatch;
        const showTealRing = !isPortfolioFit && isExpanded;

        return (
          <button
            key={step.step}
            type="button"
            onClick={() => toggle(step.step)}
            className={cn(
              "group relative w-full cursor-pointer overflow-hidden p-10 text-left transition-colors duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-teal focus-visible:ring-offset-2",
              isPortfolioFit
                ? "z-[1] border-2 border-gold bg-gradient-to-b from-gold/40 via-amber-50/90 to-white shadow-md hover:from-gold/45 hover:to-amber-50"
                : "bg-white hover:bg-gray-50",
              showTealRing && "ring-2 ring-inset ring-teal/50",
            )}
          >
            {isPortfolioFit ? (
              <div
                className="mb-5 flex flex-col items-center gap-2 rounded-xl bg-charcoal px-4 py-3 text-center shadow-sm"
                aria-label="Portfolio fit"
              >
                <Star className="h-5 w-5 fill-gold text-gold" aria-hidden />
                <span className="font-raleway text-sm font-semibold text-white">Portfolio Fit</span>
              </div>
            ) : null}

            <span
              className="mb-6 block select-none font-montserrat font-black leading-none"
              style={{
                fontSize: "5rem",
                color: accent,
                opacity: isPortfolioFit ? 0.42 : 0.12,
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
          </button>
        );
      })}
    </div>
  );
}
