import Link from "next/link";
import CustomerStaticImage from "@/components/customers/CustomerStaticImage";
import HashScroll from "@/components/customers/HashScroll";
import {
  heroImageOnLeft,
  MarketingHeroSplit,
  MarketingPreFooterLight,
} from "@/components/marketing/marketingLayout";
import type { ConsolidatedPage, ConsolidatedSection } from "@/lib/consolidated-page-types";

function secondaryCtaHref(label: string): string {
  const low = label.toLowerCase();
  if (low.includes("portfolio") || low.includes("product")) return "/products";
  return "/contact";
}

function ConsolidatedSectionBlock({ section, index }: { section: ConsolidatedSection; index: number }) {
  const onWhite = index % 2 === 0;
  const sectionBg = onWhite ? "bg-white" : "bg-cream";
  const cardBg = onWhite ? "bg-cream" : "bg-white";
  const blocks = section.body
    .split(/\n\n+/)
    .map((b) => b.trim())
    .filter(Boolean);

  return (
    <section id={section.anchor} className={`scroll-mt-28 border-t border-neutral-200/60 ${sectionBg} py-20 md:py-24`}>
      <div className="mx-auto max-w-5xl px-6">
        {section.eyebrow ? <span className="section-label mb-3 inline-block">{section.eyebrow}</span> : null}
        <h2 className="mb-6 max-w-3xl font-montserrat text-3xl font-black leading-tight tracking-tight text-charcoal md:text-4xl">
          {section.headline}
        </h2>
        <div className="space-y-4">
          {blocks.map((block, i) => {
            const lines = block
              .split("\n")
              .map((l) => l.trim())
              .filter(Boolean);
            const isList = lines.length > 0 && lines.every((l) => /^[-•]\s+/.test(l));
            if (isList) {
              return (
                <ul key={i} className="max-w-3xl space-y-2.5">
                  {lines.map((line, j) => (
                    <li
                      key={j}
                      className="flex gap-3 font-raleway text-lg leading-relaxed text-gray-500"
                    >
                      <span className="mt-[0.6rem] h-1.5 w-1.5 flex-none rounded-full bg-teal" aria-hidden />
                      <span>{line.replace(/^[-•]\s+/, "")}</span>
                    </li>
                  ))}
                </ul>
              );
            }
            return (
              <p key={i} className="max-w-3xl font-raleway text-lg leading-relaxed text-gray-500">
                {block}
              </p>
            );
          })}
        </div>

        {section.stats && section.stats.length > 0 ? (
          <div className="mt-10 grid gap-5 sm:grid-cols-3">
            {section.stats.map((stat) => (
              <div
                key={stat.label}
                className={`rounded-xl border border-gray-200 border-t-4 border-t-teal ${cardBg} p-6 shadow-sm`}
              >
                <p className="font-montserrat text-3xl font-black text-teal">{stat.value}</p>
                <p className="mt-2 font-raleway text-sm leading-snug text-gray-500">{stat.label}</p>
              </div>
            ))}
          </div>
        ) : null}

        {section.sources && section.sources.length > 0 ? (
          <p className="mt-6 font-raleway text-xs italic text-neutral-400">
            Sources: {section.sources.join("; ")}.
          </p>
        ) : null}

        {section.note ? (
          <div className="mt-6 max-w-3xl rounded-md border-l-4 border-gold bg-brand-gold-light p-4 font-raleway text-sm leading-relaxed text-neutral-600">
            {section.note}
          </div>
        ) : null}
      </div>
    </section>
  );
}

export default function ConsolidatedCustomersPage({ page }: { page: ConsolidatedPage }) {
  const secondaryHref = secondaryCtaHref(page.hero.cta.secondary);

  return (
    <main className="pb-0 pt-24">
      <HashScroll />

      <MarketingHeroSplit
        id="page-hero"
        imageOnLeft={heroImageOnLeft(page.slug)}
        eyebrow={page.hero.eyebrow}
        headline={page.hero.headline}
        blurb={page.hero.subheadline}
        primaryCta={page.hero.cta.primary}
        details={
          <p className="mt-6 text-sm text-neutral-500">
            <Link href={secondaryHref} className="font-medium text-teal hover:underline">
              {page.hero.cta.secondary}
            </Link>
          </p>
        }
        visual={<CustomerStaticImage slug={page.slug} salt={0} priority className="w-full" />}
      />

      {page.sections.map((section, index) => (
        <ConsolidatedSectionBlock key={section.anchor} section={section} index={index} />
      ))}

      <MarketingPreFooterLight
        kicker="Ready to grow?"
        headline={page.cta.headline}
        body={page.cta.body}
        buttonText={page.cta.buttonText}
        slug={page.slug}
      />
    </main>
  );
}
