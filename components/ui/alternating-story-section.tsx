import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import ProductLucideIcon from "@/components/products/ProductLucideIcon";
import { cn } from "@/lib/utils";
import type { ProductStoryAlternatingBlock } from "@/lib/product-json-types";

type Props = {
  heading: string;
  blocks: ProductStoryAlternatingBlock[];
  primaryCtaLabel: string;
};

/**
 * Alternating copy + image rows (Z-pattern). Domains experiment — matches site typography
 * (Montserrat / Raleway, charcoal / gray-500, teal accents).
 */
export function AlternatingStorySection({ heading, blocks, primaryCtaLabel }: Props) {
  if (blocks.length === 0) return null;

  return (
    <section className="w-full bg-white py-12 md:py-16 lg:py-24">
      <div className="mx-auto max-w-7xl px-6">
        <h2 className="mb-12 max-w-4xl font-montserrat text-4xl font-black leading-tight tracking-tight text-charcoal text-balance md:mb-16 md:text-5xl lg:text-6xl">
          {heading}
        </h2>

        <div className="flex flex-col gap-16 md:gap-20 lg:gap-28">
          {blocks.map((block, i) => {
            const textOnLeft = i % 2 === 0;
            const iconGold = i % 2 === 1;

            return (
              <div
                key={block.title}
                className="grid items-center gap-10 lg:grid-cols-2 lg:gap-14 lg:gap-x-16"
              >
                <div className={cn("w-full max-w-xl lg:max-w-none", textOnLeft ? "lg:order-1" : "lg:order-2")}>
                  <div
                    className={cn(
                      "mb-5 flex h-12 w-12 items-center justify-center rounded-xl",
                      iconGold ? "bg-gold/20" : "bg-teal/10",
                    )}
                  >
                    <ProductLucideIcon
                      name={block.icon}
                      className={cn("h-6 w-6", iconGold ? "text-charcoal" : "text-teal")}
                      size={24}
                    />
                  </div>
                  <h3 className="font-montserrat text-2xl font-black tracking-tight text-charcoal md:text-3xl lg:text-[2rem] lg:leading-snug">
                    {block.title}
                  </h3>
                  <ul className="mt-5 space-y-3.5 font-raleway text-base leading-relaxed text-gray-500 md:text-lg">
                    {block.bullets.map((line) => (
                      <li key={line} className="flex gap-3">
                        <span className="mt-2.5 h-1.5 w-1.5 shrink-0 rounded-full bg-teal" aria-hidden />
                        <span>{line}</span>
                      </li>
                    ))}
                  </ul>
                  {i === 0 ? (
                    <Link
                      href="/contact"
                      className="mt-8 inline-flex items-center gap-2 rounded-full bg-teal px-7 py-3.5 font-raleway text-sm font-semibold uppercase tracking-wide text-white transition-colors hover:bg-teal/90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-teal focus-visible:ring-offset-2"
                    >
                      {primaryCtaLabel}
                      <ArrowRight className="h-4 w-4 shrink-0" aria-hidden />
                    </Link>
                  ) : null}
                </div>

                <div
                  className={cn(
                    "relative mx-auto w-full max-w-[min(100%,560px)] lg:mx-0 lg:max-w-none",
                    textOnLeft ? "lg:order-2" : "lg:order-1",
                  )}
                >
                  <div className="relative aspect-[4/3] w-full overflow-hidden rounded-2xl border border-gray-200/80 bg-gray-100/50 shadow-sm">
                    <Image
                      src={block.image.src}
                      alt={block.image.alt}
                      fill
                      className="object-cover"
                      sizes="(max-width: 1024px) 100vw, 50vw"
                      quality={92}
                      priority={i === 0}
                    />
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
