import bundles from "@/content/customers/goals/bundles.json";
import differentiateCore from "@/content/customers/goals/differentiate-core.json";
import growExistingRevenues from "@/content/customers/goals/grow-existing-revenues.json";
import improveRetention from "@/content/customers/goals/improve-retention.json";
import migrateAndSave from "@/content/customers/goals/migrate-and-save.json";
import newRevenueStreams from "@/content/customers/goals/new-revenue-streams.json";
import type { CustomerStoryContent } from "@/lib/customer-story-types";

const map: Record<string, CustomerStoryContent> = {
  bundles: bundles as CustomerStoryContent,
  "differentiate-core": differentiateCore as CustomerStoryContent,
  "grow-existing-revenues": growExistingRevenues as CustomerStoryContent,
  "improve-retention": improveRetention as CustomerStoryContent,
  "migrate-and-save": migrateAndSave as CustomerStoryContent,
  "new-revenue-streams": newRevenueStreams as CustomerStoryContent,
};

export const customerGoalSlugs = Object.keys(map);

export function getCustomerGoalContent(slug: string): CustomerStoryContent | null {
  return map[slug] ?? null;
}
