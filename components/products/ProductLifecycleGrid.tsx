"use client";

import { useState, useCallback } from "react";
import { cn } from "@/lib/utils";
import type { ProductLifecycleStep } from "@/lib/product-json-types";

/** Match homepage Pillars: teal / gold alternation */
const ACCENT = ["#2cadb2", "#f8cf41"] as const;

type Props = {
  steps: ProductLifecycleStep[];
};

export default function ProductLifecycleGrid({ steps }: Props) {
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
        const showRing = isExpanded || !!step.highlight;

        return (
          <button
            key={step.step}
            type="button"
            onClick={() => toggle(step.step)}
            className={`group relative w-full cursor-pointer overflow-hidden bg-white p-10 text-left transition-colors duration-300 hover:bg-gray-50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-teal focus-visible:ring-offset-2 ${
              showRing ? "ring-2 ring-inset ring-teal/40" : ""
            }`}
          >
            <span
              className="mb-6 block select-none font-montserrat font-black leading-none"
              style={{
                fontSize: "5rem",
                color: accent,
                opacity: 0.12,
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
            <h3 className="mb-4 font-montserrat text-2xl font-black text-charcoal">{step.title}</h3>
            <p className="font-raleway text-sm leading-relaxed text-gray-500">{step.body}</p>
          </button>
        );
      })}
    </div>
  );
}
