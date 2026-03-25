/** Loose shape for customer type / goal JSON — optional sections vary by page */

export type CustomerSeo = {
  primaryKeyword: string;
  secondaryKeywords: string[];
  metaTitle: string;
  metaDescription: string;
  urlSlug: string;
};

export type CustomerHero = {
  eyebrow?: string;
  headline: string;
  subheadline: string;
  description: string;
  cta: { primary: string; secondary: string };
};

export type CustomerChallenge = {
  heading: string;
  content: string;
  callout?: string;
  sources?: string[];
};

export type SolutionBlock = {
  heading: string;
  content?: string;
  bundles?: Array<{ name: string; products: string; description: string }>;
  scenarios?: Array<{
    provider: string;
    details: string;
    projections: Record<string, string>;
  }>;
  segments?: Array<Record<string, string>>;
  examples?: Array<{ provider: string; positioning: string }>;
  productLadder?: Array<{ from: string; to: string; reason: string }>;
};

export type CustomerSolution = {
  heading: string;
  intro: string;
  blocks: SolutionBlock[];
};

export type StatItem = { value: string; label: string };

export type CustomerCta = {
  headline: string;
  body: string;
  buttonText: string;
};

export type CustomerStoryContent = {
  slug: string;
  label: string;
  category?: string;
  seo: CustomerSeo;
  hero: CustomerHero;
  challenge?: CustomerChallenge;
  solution?: CustomerSolution;
  outcomes?: { heading: string; cards: Array<{ title: string; body: string }> };
  migrationScenarios?: { heading: string; cards: Array<{ title: string; body: string }> };
  retentionByProvider?: { heading: string; cards: Array<Record<string, string>> };
  bundleFrameworks?: {
    heading: string;
    frameworks: Array<{ providerType: string; tiers: Array<Record<string, string | number>> }>;
  };
  whyBundlesWork?: {
    heading: string;
    perspectives: Array<{ for: string; benefit: string }>;
  };
  whyNow?: { heading: string; content: string };
  faq?: Array<{ q: string; a: string }>;
  stats: StatItem[];
  cta: CustomerCta;
};
