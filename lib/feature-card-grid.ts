import { cn } from "@/lib/utils";

/**
 * Uniform feature cards: every card is a grid cell with the same width (1fr per column).
 * 2×2 for four cards; four columns for seven–eight; three columns otherwise at lg.
 */
export function featureCardGridClass(cardCount: number, className?: string): string {
  const lgCols =
    cardCount === 4 ? "lg:grid-cols-2" : cardCount === 7 || cardCount === 8 ? "lg:grid-cols-4" : "lg:grid-cols-3";
  return cn("grid gap-8 grid-cols-1 sm:grid-cols-2", lgCols, className);
}
