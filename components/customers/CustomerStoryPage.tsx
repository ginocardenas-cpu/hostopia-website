import Link from "next/link";
import type { ReactNode } from "react";
import { ArrowRight } from "lucide-react";
import CustomerImageCarousel from "@/components/customers/CustomerImageCarousel";
import { BundleFrameworksDetail, SolutionBlockDetail } from "@/components/customers/customerSolutionDetail";
import { getCustomerCarouselImages } from "@/lib/customer-carousel-images";
import type { CustomerStoryContent, SolutionBlock } from "@/lib/customer-story-types";

type CustomerStoryPageProps = {
  content: CustomerStoryContent;
  breadcrumbGroup: string;
  sectionEyebrow: string;
};

const ACCENT = "#2CADB2";
const GOLD = "#F8CF41";

function toBlurb(text: string, maxLen = 220): string {
  const t = text.replace(/\s+/g, " ").trim();
  if (!t) return "";
  if (t.length <= maxLen) return t;
  const cut = t.slice(0, maxLen);
  const lastSpace = cut.lastIndexOf(" ");
  return (lastSpace > 40 ? cut.slice(0, lastSpace) : cut).trim() + "…";
}

function firstSentence(text: string): string {
  const t = text.replace(/\s+/g, " ").trim();
  const m = t.match(/^(.+?[.!?])(\s|$)/);
  return m ? m[1] : toBlurb(t, 160);
}

function secondaryCtaHref(label: string): string {
  const low = label.toLowerCase();
  if (low.includes("portfolio") || low.includes("product")) return "/products";
  return "#customer-solution";
}

function SectionCta({ href, children }: { href: string; children: ReactNode }) {
  return (
    <Link
      href={href}
      className="inline-flex w-fit items-center gap-2 rounded-full px-7 py-3 text-sm font-semibold text-[#24282B] shadow-sm transition hover:scale-[1.02] hover:shadow-md"
      style={{ fontFamily: "Montserrat, sans-serif", backgroundColor: GOLD }}
    >
      {children}
      <ArrowRight className="h-4 w-4" aria-hidden />
    </Link>
  );
}

function CollapsibleDetails({ label, children }: { label: string; children: ReactNode }) {
  return (
    <details className="group mt-8 border-t border-neutral-200/80 pt-6">
      <summary className="cursor-pointer list-none text-sm font-semibold text-[#2CADB2] transition hover:text-[#249a9f] [&::-webkit-details-marker]:hidden">
        <span className="inline-flex items-center gap-2">
          {label}
          <span className="text-neutral-400 transition group-open:rotate-180">▼</span>
        </span>
      </summary>
      <div className="mt-5">{children}</div>
    </details>
  );
}

function SplitSection({
  slug,
  salt,
  reverse,
  bgClass,
  kicker,
  title,
  blurb,
  ctaHref,
  ctaLabel,
  details,
  sectionId,
}: {
  slug: string;
  salt: number;
  reverse: boolean;
  bgClass: string;
  kicker: string;
  title: string;
  blurb: string;
  ctaHref: string;
  ctaLabel: string;
  details?: ReactNode;
  sectionId?: string;
}) {
  const images = getCustomerCarouselImages(slug, salt);
  const copy = (
    <div className="flex flex-col justify-center">
      <p
        className="mb-4 text-xs font-semibold uppercase tracking-[0.2em]"
        style={{ fontFamily: "Montserrat, sans-serif", color: ACCENT }}
      >
        {kicker}
      </p>
      <h2
        className="mb-5 text-3xl font-semibold tracking-tight text-[#24282B] md:text-4xl"
        style={{ fontFamily: "Montserrat, sans-serif" }}
      >
        {title}
      </h2>
      {blurb ? (
        <p className="mb-8 max-w-lg text-lg leading-relaxed text-neutral-600" style={{ fontFamily: "Raleway, sans-serif" }}>
          {blurb}
        </p>
      ) : null}
      <SectionCta href={ctaHref}>{ctaLabel}</SectionCta>
      {details}
    </div>
  );
  const visual = <CustomerImageCarousel images={images} />;

  return (
    <section id={sectionId} className={`scroll-mt-28 py-20 md:py-28 ${bgClass}`}>
      <div className="mx-auto max-w-6xl px-6">
        <div className="grid items-center gap-12 md:grid-cols-2 md:gap-16 lg:gap-20">
          {reverse ? (
            <>
              {copy}
              {visual}
            </>
          ) : (
            <>
              {visual}
              {copy}
            </>
          )}
        </div>
      </div>
    </section>
  );
}

function blockLeadBlurb(block: SolutionBlock): string {
  if (block.content) return toBlurb(block.content);
  if (block.bundles?.length) return "A practical bundle matrix maps each package to products and commercial impact.";
  if (block.scenarios?.length) return "Scenario-level projections show how the motion plays out by provider type.";
  if (block.segments?.length) return "Segment-specific plays you can operationalize with your sales and marketing teams.";
  if (block.examples?.length) return "Real-world positioning examples from comparable provider archetypes.";
  if (block.productLadder?.length) return "Step-up paths from entry SKUs to higher-value services, with clear rationale.";
  return "Open the full breakdown for tables, scenarios, and frameworks.";
}

export default function CustomerStoryPage({ content, breadcrumbGroup, sectionEyebrow }: CustomerStoryPageProps) {
  const { hero, challenge, solution, outcomes, migrationScenarios, retentionByProvider, bundleFrameworks, whyBundlesWork, whyNow, faq, stats, cta } =
    content;

  const secondaryHref = secondaryCtaHref(hero.cta.secondary);
  let flip = false;
  const nextFlip = () => {
    const r = flip;
    flip = !flip;
    return r;
  };

  return (
    <main className="pb-0 pt-24">
      <div className="mx-auto max-w-6xl px-6 pb-6 pt-2">
        <nav className="text-sm text-neutral-500" style={{ fontFamily: "Raleway, sans-serif" }}>
          <Link href="/" className="hover:text-[#2CADB2]">
            Home
          </Link>
          <span className="mx-2">/</span>
          <span className="text-neutral-600">{breadcrumbGroup}</span>
          <span className="mx-2">/</span>
          <span className="text-neutral-900">{content.label}</span>
        </nav>
      </div>

      <SplitSection
        slug={content.slug}
        salt={0}
        reverse={nextFlip()}
        bgClass="bg-[#fafaf9]"
        kicker={hero.eyebrow ?? sectionEyebrow}
        title={hero.headline}
        blurb={[firstSentence(hero.subheadline), toBlurb(hero.description, 180)].filter(Boolean).join(" ")}
        ctaHref="/contact"
        ctaLabel={hero.cta.primary}
        sectionId="customer-hero"
        details={
          <CollapsibleDetails label="More about this audience">
            <p className="text-neutral-600 leading-relaxed" style={{ fontFamily: "Raleway, sans-serif" }}>
              {hero.description}
            </p>
            <p className="mt-4 text-sm text-neutral-500">
              <Link href={secondaryHref} className="font-medium text-[#2CADB2] hover:underline">
                {hero.cta.secondary}
              </Link>
            </p>
          </CollapsibleDetails>
        }
      />

      {challenge ? (
        <SplitSection
          slug={content.slug}
          salt={1}
          reverse={nextFlip()}
          bgClass="bg-white"
          kicker="The challenge"
          title={challenge.heading}
          blurb={toBlurb(challenge.content)}
          ctaHref="/contact"
          ctaLabel="Discuss your situation"
          sectionId="customer-challenge"
          details={
            <CollapsibleDetails label="Context, sources, and pull quote">
              <p className="text-neutral-600 leading-relaxed" style={{ fontFamily: "Raleway, sans-serif" }}>
                {challenge.content}
              </p>
              {challenge.callout ? (
                <blockquote className="mt-6 border-l-4 pl-5 text-base font-medium italic text-[#24282B]" style={{ borderColor: ACCENT }}>
                  {challenge.callout}
                </blockquote>
              ) : null}
              {challenge.sources && challenge.sources.length > 0 ? (
                <div className="mt-6">
                  <p className="mb-2 text-xs font-bold uppercase tracking-wider text-neutral-400" style={{ fontFamily: "Montserrat, sans-serif" }}>
                    Sources
                  </p>
                  <ul className="space-y-1 text-sm text-neutral-600" style={{ fontFamily: "Raleway, sans-serif" }}>
                    {challenge.sources.map((s) => (
                      <li key={s}>{s}</li>
                    ))}
                  </ul>
                </div>
              ) : null}
            </CollapsibleDetails>
          }
        />
      ) : null}

      {solution ? (
        <>
          <SplitSection
            slug={content.slug}
            salt={2}
            reverse={nextFlip()}
            bgClass="bg-[#f4f4f2]"
            kicker="The solution"
            title={solution.heading}
            blurb={toBlurb(solution.intro)}
            ctaHref="/contact"
            ctaLabel="See how we partner"
            sectionId="customer-solution"
            details={
              <CollapsibleDetails label="Full solution overview">
                <p className="text-neutral-600 leading-relaxed" style={{ fontFamily: "Raleway, sans-serif" }}>
                  {solution.intro}
                </p>
              </CollapsibleDetails>
            }
          />
          {solution.blocks.map((block, i) => (
            <SplitSection
              key={block.heading}
              slug={content.slug}
              salt={10 + i}
              reverse={nextFlip()}
              bgClass={i % 2 === 0 ? "bg-white" : "bg-[#fafaf9]"}
              kicker="Deep dive"
              title={block.heading}
              blurb={blockLeadBlurb(block)}
              ctaHref="/contact"
              ctaLabel="Explore with our team"
              details={
                <CollapsibleDetails label="Tables, scenarios, and frameworks">
                  <SolutionBlockDetail block={block} />
                </CollapsibleDetails>
              }
            />
          ))}
        </>
      ) : null}

      {bundleFrameworks ? (
        <SplitSection
          slug={content.slug}
          salt={20}
          reverse={nextFlip()}
          bgClass="bg-[#f4f4f2]"
          kicker="Bundle architecture"
          title={bundleFrameworks.heading}
          blurb="Tiered frameworks align SKUs with provider types so bundles stay simple to sell and defend."
          ctaHref="/contact"
          ctaLabel="Review frameworks"
          details={
            <CollapsibleDetails label="All tiers and provider types">
              <BundleFrameworksDetail bundleFrameworks={bundleFrameworks} />
            </CollapsibleDetails>
          }
        />
      ) : null}

      {whyBundlesWork ? (
        <SplitSection
          slug={content.slug}
          salt={21}
          reverse={nextFlip()}
          bgClass="bg-white"
          kicker="Why bundles work"
          title={whyBundlesWork.heading}
          blurb={toBlurb(whyBundlesWork.perspectives.map((p) => p.benefit).join(" "), 200)}
          ctaHref="/contact"
          ctaLabel="Build a bundle plan"
          details={
            <CollapsibleDetails label="Perspectives by stakeholder">
              <div className="grid gap-4 sm:grid-cols-3">
                {whyBundlesWork.perspectives.map((p) => (
                  <div key={p.for} className="rounded-xl border border-neutral-200/80 bg-[#fafaf9] p-5">
                    <p className="mb-2 text-sm font-semibold" style={{ color: ACCENT, fontFamily: "Montserrat, sans-serif" }}>
                      {p.for}
                    </p>
                    <p className="text-sm leading-relaxed text-neutral-600" style={{ fontFamily: "Raleway, sans-serif" }}>
                      {p.benefit}
                    </p>
                  </div>
                ))}
              </div>
            </CollapsibleDetails>
          }
        />
      ) : null}

      {whyNow ? (
        <SplitSection
          slug={content.slug}
          salt={22}
          reverse={nextFlip()}
          bgClass="bg-[#fafaf9]"
          kicker="Why now"
          title={whyNow.heading}
          blurb={toBlurb(whyNow.content)}
          ctaHref="/contact"
          ctaLabel="Plan your timeline"
          details={
            <CollapsibleDetails label="Full narrative">
              <p className="text-neutral-600 leading-relaxed" style={{ fontFamily: "Raleway, sans-serif" }}>
                {whyNow.content}
              </p>
            </CollapsibleDetails>
          }
        />
      ) : null}

      {outcomes ? (
        <SplitSection
          slug={content.slug}
          salt={23}
          reverse={nextFlip()}
          bgClass="bg-white"
          kicker="Outcomes"
          title={outcomes.heading}
          blurb={outcomes.cards[0] ? firstSentence(outcomes.cards[0].body) : toBlurb(outcomes.heading)}
          ctaHref="/contact"
          ctaLabel="Model your outcomes"
          details={
            <CollapsibleDetails label="All outcome areas">
              <div className="grid gap-4 sm:grid-cols-2">
                {outcomes.cards.map((card) => (
                  <div key={card.title} className="rounded-xl border border-neutral-200/80 bg-[#fafaf9] p-5">
                    <h3 className="mb-2 text-base font-semibold text-[#24282B]" style={{ fontFamily: "Montserrat, sans-serif" }}>
                      {card.title}
                    </h3>
                    <p className="text-sm leading-relaxed text-neutral-600" style={{ fontFamily: "Raleway, sans-serif" }}>
                      {card.body}
                    </p>
                  </div>
                ))}
              </div>
            </CollapsibleDetails>
          }
        />
      ) : null}

      {migrationScenarios ? (
        <SplitSection
          slug={content.slug}
          salt={24}
          reverse={nextFlip()}
          bgClass="bg-[#f4f4f2]"
          kicker="Migration"
          title={migrationScenarios.heading}
          blurb={
            migrationScenarios.cards[0]
              ? firstSentence(migrationScenarios.cards[0].body)
              : "How teams consolidate or win back base with a managed migration motion."
          }
          ctaHref="/contact"
          ctaLabel="Talk migrations"
          details={
            <CollapsibleDetails label="All scenarios">
              <div className="grid gap-4 sm:grid-cols-2">
                {migrationScenarios.cards.map((card) => (
                  <div key={card.title} className="rounded-xl border border-neutral-200/80 bg-white p-5">
                    <h3 className="mb-2 text-base font-semibold text-[#24282B]" style={{ fontFamily: "Montserrat, sans-serif" }}>
                      {card.title}
                    </h3>
                    <p className="text-sm leading-relaxed text-neutral-600" style={{ fontFamily: "Raleway, sans-serif" }}>
                      {card.body}
                    </p>
                  </div>
                ))}
              </div>
            </CollapsibleDetails>
          }
        />
      ) : null}

      {retentionByProvider ? (
        <SplitSection
          slug={content.slug}
          salt={25}
          reverse={nextFlip()}
          bgClass="bg-white"
          kicker="Retention"
          title={retentionByProvider.heading}
          blurb="Keep revenue sticky with bundles, lifecycle touchpoints, and provider-specific plays."
          ctaHref="/contact"
          ctaLabel="Strengthen retention"
          details={
            <CollapsibleDetails label="Plays by provider type">
              <div className="grid gap-4 sm:grid-cols-2">
                {retentionByProvider.cards.map((card, i) => (
                  <div key={i} className="rounded-xl border border-neutral-200/80 bg-[#fafaf9] p-5">
                    {"provider" in card && card.provider ? (
                      <h3 className="mb-2 text-base font-semibold" style={{ color: ACCENT, fontFamily: "Montserrat, sans-serif" }}>
                        {card.provider}
                      </h3>
                    ) : null}
                    {"strategy" in card && card.strategy ? (
                      <p className="text-sm leading-relaxed text-neutral-600" style={{ fontFamily: "Raleway, sans-serif" }}>
                        {card.strategy}
                      </p>
                    ) : null}
                  </div>
                ))}
              </div>
            </CollapsibleDetails>
          }
        />
      ) : null}

      {stats && stats.length > 0 ? (
        <section className="bg-[#f4f4f2] py-20 md:py-28">
          <div className="mx-auto max-w-6xl px-6">
            <div className="grid items-center gap-12 md:grid-cols-2 md:gap-16">
              <CustomerImageCarousel images={getCustomerCarouselImages(content.slug, 30)} />
              <div>
                <p
                  className="mb-4 text-xs font-semibold uppercase tracking-[0.2em]"
                  style={{ fontFamily: "Montserrat, sans-serif", color: ACCENT }}
                >
                  Signal
                </p>
                <h2 className="mb-10 text-3xl font-semibold tracking-tight text-[#24282B] md:text-4xl" style={{ fontFamily: "Montserrat, sans-serif" }}>
                  By the numbers
                </h2>
                <div className="grid grid-cols-2 gap-8">
                  {stats.map((s) => (
                    <div key={s.label}>
                      <p className="text-2xl font-semibold md:text-3xl" style={{ fontFamily: "Montserrat, sans-serif", color: ACCENT }}>
                        {s.value}
                      </p>
                      <p className="mt-1 text-sm leading-snug text-neutral-600" style={{ fontFamily: "Raleway, sans-serif" }}>
                        {s.label}
                      </p>
                    </div>
                  ))}
                </div>
                <div className="mt-10">
                  <SectionCta href="/contact">Validate with our team</SectionCta>
                </div>
              </div>
            </div>
          </div>
        </section>
      ) : null}

      {faq && faq.length > 0 ? (
        <SplitSection
          slug={content.slug}
          salt={31}
          reverse={nextFlip()}
          bgClass="bg-white"
          kicker="FAQ"
          title="Questions we hear often"
          blurb={toBlurb(faq[0].a, 200)}
          ctaHref="/contact"
          ctaLabel="Ask us anything"
          details={
            <CollapsibleDetails label="All questions">
              <div className="space-y-8">
                {faq.map((item) => (
                  <div key={item.q.slice(0, 48)}>
                    <h3 className="mb-2 text-base font-semibold text-[#24282B]" style={{ fontFamily: "Montserrat, sans-serif" }}>
                      {item.q}
                    </h3>
                    <p className="text-sm leading-relaxed text-neutral-600" style={{ fontFamily: "Raleway, sans-serif" }}>
                      {item.a}
                    </p>
                  </div>
                ))}
              </div>
            </CollapsibleDetails>
          }
        />
      ) : null}

      <section className="bg-[#fafaf9] py-20 md:py-28">
        <div className="mx-auto max-w-6xl px-6">
          <div className="grid items-center gap-12 md:grid-cols-2 md:gap-16">
            <div className="order-2 md:order-1">
              <p
                className="mb-4 text-xs font-semibold uppercase tracking-[0.2em]"
                style={{ fontFamily: "Montserrat, sans-serif", color: ACCENT }}
              >
                Next step
              </p>
              <h2 className="mb-5 text-3xl font-semibold tracking-tight text-[#24282B] md:text-4xl" style={{ fontFamily: "Montserrat, sans-serif" }}>
                {cta.headline}
              </h2>
              <p className="mb-8 max-w-lg text-lg leading-relaxed text-neutral-600" style={{ fontFamily: "Raleway, sans-serif" }}>
                {toBlurb(cta.body, 240)}
              </p>
              <SectionCta href="/contact">{cta.buttonText}</SectionCta>
              <CollapsibleDetails label="Full message">
                <p className="text-neutral-600 leading-relaxed" style={{ fontFamily: "Raleway, sans-serif" }}>
                  {cta.body}
                </p>
              </CollapsibleDetails>
            </div>
            <div className="order-1 md:order-2">
              <CustomerImageCarousel images={getCustomerCarouselImages(content.slug, 40)} />
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
