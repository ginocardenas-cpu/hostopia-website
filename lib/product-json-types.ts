/** Shape of `content/products/*.json` — optional blocks for flexible authoring */

export type ProductSeo = {
  primaryKeyword: string;
  secondaryKeywords: string[];
  metaTitle: string;
  metaDescription: string;
  urlSlug: string;
};

export type ProductHeroCta = {
  primary: string;
  secondary: string;
};

export type ProductSidebarItem = {
  title: string;
  body: string;
};

export type ProductHero = {
  eyebrow: string;
  headline: string;
  subheadline?: string;
  stat?: string;
  description?: string;
  badge?: string;
  cta: ProductHeroCta;
  sidebar?: {
    heading: string;
    items: ProductSidebarItem[];
  };
};

export type ProductFeatureCard = {
  icon: string;
  title: string;
  body: string;
};

export type ProductFeatures = {
  eyebrow: string;
  heading: string;
  intro: string;
  cards: ProductFeatureCard[];
};

export type ProductAdvantageItem = {
  title: string;
  body: string;
};

export type ProductPartnerAdvantage = {
  eyebrow: string;
  heading: string;
  intro: string;
  items: ProductAdvantageItem[];
};

export type ProductLifecycleStep = {
  step: string;
  title: string;
  body: string;
  highlight?: boolean;
  productName?: string;
};

export type ProductLifecycleFit = {
  eyebrow: string;
  heading: string;
  intro: string;
  steps: ProductLifecycleStep[];
  positioning: string;
};

export type ProductFinalCta = {
  headline: string;
  body: string;
  buttonText: string;
};

export type ProductMediaImage = {
  src: string;
  alt: string;
  /** Wide hero / banner — defaults to true for LCP */
  priority?: boolean;
};

export type ProductMedia = {
  /** Large visual in hero (local `/...` or remote URL allowed in next.config) */
  heroImage?: ProductMediaImage;
  /** Full-width image between features and partner section */
  contentImage?: ProductMediaImage & { caption?: string };
};

export type ProductJson = {
  slug: string;
  label: string;
  productName: string;
  seo: ProductSeo;
  hero: ProductHero;
  features?: ProductFeatures;
  partnerAdvantage?: ProductPartnerAdvantage;
  lifecycleFit?: ProductLifecycleFit;
  cta?: ProductFinalCta;
  media?: ProductMedia;
};
