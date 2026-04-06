import { cn } from "@/lib/utils";

/**
 * Feature cards: md 2 cols; lg 3 cols by default. Exactly four cards use lg 4 cols so nothing
 * wraps to a lone second row with empty space on the right.
 */
export function featureCardGridClass(cardCount: number, className?: string): string {
  const lg = cardCount === 4 ? "lg:grid-cols-4" : "lg:grid-cols-3";
  return cn("grid grid-cols-1 gap-4 md:grid-cols-2", lg, className);
}

/** Dark partner-advantage block: same 4-up treatment when there are exactly four items. */
export function partnerAdvantageGridClass(itemCount: number, className?: string): string {
  if (itemCount === 4) {
    return cn("grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-4", className);
  }
  return cn("grid gap-10 md:grid-cols-3", className);
}
