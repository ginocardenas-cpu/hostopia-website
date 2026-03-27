"use client";

import { Fragment, useState, useCallback } from "react";
import { ChevronDown, ChevronRight, Star } from "lucide-react";
import { cn } from "@/lib/utils";
import type { ProductLifecycleStep } from "@/lib/product-json-types";

/**
 * One accent per lifecycle column (fixed order). Full HEX/RGB + shading spec:
 * `website design/hostopia-homepage-design-system.md` → “Lifecycle grid — color & shading specification”.
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
    <div
      className="flex flex-col lg:flex-row lg:items-stretch"
      role="list"
      aria-label="Business lifecycle steps"
    >
      {steps.map((step, i) => {
        const accent = STEP_ACCENTS[i % STEP_ACCENTS.length];
        const isExpanded = expanded[step.step] ?? false;
        const nameMatch =
          !!productLabel &&
          !!step.productName &&
          norm(step.productName) === norm(productLabel);
        const isPortfolioFit = !!step.highlight || nameMatch;
        const showAccentRing = !isPortfolioFit && isExpanded;
        const isLast = i === steps.length - 1;

        return (
          <Fragment key={step.step}>
            <div
              className={cn(
                "relative flex min-w-0 flex-1 flex-col",
                isPortfolioFit && "z-[2]",
              )}
              role="listitem"
            >
              <button
                type="button"
                onClick={() => toggle(step.step)}
                className={cn(
                  "group relative flex w-full cursor-pointer flex-col overflow-visible rounded-2xl border bg-white text-left shadow-sm transition-all duration-300",
                  "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-teal focus-visible:ring-offset-2",
                  "border-gray-200/90 hover:border-gray-300 hover:shadow-md",
                  isPortfolioFit &&
                    "border-teal/35 shadow-lg shadow-charcoal/10 ring-1 ring-teal/25 lg:scale-[1.04] lg:-translate-y-1",
                )}
                style={
                  showAccentRing
                    ? { boxShadow: `inset 0 0 0 2px ${accent}99` }
                    : undefined
                }
                aria-pressed={isExpanded}
                aria-label={
                  isPortfolioFit
                    ? `Portfolio fit — ${step.title}. ${step.body}`
                    : `${step.title}. ${step.body}`
                }
              >
                {isPortfolioFit ? (
                  <div
                    className="pointer-events-none absolute -top-3 left-1/2 z-20 flex -translate-x-1/2 flex-col items-center gap-0.5 rounded-lg bg-charcoal px-3.5 py-2 shadow-md sm:px-4"
                    aria-hidden
                  >
                    <Star className="h-3.5 w-3.5 fill-gold text-gold sm:h-4 sm:w-4" />
                    <span className="font-raleway text-[10px] font-semibold text-white sm:text-xs">
                      Portfolio Fit
                    </span>
                  </div>
                ) : null}

                <div
                  className={cn(
                    "flex flex-1 flex-col border-l-4 border-transparent p-8 lg:p-9",
                    isPortfolioFit && "border-l-teal/80 bg-cream/80 pt-11",
                    !isPortfolioFit && "pt-9",
                  )}
                >
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
            </div>

            {!isLast ? (
              <div
                className="flex shrink-0 items-center justify-center py-3 text-teal/45 lg:w-10 lg:flex-col lg:py-0 lg:pt-6"
                aria-hidden
              >
                <ChevronDown className="h-7 w-7 lg:hidden" strokeWidth={2} />
                <ChevronRight className="hidden h-7 w-7 lg:block" strokeWidth={2} />
              </div>
            ) : null}
          </Fragment>
        );
      })}
    </div>
  );
}
