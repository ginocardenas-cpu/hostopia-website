import type { ReactNode } from "react";
import Image from "next/image";
import Link from "next/link";
import type { ProductJson } from "@/lib/product-json-types";
import ProductLucideIcon from "@/components/products/ProductLucideIcon";
import ProductLifecycleGrid from "@/components/products/ProductLifecycleGrid";
import { CustomersSection } from "@/components/ui/customers-section";
import { LogoTicker } from "@/components/ui/logo-ticker";
import { VerticalTabs } from "@/components/ui/vertical-tabs";
import { AccordionFeatureSection } from "@/components/ui/accordion-feature-section";
import { ProductHeroAccordion } from "@/components/ui/product-hero-accordion";
import { InteractiveImageAccordion } from "@/components/ui/interactive-image-accordion";
import { ImageComparison } from "@/components/ui/image-comparison-slider";
import { TemplateMarqueeRows } from "@/components/ui/template-marquee-rows";
import { VimeoVideoSection } from "@/components/VimeoVideoSection";
import { cn } from "@/lib/utils";
import { featureCardGridClass, partnerAdvantageGridClass } from "@/lib/feature-card-grid";
import { normalizeVimeoId } from "@/lib/vimeo-id";

function splitHeadline(headline: string): ReactNode {
  const parts = headline.split(/\s[—–]\s/);
  if (parts.length >= 2) {
    const rest = parts.slice(1).join(" — ");
    return (
      <>
        <span className="text-charcoal">{parts[0]}</span>
        <br />
        <span className="text-teal">{rest}</span>
      </>
    );
  }
  return <span className="text-charcoal">{headline}</span>;
}

/**
 * Charcoal sections: line 1 white, line 2 gold (Migrations-style).
 * 1) Split on em/en dash. 2) Else split on first ". " (two sentences).
 */
function splitHeadlineDark(headline: string): ReactNode {
  const byEm = headline.split(/\s[—–]\s/);
  if (byEm.length >= 2) {
    return (
      <>
        <span className="text-white">{byEm[0]}</span>
        <br />
        <span className="text-gold">{byEm.slice(1).join(" — ")}</span>
      </>
    );
  }
  const bySentence = headline.match(/^(.+?)\.\s+(\S.*)$/);
  if (bySentence && bySentence[2].length >= 2) {
    return (
      <>
        <span className="text-white">{bySentence[1]}.</span>
        <br />
        <span className="text-gold">{bySentence[2]}</span>
      </>
    );
  }
  return <span className="text-white">{headline}</span>;
}

type ProductImageProps = {
  src: string;
  alt: string;
  priority?: boolean;
  className?: string;
  sizes: string;
  /** Next/Image quality 1–100; higher = sharper (larger files). Default 85. */
  quality?: number;
};

function ProductImage({ src, alt, priority, className, sizes, quality = 85 }: ProductImageProps) {
  return (
    <Image
      src={src}
      alt={alt}
      fill
      priority={priority}
      sizes={sizes}
      quality={quality}
      className={className}
    />
  );
}

/** Hero image + vertical tabs below hero (sidebar copy moves out of hero). */
const VERTICAL_TABS_LAYOUT_SLUGS = new Set([
  "logo-design",
  "ssl",
  "directories",
  "ecommerce",
  "digital-fax",
]);

const BUSINESS_EMAIL_SLUG = "business-email";

/** Product pages that use AccordionFeatureSection (two-column accordion + preview image). */
const FEATURE_TWO_COLUMN_ACCORDION_SLUGS = new Set(["seo", "hosting", "website-builder"]);

const FALLBACK_SIDEBAR_IMAGE =
  "https://images.unsplash.com/photo-1626785774573-4b799315345d?q=80&w=1200&auto=format&fit=crop";

/** Large flat hero (Domains-style): no 3D tilt, cream letterbox, sharp quality. */
const FLAT_HERO_POP_SLUGS = new Set([
  "domains",
  "business-email",
  "brand-competitor-monitoring",
  "logo-design",
  "reputation-management",
  "ecommerce",
  "directories",
  "social-media-management",
  "seo",
  "website-design",
  "website-builder",
]);

export default function ProductPageFromJson({ data, navLabel }: { data: ProductJson; navLabel: string }) {
  const { hero, features, partnerAdvantage, lifecycleFit, cta, media } = data;
  const beforeAfter = media?.beforeAfter;
  const templateMarquee = media?.templateMarquee;
  const logoShowcase = media?.logoShowcase;
  const heroImg = media?.heroImage;
  const contentImg = media?.contentImage;
  const vimeoOverview = media?.vimeoOverview;
  const showVimeoOverview = Boolean(vimeoOverview && normalizeVimeoId(vimeoOverview.vimeoId));
  const verticalTabsLayout = VERTICAL_TABS_LAYOUT_SLUGS.has(data.slug) && Boolean(hero.sidebar);
  const businessEmailImageAccordion = data.slug === BUSINESS_EMAIL_SLUG && Boolean(hero.sidebar);
  const featureTwoColumnAccordionLayout =
    FEATURE_TWO_COLUMN_ACCORDION_SLUGS.has(data.slug) && Boolean(hero.sidebar);
  const heroAccordionLayout =
    !verticalTabsLayout &&
    Boolean(hero.sidebar) &&
    !businessEmailImageAccordion &&
    !featureTwoColumnAccordionLayout;
  const sidebarBelowHero =
    verticalTabsLayout ||
    heroAccordionLayout ||
    businessEmailImageAccordion ||
    featureTwoColumnAccordionLayout;

  const isFlatHeroPop = FLAT_HERO_POP_SLUGS.has(data.slug);

  return (
    <main>
      {/* Hero — homepage rhythm: cream, large optional image column */}
      <section className="relative overflow-x-hidden bg-cream pt-28">
        <div
          className={cn(
            "mx-auto grid max-w-7xl items-center gap-10 px-6 pb-16",
            heroImg || !sidebarBelowHero ? "lg:grid-cols-2 lg:gap-14 lg:pb-28" : "lg:pb-28"
          )}
        >
          <div className="relative z-10 max-w-xl lg:max-w-none">
            <nav className="mb-8 font-raleway text-sm text-gray-500">
              <Link href="/" className="hover:text-teal">
                Home
              </Link>
              <span className="mx-2">/</span>
              <Link href="/products" className="hover:text-teal">
                Products
              </Link>
              <span className="mx-2">/</span>
              <span className="text-charcoal">{navLabel}</span>
            </nav>

            <div className="mb-8 flex items-center gap-3">
              <div className="h-px w-8 bg-teal" />
              <span className="section-label">{hero.eyebrow}</span>
            </div>

            <h1 className="mb-6 font-montserrat text-4xl font-black leading-[1.05] tracking-tight sm:text-5xl lg:text-6xl xl:text-7xl">
              {splitHeadline(hero.headline)}
            </h1>

            {hero.subheadline ? (
              <p className="mb-4 font-raleway text-lg leading-relaxed text-gray-500 lg:text-xl lg:leading-7">
                {hero.subheadline}
              </p>
            ) : null}

            {hero.description ? (
              <p className="mb-8 font-raleway text-base leading-relaxed text-gray-500 lg:text-lg">{hero.description}</p>
            ) : null}

            {hero.badge ? (
              <p className="mb-8 font-raleway text-sm font-medium text-charcoal/80">{hero.badge}</p>
            ) : null}

            <div className="flex flex-col gap-4 sm:flex-row sm:flex-wrap">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-gold px-8 py-4 font-raleway text-sm font-semibold uppercase tracking-wide text-charcoal transition-colors duration-200 hover:bg-gold-dark hover:shadow-md"
              >
                {hero.cta.primary}
              </Link>
              <Link
                href="mailto:partners@hostopia.com"
                className="inline-flex items-center justify-center gap-2 rounded-full border-2 border-charcoal bg-transparent px-8 py-4 font-raleway text-sm font-semibold uppercase tracking-wide text-charcoal transition-colors duration-200 hover:bg-white"
              >
                {hero.cta.secondary}
              </Link>
            </div>
          </div>

          {/* Right column: large hero visual (homepage-style) + optional sidebar */}
          <div className="relative flex w-full flex-col justify-center gap-8">
            {heroImg ? (
              isFlatHeroPop ? (
                <div className="relative mx-auto w-full max-w-[min(100%,min(92vw,860px))] lg:mx-0 lg:max-w-[860px]">
                  <div className="relative aspect-[4/5] w-full min-h-[260px] overflow-hidden sm:min-h-[320px] lg:max-h-[min(88vh,860px)]">
                    <ProductImage
                      src={heroImg.src}
                      alt={heroImg.alt}
                      priority={heroImg.priority ?? true}
                      sizes="(max-width: 1024px) 92vw, (max-width: 1536px) 44vw, 860px"
                      quality={92}
                      className="bg-cream object-contain object-center [transform:scale(1.04)] [transform-origin:center] lg:object-right"
                    />
                  </div>
                </div>
              ) : (
                <div className="mx-auto w-full max-w-[644px] pb-5 pt-2 lg:mx-0 lg:pb-8">
                  <div className="relative mx-auto aspect-[4/5] w-full min-h-[196px] max-w-[min(100%,min(92vw,644px))] overflow-hidden shadow-none lg:mx-0 lg:aspect-auto lg:h-[min(85vh,672px)] lg:max-h-[672px] lg:max-w-none">
                    <ProductImage
                      src={heroImg.src}
                      alt={heroImg.alt}
                      priority={heroImg.priority ?? true}
                      sizes="(max-width: 1024px) 100vw, 50vw"
                      quality={92}
                      className="bg-cream object-contain object-center [transform:scale(1.04)] [transform-origin:center] lg:object-right"
                    />
                  </div>
                </div>
              )
            ) : null}

            {!sidebarBelowHero && !heroImg && hero.sidebar ? (
              <div className="rounded-2xl border border-gray-200/80 bg-white p-8 shadow-sm lg:ml-auto lg:max-w-md">
                <p className="mb-6 font-montserrat text-lg font-black text-charcoal">{hero.sidebar.heading}</p>
                <ul className="space-y-5">
                  {hero.sidebar.items.map((item) => (
                    <li key={item.title}>
                      <p className="font-montserrat text-sm font-bold text-charcoal">{item.title}</p>
                      <p className="mt-1 font-raleway text-sm leading-relaxed text-gray-500">{item.body}</p>
                    </li>
                  ))}
                </ul>
              </div>
            ) : null}

            {!sidebarBelowHero && heroImg && hero.sidebar ? (
              <div className="mt-10 rounded-2xl border border-gray-200/80 bg-white/95 p-6 shadow-sm backdrop-blur-sm lg:mt-8 lg:max-w-md lg:self-end">
                <p className="mb-4 font-montserrat text-base font-black text-charcoal">{hero.sidebar.heading}</p>
                <ul className="space-y-4">
                  {hero.sidebar.items.slice(0, 3).map((item) => (
                    <li key={item.title}>
                      <p className="font-montserrat text-xs font-bold text-charcoal">{item.title}</p>
                      <p className="mt-0.5 font-raleway text-xs leading-relaxed text-gray-500">{item.body}</p>
                    </li>
                  ))}
                </ul>
              </div>
            ) : null}
          </div>
        </div>
      </section>

      {showVimeoOverview && vimeoOverview ? (
        <VimeoVideoSection
          vimeoId={vimeoOverview.vimeoId}
          eyebrow={vimeoOverview.eyebrow ?? "See it in action"}
          title={vimeoOverview.title}
          description={vimeoOverview.description}
          posterSrc={vimeoOverview.posterSrc}
          posterAlt={vimeoOverview.posterAlt}
          playLabel={vimeoOverview.playLabel ?? "Play product video"}
        />
      ) : null}

      {verticalTabsLayout && hero.sidebar ? (
        <VerticalTabs
          sectionHeading={hero.sidebar.heading}
          items={hero.sidebar.items.map((item, i) => ({
            id: String(i + 1).padStart(2, "0"),
            title: item.title,
            description: item.body,
            imageSrc:
              item.image?.src ??
              "https://images.unsplash.com/photo-1626785774573-4b799315345d?q=80&w=1200&auto=format&fit=crop",
            imageAlt: item.image?.alt ?? item.title,
          }))}
        />
      ) : null}

      {heroAccordionLayout && hero.sidebar ? (
        <ProductHeroAccordion
          sectionHeading={hero.sidebar.heading}
          items={hero.sidebar.items.map((item, i) => ({
            id: String(i + 1).padStart(2, "0"),
            title: item.title,
            content: item.body,
            imageSrc: item.image?.src,
            imageAlt: item.image?.alt,
          }))}
        />
      ) : null}

      {featureTwoColumnAccordionLayout && hero.sidebar ? (
        <AccordionFeatureSection
          sectionHeading={hero.sidebar.heading}
          items={hero.sidebar.items.map((item, i) => ({
            id: String(i + 1).padStart(2, "0"),
            title: item.title,
            description: item.body,
            image: item.image?.src ?? FALLBACK_SIDEBAR_IMAGE,
            imageAlt: item.image?.alt,
          }))}
        />
      ) : null}

      {businessEmailImageAccordion && hero.sidebar ? (
        <section className="w-full bg-white py-12 md:py-16 lg:py-24">
          <div className="mx-auto max-w-7xl px-6">
            <InteractiveImageAccordion
              sectionHeading={hero.sidebar.heading}
              items={hero.sidebar.items.map((item, i) => ({
                id: `be-${i + 1}`,
                title: item.title,
                body: item.body,
                imageSrc: item.image?.src ?? FALLBACK_SIDEBAR_IMAGE,
                imageAlt: item.image?.alt ?? item.title,
              }))}
            />
          </div>
        </section>
      ) : null}

      {features ? (
        <section
          className={cn(
            "py-28",
            sidebarBelowHero
              ? "border-t border-gray-200/80 bg-cream shadow-[inset_0_12px_24px_-12px_rgba(36,40,43,0.08)]"
              : "bg-white"
          )}
        >
          <div className="mx-auto max-w-7xl px-6">
            <span className="section-label mb-4 inline-block">{features.eyebrow}</span>
            <h2 className="mb-6 max-w-4xl font-montserrat text-4xl font-black leading-tight text-charcoal md:text-5xl lg:text-6xl">
              {splitHeadline(features.heading)}
            </h2>
            <p className="mb-14 max-w-3xl font-raleway text-lg leading-relaxed text-gray-500">{features.intro}</p>
            <div className={featureCardGridClass(features.cards.length)}>
              {features.cards.map((card) => (
                <div
                  key={card.title}
                  className="group relative overflow-hidden rounded-2xl border border-gray-100 bg-white p-5 shadow-sm transition-colors duration-300 hover:bg-gray-50 md:p-6"
                >
                  <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-xl bg-teal/10">
                    <ProductLucideIcon name={card.icon} className="h-[22px] w-[22px] text-teal" size={22} />
                  </div>
                  <div className="mb-3 h-1 w-12 bg-teal" />
                  <h3 className="mb-2 font-montserrat text-sm font-semibold text-charcoal">{card.title}</h3>
                  <p className="font-raleway text-sm leading-relaxed text-gray-500">{card.body}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      ) : null}

      {logoShowcase?.images?.length ? (
        <section className="border-t border-gray-200/80 bg-white py-16 md:py-24">
          <div className="mx-auto max-w-7xl px-6">
            {logoShowcase.eyebrow ? (
              <span className="section-label mb-4 inline-block">{logoShowcase.eyebrow}</span>
            ) : null}
            {logoShowcase.heading ? (
              <h2 className="mb-4 max-w-4xl font-montserrat text-3xl font-black leading-tight text-charcoal md:text-4xl lg:text-5xl">
                {logoShowcase.heading}
              </h2>
            ) : null}
            {logoShowcase.intro ? (
              <p className="mb-10 max-w-3xl font-raleway text-lg leading-relaxed text-gray-500">{logoShowcase.intro}</p>
            ) : null}
            {logoShowcase.layout === "grid" ? (
              <CustomersSection
                embedded
                customers={logoShowcase.images.map((img) => ({
                  src: img.src,
                  alt: img.alt,
                  height: img.height ?? 24,
                }))}
                ctaHref={logoShowcase.ctaHref ?? "/customers/telcos"}
                ctaLabel={logoShowcase.ctaLabel ?? "Meet our customers"}
              />
            ) : (
              <LogoTicker
                logos={logoShowcase.images.map((img) => ({
                  src: img.src,
                  alt: img.alt,
                  height: img.height ?? 24,
                }))}
                durationSec={logoShowcase.tickerDurationSec ?? 50}
                ctaHref={logoShowcase.ctaHref ?? "/customers/telcos"}
                ctaLabel={logoShowcase.ctaLabel ?? "Meet our customers"}
                showCta={logoShowcase.showCta !== false}
              />
            )}
          </div>
        </section>
      ) : null}

      {templateMarquee?.images?.length ? (
        <section className="overflow-x-hidden border-t border-gray-200/80 bg-white py-16 md:py-24">
          <div className="mx-auto max-w-7xl px-6">
            {templateMarquee.eyebrow ? (
              <span className="section-label mb-4 inline-block">{templateMarquee.eyebrow}</span>
            ) : null}
            {templateMarquee.heading ? (
              <h2 className="mb-4 max-w-4xl font-montserrat text-3xl font-black leading-tight text-charcoal md:text-4xl lg:text-5xl">
                {templateMarquee.heading}
              </h2>
            ) : null}
            {templateMarquee.intro ? (
              <p className="mb-10 max-w-3xl font-raleway text-lg leading-relaxed text-gray-500">{templateMarquee.intro}</p>
            ) : null}
          </div>
          <div className="relative left-1/2 w-screen -translate-x-1/2">
            <TemplateMarqueeRows images={templateMarquee.images} />
          </div>
        </section>
      ) : null}

      {beforeAfter ? (
        <section className="border-t border-gray-100 bg-white py-16 md:py-24">
          <div className="mx-auto max-w-7xl px-6">
            {beforeAfter.eyebrow ? (
              <span className="section-label mb-4 inline-block">{beforeAfter.eyebrow}</span>
            ) : null}
            {beforeAfter.heading ? (
              <h2 className="mb-4 max-w-4xl font-montserrat text-3xl font-black leading-tight text-charcoal md:text-4xl lg:text-5xl">
                {beforeAfter.heading}
              </h2>
            ) : null}
            {beforeAfter.intro ? (
              <p className="mb-10 max-w-3xl font-raleway text-lg leading-relaxed text-gray-500">{beforeAfter.intro}</p>
            ) : null}
            <ImageComparison
              beforeImage={beforeAfter.before.src}
              afterImage={beforeAfter.after.src}
              altBefore={beforeAfter.before.alt}
              altAfter={beforeAfter.after.alt}
            />
          </div>
        </section>
      ) : null}

      {contentImg ? (
        <section className="bg-cream py-0">
          <div className="mx-auto max-w-[1920px] px-0">
            <figure className="relative mx-auto w-full">
              <div className="relative aspect-[21/9] min-h-[196px] w-full max-h-[min(70vh,700px)] sm:min-h-[252px]">
                <ProductImage
                  src={contentImg.src}
                  alt={contentImg.alt}
                  priority={false}
                  sizes="100vw"
                  quality={92}
                  className="bg-cream object-contain object-center"
                />
              </div>
              {contentImg.caption ? (
                <figcaption className="mx-auto max-w-7xl px-6 py-4 font-raleway text-sm text-gray-500">
                  {contentImg.caption}
                </figcaption>
              ) : null}
            </figure>
          </div>
        </section>
      ) : null}

      {partnerAdvantage ? (
        <section className="bg-charcoal py-28">
          <div className="mx-auto max-w-7xl px-6">
            <h2 className="mb-6 max-w-4xl font-montserrat text-4xl font-black leading-tight md:text-5xl lg:text-6xl">
              {splitHeadlineDark(partnerAdvantage.heading)}
            </h2>
            <p className="mb-14 max-w-3xl font-raleway text-lg leading-relaxed text-white/70">{partnerAdvantage.intro}</p>
            <div className={partnerAdvantageGridClass(partnerAdvantage.items.length)}>
              {partnerAdvantage.items.map((item) => (
                <div key={item.title} className="border-t border-white/15 pt-6">
                  <h3 className="mb-3 font-montserrat text-lg font-black text-white">{item.title}</h3>
                  <p className="font-raleway text-base leading-relaxed text-white/70">{item.body}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      ) : null}

      {lifecycleFit ? (
        <section className="bg-cream py-28">
          <div className="mx-auto max-w-7xl px-6">
            <span className="section-label mb-4 inline-block">{lifecycleFit.eyebrow}</span>
            <h2 className="mb-6 max-w-4xl font-montserrat text-4xl font-black leading-tight text-charcoal md:text-5xl">
              {lifecycleFit.heading}
            </h2>
            <p className="mb-12 max-w-3xl font-raleway text-lg leading-relaxed text-gray-500">{lifecycleFit.intro}</p>
            <ProductLifecycleGrid steps={lifecycleFit.steps} productLabel={navLabel} />
            <p className="mt-12 max-w-4xl font-raleway text-base leading-relaxed text-gray-500">{lifecycleFit.positioning}</p>
          </div>
        </section>
      ) : null}

      {cta ? (
        <section className="bg-charcoal py-28">
          <div className="mx-auto max-w-4xl px-6 text-center">
            <h2 className="mb-6 font-montserrat text-3xl font-black leading-tight md:text-4xl lg:text-5xl">
              {splitHeadlineDark(cta.headline)}
            </h2>
            <p className="mb-10 font-raleway text-lg leading-relaxed text-white/70">{cta.body}</p>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center rounded-full bg-gold px-10 py-4 font-raleway text-sm font-semibold uppercase tracking-wide text-charcoal transition-colors duration-200 hover:bg-gold-dark"
            >
              {cta.buttonText}
            </Link>
          </div>
        </section>
      ) : null}
    </main>
  );
}
