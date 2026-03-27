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

export type ProductMediaImage = {
  src: string;
  alt: string;
  /** Wide hero / banner — defaults to true for LCP */
  priority?: boolean;
};

export type ProductBeforeAfter = {
  before: ProductMediaImage;
  after: ProductMediaImage;
  eyebrow?: string;
  heading?: string;
  intro?: string;
};

export type ProductTemplateMarqueeImage = {
  src: string;
  alt: string;
};

export type ProductTemplateMarquee = {
  eyebrow?: string;
  heading?: string;
  intro?: string;
  images: ProductTemplateMarqueeImage[];
};

/** Customer logo gallery — same image shape as template marquee; rendered as a grid (e.g. logo-design). */
export type ProductLogoShowcase = {
  eyebrow?: string;
  heading?: string;
  intro?: string;
  images: ProductTemplateMarqueeImage[];
};

export type ProductMedia = {
  /** Large visual in hero (local `/...` or remote URL allowed in next.config) */
  heroImage?: ProductMediaImage;
  /** Full-width image between features and partner section */
  contentImage?: ProductMediaImage & { caption?: string };
  /** Optional before/after comparison (e.g. website-design) — rendered after features */
  beforeAfter?: ProductBeforeAfter;
  /** Optional 3D template marquee (e.g. website-builder) — rendered after features */
  templateMarquee?: ProductTemplateMarquee;
  /** Optional customer logo grid (e.g. logo-design) — after features, before partner section */
  logoShowcase?: ProductLogoShowcase;
};

export type ProductSidebarItem = {
  title: string;
  body: string;
  /** Optional tab gallery image (e.g. logo product vertical tabs) */
  image?: ProductMediaImage;
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
