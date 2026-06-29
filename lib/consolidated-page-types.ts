export type Stat = { value: string; label: string };

export type ConsolidatedSectionImage = {
  src: string;
  alt: string;
  width?: number;
  height?: number;
};

export type ConsolidatedSection = {
  anchor: string; // element id + URL hash, e.g. "telcos"
  navLabel: string; // header nav label
  eyebrow?: string; // present on Customers; absent on What They Want
  headline: string;
  body: string; // paragraph copy
  image?: ConsolidatedSectionImage;
  stats?: Stat[]; // proof-point cards
  sources?: string[]; // small italic "Sources:" line; may be empty/absent
  note?: string; // editorial callout (AI section uses this)
};

export type ConsolidatedPage = {
  slug: string;
  label: string;
  pageName: string;
  seo: {
    primaryKeyword: string;
    secondaryKeywords: string[];
    metaTitle: string;
    metaDescription: string;
    urlSlug: string; // "/customers" or "/customers/goals"
  };
  hero: {
    eyebrow: string;
    headline: string;
    subheadline: string;
    cta: { primary: string; secondary: string };
  };
  sections: ConsolidatedSection[];
  cta: { headline: string; body: string; buttonText: string };
};
