"use client";

import { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

export type AnimatedTabItem = {
  id: string;
  label: string;
  body: string;
  imageSrc?: string;
  imageAlt?: string;
};

export type AnimatedTabsProps = {
  tabs: AnimatedTabItem[];
  defaultTabId?: string;
  className?: string;
  /** Prefix for Framer layout id (unique per page instance) */
  layoutIdPrefix?: string;
};

export function AnimatedTabs({ tabs, defaultTabId, className, layoutIdPrefix = "animated-tabs" }: AnimatedTabsProps) {
  const [activeTab, setActiveTab] = useState(defaultTabId ?? tabs[0]?.id ?? "");
  const pillLayoutId = `${layoutIdPrefix}-pill`;

  if (!tabs.length) return null;

  return (
    <div className={cn("flex w-full flex-col gap-3", className)}>
      <div
        role="tablist"
        aria-label="Benefits"
        className="flex flex-wrap gap-1.5 rounded-xl border border-gray-200 bg-gray-100 p-1.5"
      >
        {tabs.map((tab) => (
          <button
            key={tab.id}
            type="button"
            role="tab"
            aria-selected={activeTab === tab.id}
            onClick={() => setActiveTab(tab.id)}
            className={cn(
              "relative min-h-[2.5rem] flex-1 rounded-lg px-2 py-2 text-center font-raleway text-xs font-semibold leading-snug text-gray-600 transition-colors sm:min-w-0 sm:px-3 sm:text-sm",
              activeTab === tab.id && "text-charcoal"
            )}
          >
            {activeTab === tab.id ? (
              <motion.div
                layoutId={pillLayoutId}
                className="absolute inset-0 rounded-lg bg-white shadow-sm ring-1 ring-gray-200/90"
                transition={{ type: "spring", stiffness: 400, damping: 32 }}
              />
            ) : null}
            <span className="relative z-10 line-clamp-3">{tab.label}</span>
          </button>
        ))}
      </div>

      <div
        role="tabpanel"
        className="min-h-[240px] rounded-xl border border-gray-200 bg-gray-50 p-5 sm:p-6 md:min-h-[280px] md:p-8"
      >
        {tabs.map(
          (tab) =>
            activeTab === tab.id && (
              <motion.div
                key={tab.id}
                initial={{ opacity: 0, scale: 0.98, x: -8, filter: "blur(4px)" }}
                animate={{ opacity: 1, scale: 1, x: 0, filter: "blur(0px)" }}
                transition={{ duration: 0.35, ease: [0.23, 1, 0.32, 1] }}
                className="grid gap-6 md:grid-cols-2 md:items-start md:gap-8"
              >
                <div className="order-2 flex flex-col gap-3 md:order-1">
                  <h3 className="font-montserrat text-xl font-black text-charcoal">{tab.label}</h3>
                  <p className="font-raleway text-sm leading-relaxed text-gray-500">{tab.body}</p>
                </div>
                {tab.imageSrc ? (
                  <div className="relative order-1 aspect-[4/3] w-full overflow-hidden rounded-xl border border-gray-200 bg-white shadow-sm md:order-2">
                    <Image
                      src={tab.imageSrc}
                      alt={tab.imageAlt ?? tab.label}
                      fill
                      className="object-cover"
                      sizes="(max-width: 768px) 100vw, 400px"
                    />
                  </div>
                ) : null}
              </motion.div>
            )
        )}
      </div>
    </div>
  );
}
