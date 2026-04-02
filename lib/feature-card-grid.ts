import { cn } from "@/lib/utils";

/**
 * Feature cards: same rhythm as Email Marketing legacy page — md 2 cols, lg 3 cols, gap-4.
 * (Previously 4-card pages used lg:grid-cols-2, which made boxes overly wide.)
 */
export function featureCardGridClass(_cardCount: number, className?: string): string {
  return cn("grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3", className);
}
