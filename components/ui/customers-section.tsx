"use client";

import Link from "next/link";
import { ChevronRight } from "lucide-react";
import type { Variants } from "framer-motion";
import { AnimatedGroup } from "@/components/ui/animated-group";
import { cn } from "@/lib/utils";

const transitionVariants: { container: Variants; item: Variants } = {
  container: {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.05,
        delayChildren: 0.75,
      },
    },
  },
  item: {
    hidden: {
      opacity: 0,
      filter: "blur(12px)",
      y: 12,
    },
    visible: {
      opacity: 1,
      filter: "blur(0px)",
      y: 0,
      transition: {
        type: "spring",
        bounce: 0.3,
        duration: 1.5,
      },
    },
  },
};

export interface CustomerLogo {
  src: string;
  alt: string;
  height: number;
}

export interface CustomersSectionProps {
  customers: CustomerLogo[];
  className?: string;
  /** When true, omit outer section shell (use inside a parent section). */
  embedded?: boolean;
  ctaHref?: string;
  ctaLabel?: string;
}

export function CustomersSection({
  customers = [],
  className,
  embedded = false,
  ctaHref = "/customers/telcos",
  ctaLabel = "Meet our customers",
}: CustomersSectionProps) {
  const inner = (
    <div className="group relative m-auto max-w-5xl px-6">
      <div className="absolute inset-0 z-10 flex scale-95 items-center justify-center opacity-0 duration-500 group-hover:scale-100 group-hover:opacity-100">
        <Link href={ctaHref} className="font-raleway text-sm text-charcoal duration-150 hover:text-teal hover:opacity-90">
          <span>{ctaLabel}</span>
          <ChevronRight className="ml-1 inline-block size-3" aria-hidden />
        </Link>
      </div>
      <AnimatedGroup
        variants={{
          container: transitionVariants.container,
          item: transitionVariants.item,
        }}
        className="mx-auto mt-0 grid w-full max-w-4xl grid-cols-4 gap-x-8 gap-y-8 transition-all duration-500 group-hover:opacity-50 group-hover:blur-sm sm:gap-x-12 sm:gap-y-10 lg:max-w-5xl lg:gap-x-16 lg:gap-y-14"
      >
        {customers.map((logo, index) => (
          <div key={`${logo.src}-${index}`} className="flex min-h-[2rem] items-center justify-center sm:min-h-[2.5rem]">
            {/* eslint-disable-next-line @next/next/no-img-element -- external partner logos; URLs from JSON */}
            <img
              className="mx-auto w-auto max-w-[min(100%,7rem)] object-contain"
              src={logo.src}
              alt={logo.alt}
              loading="lazy"
              style={{ maxHeight: logo.height }}
            />
          </div>
        ))}
      </AnimatedGroup>
    </div>
  );

  if (embedded) {
    return <div className={cn(className)}>{inner}</div>;
  }

  return (
    <section className={cn("bg-white pb-16 pt-16 md:pb-32", className)}>{inner}</section>
  );
}
