export type ProductJourney =
  | "Build a Brand"
  | "Get Online"
  | "Get Found"
  | "Grow their Business";

export type ProductCategory =
  | "Domains"
  | "SSL"
  | "Website"
  | "Logo"
  | "Email"
  | "Ecommerce"
  | "Online Fax"
  | "Directory Listings"
  | "Reputation Management";

export type ContentType =
  | "Video"
  | "Presentation"
  | "Document"
  | "Case Study"
  | "Playbook"
  | "Training"
  | "Tool";

export type UseCase = "Sales" | "Marketing" | "Training & Onboarding" | "Support";

export interface Asset {
  id: string;
  slug: string;
  title: string;
  journey: ProductJourney;
  productCategory: ProductCategory;
  contentType: ContentType;
  useCases: UseCase[];
  summaryWhat: string;
  summaryWhy: string;
  summaryHow: string;
  language: "English" | "French" | "Spanish" | "Portuguese";
  region: "Global" | "North America" | "EMEA" | "APAC";
  gated: boolean; // Download Gate Status: true = gated, false = free/direct
  internalOnly: boolean;
  fileUrl: string;
  lastUpdated: string; // ISO date
}

// Initial sample catalog to drive UI prototypes.
export const sampleAssets: Asset[] = [
  {
    id: "logo-build-a-brand-overview-deck",
    slug: "logo-build-a-brand-overview-deck",
    title: "Logo Design: Build a Brand Overview Deck",
    journey: "Build a Brand",
    productCategory: "Logo",
    contentType: "Presentation",
    useCases: ["Sales", "Training & Onboarding"],
    summaryWhat: "A sales-ready overview deck for Hostopia logo design services.",
    summaryWhy:
      "Helps reps position logo design as the first step in building a credible small business brand.",
    summaryHow:
      "Use on discovery and first-presentations calls with SMB prospects focused on brand and identity.",
    language: "English",
    region: "Global",
    gated: true,
    internalOnly: false,
    fileUrl: "/assets/logo-build-a-brand-overview-deck.pdf",
    lastUpdated: "2026-03-03"
  },
  {
    id: "hosting-get-online-technical-one-pager",
    slug: "hosting-get-online-technical-one-pager",
    title: "Hosting: Get Online Technical One-Pager",
    journey: "Get Online",
    productCategory: "Website",
    contentType: "Document",
    useCases: ["Sales", "Support"],
    summaryWhat: "A one-page technical overview of Hostopia hosting and uptime guarantees.",
    summaryWhy:
      "Gives sales and support a concise reference for key platform differentiators in hosting conversations.",
    summaryHow:
      "Attach to proposals or use as a leave-behind for technically-minded SMB buyers and IT advisors.",
    language: "English",
    region: "North America",
    gated: true,
    internalOnly: false,
    fileUrl: "/assets/hosting-get-online-technical-one-pager.pdf",
    lastUpdated: "2026-03-01"
  },
  {
    id: "reputation-get-found-playbook",
    slug: "reputation-get-found-playbook",
    title: "Reputation Management: Get Found Sales Playbook",
    journey: "Get Found",
    productCategory: "Reputation Management",
    contentType: "Playbook",
    useCases: ["Sales", "Marketing"],
    summaryWhat: "Step-by-step sales playbook for selling reputation management to small businesses.",
    summaryWhy:
      "Aligns messaging, discovery questions, and objection handling around reviews and local search.",
    summaryHow:
      "Use for onboarding new reps and as a reference in deal strategy sessions with frontline teams.",
    language: "English",
    region: "Global",
    gated: true,
    internalOnly: false,
    fileUrl: "/assets/reputation-get-found-playbook.pdf",
    lastUpdated: "2026-02-20"
  },
  {
    id: "ecommerce-grow-business-demo-video",
    slug: "ecommerce-grow-business-demo-video",
    title: "Ecommerce: Grow their Business Demo Video",
    journey: "Grow their Business",
    productCategory: "Ecommerce",
    contentType: "Video",
    useCases: ["Sales", "Training & Onboarding"],
    summaryWhat: "A short ecommerce product demo focused on upsell and cross-sell scenarios.",
    summaryWhy:
      "Shows how partners can deepen relationships and unlock new ARPU with ecommerce add-ons.",
    summaryHow:
      "Use in training sessions and as pre-call viewing for reps before pitching ecommerce solutions.",
    language: "English",
    region: "Global",
    gated: true,
    internalOnly: false,
    fileUrl: "/assets/ecommerce-grow-business-demo-video.mp4",
    lastUpdated: "2026-02-15"
  }
];

export function getAssetBySlug(slug: string): Asset | undefined {
  return sampleAssets.find((asset) => asset.slug === slug);
}

export function getAssetsByJourney(journey: ProductJourney): Asset[] {
  return sampleAssets.filter((asset) => asset.journey === journey);
}

export function getAssetsByContentType(type: ContentType): Asset[] {
  return sampleAssets.filter((asset) => asset.contentType === type);
}

export function getAssetsByUseCase(useCase: UseCase): Asset[] {
  return sampleAssets.filter((asset) => asset.useCases.includes(useCase));
}

