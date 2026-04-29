"use client";

import type { CSSProperties, ReactNode } from "react";
import Image from "next/image";
import { cn } from "@/lib/utils";

export type TemplateMarqueeImage = {
  src: string;
  alt: string;
};

type MarqueeRowProps = {
  children: ReactNode;
  pauseOnHover?: boolean;
  reverse?: boolean;
  className?: string;
  speed?: number;
};

function MarqueeRow({
  children,
  pauseOnHover = true,
  reverse = false,
  className,
  speed = 35,
}: MarqueeRowProps) {
  return (
    <div
      className={cn("group flex overflow-hidden [--gap:1rem] [gap:var(--gap)]", className)}
      style={{ "--duration": `${speed}s` } as CSSProperties}
    >
      <div
        className={cn(
          "flex min-w-full shrink-0 items-center justify-around gap-[var(--gap)] animate-marquee",
          reverse && "[animation-direction:reverse]",
          pauseOnHover && "group-hover:[animation-play-state:paused]"
        )}
      >
        {children}
      </div>
      <div
        className={cn(
          "flex min-w-full shrink-0 items-center justify-around gap-[var(--gap)] animate-marquee",
          reverse && "[animation-direction:reverse]",
          pauseOnHover && "group-hover:[animation-play-state:paused]"
        )}
        aria-hidden
      >
        {children}
      </div>
    </div>
  );
}

function MarqueeTile({ src, alt }: TemplateMarqueeImage) {
  return (
    <div className="relative h-44 w-64 shrink-0 overflow-hidden rounded-2xl border border-gray-200/80 bg-gray-100 shadow-sm sm:h-48 sm:w-72 md:h-52 md:w-80">
      <Image src={src} alt={alt} fill sizes="320px" quality={92} className="object-contain object-center p-2" />
    </div>
  );
}

export type TemplateMarqueeRowsProps = {
  images: TemplateMarqueeImage[];
  className?: string;
  /** Seconds per loop (each row). */
  speed?: number;
};

/**
 * Two stacked horizontal marquees (opposite directions) for template / screenshot strips.
 * Replaces the previous 3D marquee while reusing the same image list from product JSON.
 */
export function TemplateMarqueeRows({ images, className, speed = 35 }: TemplateMarqueeRowsProps) {
  if (!images.length) return null;

  const mid = Math.ceil(images.length / 2);
  let row1 = images.slice(0, mid);
  let row2 = images.slice(mid);
  if (row2.length === 0) {
    row2 = row1;
  }

  return (
    <div className={cn("space-y-4 py-2", className)}>
      <MarqueeRow speed={speed} reverse className="[--gap:1rem]">
        {row1.map((img, i) => (
          <MarqueeTile key={`r1-${i}-${img.src}`} {...img} />
        ))}
      </MarqueeRow>
      <MarqueeRow speed={speed} className="[--gap:1rem]">
        {row2.map((img, i) => (
          <MarqueeTile key={`r2-${i}-${img.src}`} {...img} />
        ))}
      </MarqueeRow>
    </div>
  );
}
