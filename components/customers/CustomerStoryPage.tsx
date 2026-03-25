import Link from "next/link";
import type { ReactNode } from "react";
import BundlesEconomicsCarousel from "@/components/customers/BundlesEconomicsCarousel";
import CustomerStaticImage from "@/components/customers/CustomerStaticImage";
import { BundleFrameworksDetail, SolutionBlockDetail } from "@/components/customers/customerSolutionDetail";
import { getCustomerCarouselImages } from "@/lib/customer-carousel-images";
import {
  CollapsibleDetails,
  heroImageOnLeft,
  MarketingCenteredSection,
  MarketingDarkIconSection,
  MarketingDarkStatsSectionFromCustomer,
  MarketingHeroSplit,
  MarketingPreFooterLight,
  MarketingSplitSection,
  MARKETING_ACCENT,
  outcomeCardsToDarkItems,
} from "@/components/marketing/marketingLayout";
import type { CustomerStoryContent, CustomerSolution, SolutionBlock } from "@/lib/customer-story-types";

type CustomerStoryPageProps = {
  content: CustomerStoryContent;
  breadcrumbGroup: string;
  sectionEyebrow: string;
};

const BUNDLES_GOAL_SLUG = "bundles";

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

function blockLeadBlurb(block: SolutionBlock): string {
  if (block.content) return toBlurb(block.content);
  if (block.bundles?.length) return "A practical bundle matrix maps each package to products and commercial impact.";
  if (block.scenarios?.length) return "Scenario-level projections show how the motion plays out by provider type.";
  if (block.segments?.length) return "Segment-specific plays you can operationalize with your sales and marketing teams.";
  if (block.examples?.length) return "Real-world positioning examples from comparable provider archetypes.";
  if (block.productLadder?.length) return "Step-up paths from entry SKUs to higher-value services, with clear rationale.";
  return "Open the full breakdown for tables, scenarios, and frameworks.";
}

function solutionIntroDetails(solution: CustomerSolution) {
  return (
    <CollapsibleDetails label="Full solution overview">
      <p className="text-neutral-600 leading-relaxed" style={{ fontFamily: "Raleway, sans-serif" }}>
        {solution.intro}
      </p>
    </CollapsibleDetails>
  );
}

type FirstCentered = {
  kicker: string;
  title: string;
  blurb: string;
  salt: number;
  sectionId?: string;
  details: ReactNode;
  consumesBundleFrameworks: boolean;
  consumesSolutionIntro: boolean;
};

function resolveFirstCentered(content: CustomerStoryContent): FirstCentered | null {
  if (content.challenge) {
    const ch = content.challenge;
    return {
      kicker: "The challenge",
      title: ch.heading,
      blurb: toBlurb(ch.content),
      salt: 1,
      sectionId: "customer-challenge",
      consumesBundleFrameworks: false,
      consumesSolutionIntro: false,
      details: (
        <CollapsibleDetails label="Context, sources, and pull quote">
          <p className="text-neutral-600 leading-relaxed" style={{ fontFamily: "Raleway, sans-serif" }}>
            {ch.content}
          </p>
          {ch.callout ? (
            <blockquote
              className="mt-6 border-l-4 pl-5 text-base font-medium italic text-[#24282B]"
              style={{ borderColor: MARKETING_ACCENT }}
            >
              {ch.callout}
            </blockquote>
          ) : null}
          {ch.sources && ch.sources.length > 0 ? (
            <div className="mt-6">
              <p className="mb-2 text-xs font-bold uppercase tracking-wider text-neutral-400" style={{ fontFamily: "Montserrat, sans-serif" }}>
                Sources
              </p>
              <ul className="space-y-1 text-sm text-neutral-600" style={{ fontFamily: "Raleway, sans-serif" }}>
                {ch.sources.map((s) => (
                  <li key={s}>{s}</li>
                ))}
              </ul>
            </div>
          ) : null}
        </CollapsibleDetails>
      ),
    };
  }
  if (content.solution) {
    const sol = content.solution;
    return {
      kicker: "The solution",
      title: sol.heading,
      blurb: toBlurb(sol.intro),
      salt: 2,
      sectionId: "customer-solution",
      consumesBundleFrameworks: false,
      consumesSolutionIntro: true,
      details: solutionIntroDetails(sol),
    };
  }
  if (content.bundleFrameworks) {
    const bf = content.bundleFrameworks;
    return {
      kicker: "Bundle architecture",
      title: bf.heading,
      blurb: "Tiered frameworks align SKUs with provider types so bundles stay simple to sell and defend.",
      salt: 20,
      consumesBundleFrameworks: true,
      consumesSolutionIntro: false,
      details: (
        <CollapsibleDetails label="All tiers and provider types">
          <BundleFrameworksDetail bundleFrameworks={bf} />
        </CollapsibleDetails>
      ),
    };
  }
  return null;
}

export default function CustomerStoryPage({ content, breadcrumbGroup, sectionEyebrow }: CustomerStoryPageProps) {
  const { hero, challenge, solution, outcomes, migrationScenarios, retentionByProvider, bundleFrameworks, whyBundlesWork, whyNow, faq, stats, cta } =
    content;

  const secondaryHref = secondaryCtaHref(hero.cta.secondary);
  const isBundlesGoalPage = content.slug === BUNDLES_GOAL_SLUG;
  const firstCentered = resolveFirstCentered(content);

  let splitIdx = 0;
  const nextSplitIndex = () => splitIdx++;

  const skipBundleFrameworks = firstCentered?.consumesBundleFrameworks ?? false;
  const skipSolutionIntro = firstCentered?.consumesSolutionIntro ?? false;

  const middleNodes: ReactNode[] = [];

  if (challenge && solution && !skipSolutionIntro) {
    middleNodes.push(
      <MarketingSplitSection
        key="solution-intro"
        slug={content.slug}
        salt={2}
        splitIndex={nextSplitIndex()}
        bgClass="bg-[#f4f4f2]"
        kicker="The solution"
        title={solution.heading}
        blurb={toBlurb(solution.intro)}
        sectionId="customer-solution"
        details={solutionIntroDetails(solution)}
      />,
    );
  }

  if (solution) {
    solution.blocks.forEach((block, i) => {
      middleNodes.push(
        <MarketingSplitSection
          key={`block-${block.heading}`}
          slug={content.slug}
          salt={10 + i}
          splitIndex={nextSplitIndex()}
          bgClass={i % 2 === 0 ? "bg-white" : "bg-[#fafaf9]"}
          kicker="Deep dive"
          title={block.heading}
          blurb={blockLeadBlurb(block)}
          details={
            <CollapsibleDetails label="Tables, scenarios, and frameworks">
              <SolutionBlockDetail block={block} />
            </CollapsibleDetails>
          }
        />,
      );
    });
  }

  if (bundleFrameworks && !skipBundleFrameworks) {
    middleNodes.push(
      <MarketingSplitSection
        key="bundle-frameworks"
        slug={content.slug}
        salt={20}
        splitIndex={nextSplitIndex()}
        bgClass="bg-[#f4f4f2]"
        kicker="Bundle architecture"
        title={bundleFrameworks.heading}
        blurb="Tiered frameworks align SKUs with provider types so bundles stay simple to sell and defend."
        details={
          <CollapsibleDetails label="All tiers and provider types">
            <BundleFrameworksDetail bundleFrameworks={bundleFrameworks} />
          </CollapsibleDetails>
        }
      />,
    );
  }

  if (whyBundlesWork) {
    if (isBundlesGoalPage) {
      middleNodes.push(
        <section key="why-bundles-synced" className="scroll-mt-28 bg-white py-20 md:py-28">
          <div className="mx-auto max-w-6xl px-6">
            <BundlesEconomicsCarousel
              heading={whyBundlesWork.heading}
              kicker="Why bundles work"
              perspectives={whyBundlesWork.perspectives}
              images={getCustomerCarouselImages(content.slug, 21).slice(0, Math.max(whyBundlesWork.perspectives.length, 1))}
              autoplay
              autoplayMs={9000}
            />
            <CollapsibleDetails label="Full perspective copy" align="center">
              <div className="mx-auto mt-2 max-w-3xl space-y-6">
                {whyBundlesWork.perspectives.map((p) => (
                  <div key={p.for}>
                    <p className="mb-1 text-sm font-semibold" style={{ color: MARKETING_ACCENT, fontFamily: "Montserrat, sans-serif" }}>
                      {p.for}
                    </p>
                    <p className="text-sm leading-relaxed text-neutral-600" style={{ fontFamily: "Raleway, sans-serif" }}>
                      {p.benefit}
                    </p>
                  </div>
                ))}
              </div>
            </CollapsibleDetails>
          </div>
        </section>,
      );
    } else {
      middleNodes.push(
        <MarketingDarkIconSection
          key="why-bundles"
          eyebrow="Why bundles work"
          heading={whyBundlesWork.heading}
          items={whyBundlesWork.perspectives.map((p, i) => ({
            icon: ["User", "Building2", "Handshake"][i % 3],
            title: p.for,
            body: p.benefit,
          }))}
        />,
      );
    }
  }

  if (whyNow) {
    middleNodes.push(
      <MarketingSplitSection
        key="why-now"
        slug={content.slug}
        salt={22}
        splitIndex={nextSplitIndex()}
        bgClass="bg-[#fafaf9]"
        kicker="Why now"
        title={whyNow.heading}
        blurb={toBlurb(whyNow.content)}
        details={
          <CollapsibleDetails label="Full narrative">
            <p className="text-neutral-600 leading-relaxed" style={{ fontFamily: "Raleway, sans-serif" }}>
              {whyNow.content}
            </p>
          </CollapsibleDetails>
        }
      />,
    );
  }

  if (outcomes) {
    middleNodes.push(
      <MarketingDarkIconSection
        key="outcomes"
        eyebrow="Outcomes"
        heading={outcomes.heading}
        items={outcomeCardsToDarkItems(outcomes.cards)}
        sectionId="customer-outcomes"
      />,
    );
  }

  if (migrationScenarios) {
    middleNodes.push(
      <MarketingSplitSection
        key="migration"
        slug={content.slug}
        salt={24}
        splitIndex={nextSplitIndex()}
        bgClass="bg-[#f4f4f2]"
        kicker="Migration"
        title={migrationScenarios.heading}
        blurb={
          migrationScenarios.cards[0]
            ? firstSentence(migrationScenarios.cards[0].body)
            : "How teams consolidate or win back base with a managed migration motion."
        }
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
      />,
    );
  }

  if (retentionByProvider) {
    middleNodes.push(
      <MarketingSplitSection
        key="retention"
        slug={content.slug}
        salt={25}
        splitIndex={nextSplitIndex()}
        bgClass="bg-white"
        kicker="Retention"
        title={retentionByProvider.heading}
        blurb="Keep revenue sticky with bundles, lifecycle touchpoints, and provider-specific plays."
        details={
          <CollapsibleDetails label="Plays by provider type">
            <div className="grid gap-4 sm:grid-cols-2">
              {retentionByProvider.cards.map((card, i) => (
                <div key={i} className="rounded-xl border border-neutral-200/80 bg-[#fafaf9] p-5">
                  {"provider" in card && card.provider ? (
                    <h3 className="mb-2 text-base font-semibold" style={{ color: MARKETING_ACCENT, fontFamily: "Montserrat, sans-serif" }}>
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
      />,
    );
  }

  if (stats && stats.length > 0) {
    middleNodes.push(
      <MarketingDarkStatsSectionFromCustomer
        key="stats"
        heading="By the numbers"
        stats={stats}
        sectionId="customer-stats"
      />,
    );
  }

  if (faq && faq.length > 0) {
    middleNodes.push(
      <MarketingSplitSection
        key="faq"
        slug={content.slug}
        salt={31}
        splitIndex={nextSplitIndex()}
        bgClass="bg-white"
        kicker="FAQ"
        title="Questions we hear often"
        blurb={toBlurb(faq[0].a, 200)}
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
      />,
    );
  }

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

      <MarketingHeroSplit
        id="customer-hero"
        imageOnLeft={heroImageOnLeft(content.slug)}
        eyebrow={hero.eyebrow ?? sectionEyebrow}
        headline={hero.headline}
        blurb={[firstSentence(hero.subheadline), toBlurb(hero.description, 180)].filter(Boolean).join(" ")}
        primaryCta={hero.cta.primary}
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
        visual={<CustomerStaticImage slug={content.slug} salt={0} priority className="w-full" />}
      />

      {firstCentered ? (
        <MarketingCenteredSection
          slug={content.slug}
          salt={firstCentered.salt}
          bgClass="bg-white"
          kicker={firstCentered.kicker}
          title={firstCentered.title}
          blurb={firstCentered.blurb}
          details={firstCentered.details}
          sectionId={firstCentered.sectionId}
        />
      ) : null}

      {middleNodes}

      <MarketingPreFooterLight
        headline={cta.headline}
        body={toBlurb(cta.body, 280)}
        buttonText={cta.buttonText}
        slug={content.slug}
        details={
          <CollapsibleDetails label="Full message">
            <p className="text-neutral-600 leading-relaxed" style={{ fontFamily: "Raleway, sans-serif" }}>
              {cta.body}
            </p>
          </CollapsibleDetails>
        }
      />
    </main>
  );
}
