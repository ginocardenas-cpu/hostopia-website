import { cn } from "@/lib/utils";

/** Column count at `lg` for feature cards (matches historical grid rules). */
export function featureGridColumnCount(cardCount: number): number {
  if (cardCount === 4) return 2;
  if (cardCount === 7 || cardCount === 8) return 4;
  return 3;
}

export function splitFeatureCards<T>(items: T[], columnCount: number): { main: T[]; tail: T[] } {
  if (items.length === 0) return { main: [], tail: [] };
  const r = items.length % columnCount;
  if (r === 0) return { main: items, tail: [] };
  return { main: items.slice(0, items.length - r), tail: items.slice(items.length - r) };
}

/** One grid for all breakpoints — avoids `hidden` + `lg:grid` cascade bugs in Tailwind. */
export function featureFeaturesGridClass(cardCount: number, className?: string): string {
  const lgCols =
    cardCount === 4 ? "lg:grid-cols-2" : cardCount === 7 || cardCount === 8 ? "lg:grid-cols-4" : "lg:grid-cols-3";
  return cn("grid gap-8 grid-cols-1 sm:grid-cols-2", lgCols, className);
}

/** Widths for cards in the centered tail row (match grid column width at sm and lg). */
export function featureTailItemClass(cardCount: number, className?: string): string {
  const smHalf = "min-w-0 w-full sm:w-[calc((100%-2rem)/2)]";
  if (cardCount === 4) return cn(smHalf, "lg:w-[calc((100%-2rem)/2)]", className);
  if (cardCount === 7 || cardCount === 8) {
    return cn(smHalf, "lg:w-[calc((100%-6rem)/4)]", className);
  }
  return cn(smHalf, "lg:w-[calc((100%-4rem)/3)]", className);
}
