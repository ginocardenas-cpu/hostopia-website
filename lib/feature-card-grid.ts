import { cn } from "@/lib/utils";

/**
 * Avoids a single orphan card on the last row (e.g. 4+1 on lg:grid-cols-4).
 * Uses 2×2 for four cards; 4×2 for eight; 4+3 for seven; three columns otherwise.
 */
export function featureCardGridClass(cardCount: number, className?: string): string {
  const base = "grid gap-8 grid-cols-1 sm:grid-cols-2";
  let lg = `${base} lg:grid-cols-3`;
  if (cardCount === 4) {
    lg = `${base} lg:grid-cols-2`;
  } else if (cardCount === 7 || cardCount === 8) {
    lg = `${base} lg:grid-cols-4`;
  }
  return cn(lg, className);
}
