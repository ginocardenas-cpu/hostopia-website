import cablecos from "@/content/customers/types/cablecos.json";
import isps from "@/content/customers/types/isps.json";
import mobileCarriers from "@/content/customers/types/mobile-carriers.json";
import msps from "@/content/customers/types/msps.json";
import registrars from "@/content/customers/types/registrars.json";
import resellers from "@/content/customers/types/resellers.json";
import telcos from "@/content/customers/types/telcos.json";
import type { CustomerStoryContent } from "@/lib/customer-story-types";

const map: Record<string, CustomerStoryContent> = {
  telcos: telcos as CustomerStoryContent,
  isps: isps as CustomerStoryContent,
  resellers: resellers as CustomerStoryContent,
  msps: msps as CustomerStoryContent,
  "mobile-carriers": mobileCarriers as CustomerStoryContent,
  registrars: registrars as CustomerStoryContent,
  cablecos: cablecos as CustomerStoryContent,
};

export const customerTypeSlugs = Object.keys(map);

export function getCustomerTypeContent(slug: string): CustomerStoryContent | null {
  return map[slug] ?? null;
}
