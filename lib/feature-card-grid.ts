import { cn } from "@/lib/utils";

/**
 * Flex wrap + justify-center so incomplete last rows center (e.g. 5 cards → 3 + 2).
 * Column widths mirror the old grid: 2×2 for four; four columns for seven–eight; three otherwise at lg.
 */
export function featureCardGridClass(_cardCount: number, className?: string): string {
  return cn("flex flex-wrap justify-center gap-8", className);
}

/** Per-card width so row breaks match the column counts above; pairs with featureCardGridClass. */
export function featureCardItemClass(cardCount: number, className?: string): string {
  const min = "min-w-0 max-w-full";
  if (cardCount === 4) {
    return cn(min, "w-full sm:w-[calc((100%-2rem)/2)]", className);
  }
  if (cardCount === 7 || cardCount === 8) {
    return cn(
      min,
      "w-full sm:w-[calc((100%-2rem)/2)] lg:w-[calc((100%-6rem)/4)]",
      className
    );
  }
  return cn(
    min,
    "w-full sm:w-[calc((100%-2rem)/2)] lg:w-[calc((100%-4rem)/3)]",
    className
  );
}
