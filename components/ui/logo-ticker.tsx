"use client";

import Link from "next/link";
import { ChevronRight } from "lucide-react";
import { cn } from "@/lib/utils";

export type LogoTickerItem = {
  src: string;
  alt: string;
  height: number;
};

type LogoTickerProps = {
  logos: LogoTickerItem[];
  /** Full loop duration in seconds (slow, readable motion). */
  durationSec?: number;
  ctaHref?: string;
  ctaLabel?: string;
  /** When false, hides the link under the ticker (e.g. logo showcase with no customers CTA). */
  showCta?: boolean;
  className?: string;
};

function LogoCells({ logos, keyPrefix }: { logos: LogoTickerItem[]; keyPrefix: string }) {
  return (
    <>
      {logos.map((logo, i) => (
        <div
          key={`${keyPrefix}-${logo.src}-${i}`}
          className="flex shrink-0 items-center justify-center px-10 sm:px-14 md:px-16"
        >
          {/* eslint-disable-next-line @next/next/no-img-element -- SVG/PNG from JSON */}
          <img
            className="h-auto w-auto max-w-[min(100%,min(95vw,30rem))] object-contain opacity-90 transition-opacity duration-300 hover:opacity-100"
            src={logo.src}
            alt={logo.alt}
            loading="lazy"
            style={{ maxHeight: logo.height }}
          />
        </div>
      ))}
    </>
  );
}

/**
 * Infinite horizontal logo strip: duplicated track, translate -50%, pause on hover.
 * `prefers-reduced-motion`: static wrapped row, no duplicate strip.
 */
export function LogoTicker({
  logos,
  durationSec = 50,
  ctaHref = "/customers/telcos",
  ctaLabel = "Meet our customers",
  showCta = true,
  className,
}: LogoTickerProps) {
  const safeDuration = Math.min(120, Math.max(25, durationSec));
  const maxLogoPx = logos.length ? Math.max(...logos.map((l) => l.height)) : 0;

  return (
    <div className={cn("w-full", className)}>
      {/* Reduced motion: single static row */}
      <div
        className="hidden flex-wrap justify-center gap-x-6 gap-y-10 py-4 motion-reduce:flex"
        style={maxLogoPx > 0 ? { minHeight: maxLogoPx } : undefined}
      >
        <LogoCells logos={logos} keyPrefix="static" />
      </div>

      <div className="motion-reduce:hidden">
        <div
          className="relative overflow-hidden py-6 md:py-8"
          style={maxLogoPx > 0 ? { minHeight: maxLogoPx } : undefined}
        >
          <div
            className="pointer-events-none absolute inset-y-0 left-0 z-10 w-12 bg-gradient-to-r from-white to-transparent sm:w-20"
            aria-hidden
          />
          <div
            className="pointer-events-none absolute inset-y-0 right-0 z-10 w-12 bg-gradient-to-l from-white to-transparent sm:w-20"
            aria-hidden
          />
          <div
            className="flex w-max animate-logo-ticker hover:[animation-play-state:paused]"
            style={{ animationDuration: `${safeDuration}s` }}
          >
            <div className="flex shrink-0">
              <LogoCells logos={logos} keyPrefix="a" />
            </div>
            <div className="flex shrink-0" aria-hidden>
              <LogoCells logos={logos} keyPrefix="b" />
            </div>
          </div>
        </div>
      </div>

      {showCta ? (
        <div className="mt-8 flex justify-center">
          <Link
            href={ctaHref}
            className="inline-flex items-center font-raleway text-sm text-charcoal transition-colors duration-150 hover:text-teal"
          >
            <span>{ctaLabel}</span>
            <ChevronRight className="ml-1 size-3.5 shrink-0" aria-hidden />
          </Link>
        </div>
      ) : null}
    </div>
  );
}
