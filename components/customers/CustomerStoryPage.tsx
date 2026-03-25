import Link from "next/link";
import type { ReactNode } from "react";
import BundlesEconomicsCarousel from "@/components/customers/BundlesEconomicsCarousel";
import CustomerStaticImage from "@/components/customers/CustomerStaticImage";
import { BundleFrameworksDetail, SolutionBlockDetail } from "@/components/customers/customerSolutionDetail";
import { getCustomerCarouselImages } from "@/lib/customer-carousel-images";
import { splitLeadRest } from "@/lib/customer-copy-split";
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
  return "Structured breakdowns, tables, and frameworks for this topic.";
}

type FirstCentered = {
  kicker: string;
  title: string;
  blurb: string;
  salt: number;
  sectionId?: string;
  appendBeforeImage: ReactNode;
  consumesBundleFrameworks: boolean;
  consumesSolutionIntro: boolean;
};

function resolveFirstCentered(content: CustomerStoryContent): FirstCentered | null {
  if (content.challenge) {
    const ch = content.challenge;
    const { lead, rest } = splitLeadRest(ch.content, 2);
    return {
      kicker: "The challenge",
      title: ch.heading,
      blurb: lead,
      salt: 1,
      sectionId: "customer-challenge",
      consumesBundleFrameworks: false,
      consumesSolutionIntro: false,
      appendBeforeImage: (
        <div className="space-y-6">
          {rest ? (
            <p className="leading-relaxed text-neutral-600" style={{ fontFamily: "Raleway, sans-serif" }}>
              {rest}
            </p>
          ) : null}
          {ch.callout ? (
            <blockquote
              className="border-l-4 pl-5 font-raleway text-base font-medium italic text-charcoal"
              style={{ borderColor: MARKETING_ACCENT }}
            >
              {ch.callout}
            </blockquote>
          ) : null}
          {ch.sources && ch.sources.length > 0 ? (
            <div>
              <p
                className="mb-2 text-xs font-bold uppercase tracking-wider text-neutral-400"
                style={{ fontFamily: "Montserrat, sans-serif" }}
              >
                Sources
              </p>
              <ul className="space-y-1 text-sm text-neutral-600" style={{ fontFamily: "Raleway, sans-serif" }}>
                {ch.sources.map((s) => (
                  <li key={s}>{s}</li>
                ))}
              </ul>
            </div>
          ) : null}
        </div>
      ),
    };
  }
  if (content.solution) {
    const sol = content.solution;
    const { lead, rest } = splitLeadRest(sol.intro, 2);
    return {
      kicker: "The solution",
      title: sol.heading,
      blurb: lead,
      salt: 2,
      sectionId: "customer-solution",
      consumesBundleFrameworks: false,
      consumesSolutionIntro: true,
      appendBeforeImage:
        rest ? (
          <p className="leading-relaxed text-neutral-600" style={{ fontFamily: "Raleway, sans-serif" }}>
            {rest}
          </p>
        ) : null,
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
      appendBeforeImage: <BundleFrameworksDetail bundleFrameworks={bf} />,
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

  const heroNarrative = [hero.subheadline, hero.description].filter(Boolean).join(" ");
  const { lead: heroLead, rest: heroRest } = splitLeadRest(heroNarrative, 3);
  const { lead: ctaLead, rest: ctaRest } = splitLeadRest(cta.body, 2);

  let splitIdx = 0;
  const nextSplitIndex = () => splitIdx++;

  const skipBundleFrameworks = firstCentered?.consumesBundleFrameworks ?? false;
  const skipSolutionIntro = firstCentered?.consumesSolutionIntro ?? false;

  const middleNodes: ReactNode[] = [];

  if (challenge && solution && !skipSolutionIntro) {
    const { lead, rest } = splitLeadRest(solution.intro, 2);
    middleNodes.push(
      <MarketingSplitSection
        key="solution-intro"
        slug={content.slug}
        salt={2}
        splitIndex={nextSplitIndex()}
        bgClass="bg-cream"
        kicker="The solution"
        title={solution.heading}
        blurb={lead}
        appendBeforeImage={
          rest ? (
            <p className="text-sm leading-relaxed text-neutral-600" style={{ fontFamily: "Raleway, sans-serif" }}>
              {rest}
            </p>
          ) : null
        }
        sectionId="customer-solution"
      />,
    );
  }

  if (solution) {
    solution.blocks.forEach((block, i) => {
      let blurb: string;
      let appendBeforeImage: ReactNode;
      if (block.content) {
        const { lead, rest } = splitLeadRest(block.content, 2);
        blurb = lead;
        appendBeforeImage = (
          <>
            {rest ? (
              <p className="mb-6 text-sm leading-relaxed text-neutral-600" style={{ fontFamily: "Raleway, sans-serif" }}>
                {rest}
              </p>
            ) : null}
            <SolutionBlockDetail block={block} skipContentParagraph />
          </>
        );
      } else {
        blurb = blockLeadBlurb(block);
        appendBeforeImage = <SolutionBlockDetail block={block} />;
      }
      middleNodes.push(
        <MarketingSplitSection
          key={`block-${block.heading}`}
          slug={content.slug}
          salt={10 + i}
          splitIndex={nextSplitIndex()}
          bgClass={i % 2 === 0 ? "bg-white" : "bg-gray-50"}
          kicker="Deep dive"
          title={block.heading}
          blurb={blurb}
          appendBeforeImage={appendBeforeImage}
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
        bgClass="bg-cream"
        kicker="Bundle architecture"
        title={bundleFrameworks.heading}
        blurb="Tiered frameworks align SKUs with provider types so bundles stay simple to sell and defend."
        appendBeforeImage={<BundleFrameworksDetail bundleFrameworks={bundleFrameworks} />}
      />,
    );
  }

  if (whyBundlesWork) {
    if (isBundlesGoalPage) {
      middleNodes.push(
        <section key="why-bundles-synced" className="scroll-mt-28 bg-white py-28">
          <div className="mx-auto max-w-6xl px-6">
            <BundlesEconomicsCarousel
              heading={whyBundlesWork.heading}
              kicker="Why bundles work"
              perspectives={whyBundlesWork.perspectives}
              images={getCustomerCarouselImages(content.slug, 21).slice(0, Math.max(whyBundlesWork.perspectives.length, 1))}
              autoplay
              autoplayMs={9000}
            />
          </div>
        </section>,
      );
    } else {
      middleNodes.push(
        <MarketingDarkIconSection
          key="why-bundles"
          eyebrow="Why bundles work"
          heading={whyBundlesWork.heading}
          useFontAwesomeIcons
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
    const { lead, rest } = splitLeadRest(whyNow.content, 2);
    middleNodes.push(
      <MarketingSplitSection
        key="why-now"
        slug={content.slug}
        salt={22}
        splitIndex={nextSplitIndex()}
        bgClass="bg-gray-50"
        kicker="Why now"
        title={whyNow.heading}
        blurb={lead}
        appendBeforeImage={
          rest ? (
            <p className="text-sm leading-relaxed text-neutral-600" style={{ fontFamily: "Raleway, sans-serif" }}>
              {rest}
            </p>
          ) : null
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
        useFontAwesomeIcons
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
        bgClass="bg-cream"
        kicker="Migration"
        title={migrationScenarios.heading}
        blurb="Platform, timing, and economics for each path — with plays you can operationalize with sales and success teams."
        appendBeforeImage={
          <div className="grid gap-4 sm:grid-cols-2">
            {migrationScenarios.cards.map((card) => (
              <div key={card.title} className="rounded-xl border border-neutral-200/80 bg-white p-5">
                <h3 className="mb-2 font-montserrat text-base font-black text-charcoal">
                  {card.title}
                </h3>
                <p className="text-sm leading-relaxed text-neutral-600" style={{ fontFamily: "Raleway, sans-serif" }}>
                  {card.body}
                </p>
              </div>
            ))}
          </div>
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
        blurb="Keep revenue sticky with bundles, lifecycle touchpoints, and provider-specific retention plays."
        appendBeforeImage={
          <div className="grid gap-4 sm:grid-cols-2">
            {retentionByProvider.cards.map((card, i) => (
              <div key={i} className="rounded-xl border border-neutral-200/80 bg-gray-50 p-5">
                {"provider" in card && card.provider ? (
                  <h3 className="mb-2 font-montserrat text-base font-black text-teal">
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
        useFontAwesomeIcons
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
        blurb="Straight answers on how we work with provider teams and programs."
        appendBeforeImage={
          <div className="space-y-8">
            {faq.map((item) => (
              <div key={item.q.slice(0, 48)}>
                <h3 className="mb-2 font-montserrat text-base font-black text-charcoal">
                  {item.q}
                </h3>
                <p className="text-sm leading-relaxed text-neutral-600" style={{ fontFamily: "Raleway, sans-serif" }}>
                  {item.a}
                </p>
              </div>
            ))}
          </div>
        }
      />,
    );
  }

  return (
    <main className="pb-0 pt-24">
      <div className="mx-auto max-w-6xl px-6 pb-6 pt-2">
        <nav className="text-sm text-neutral-500" style={{ fontFamily: "Raleway, sans-serif" }}>
          <Link href="/" className="hover:text-teal">
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
        blurb={heroLead}
        primaryCta={hero.cta.primary}
        details={
          <>
            {heroRest.length > 24 ? (
              <CollapsibleDetails label="Continue reading">
                <p className="text-neutral-600 leading-relaxed" style={{ fontFamily: "Raleway, sans-serif" }}>
                  {heroRest}
                </p>
              </CollapsibleDetails>
            ) : null}
            <p className={`text-sm text-neutral-500 ${heroRest.length > 24 ? "mt-4" : "mt-6"}`}>
              <Link href={secondaryHref} className="font-medium text-teal hover:underline">
                {hero.cta.secondary}
              </Link>
            </p>
          </>
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
          appendBeforeImage={firstCentered.appendBeforeImage}
          sectionId={firstCentered.sectionId}
        />
      ) : null}

      {middleNodes}

      <MarketingPreFooterLight
        headline={cta.headline}
        body={ctaLead}
        buttonText={cta.buttonText}
        slug={content.slug}
        details={
          ctaRest.length > 24 ? (
            <CollapsibleDetails label="More detail">
              <p className="text-neutral-600 leading-relaxed" style={{ fontFamily: "Raleway, sans-serif" }}>
                {ctaRest}
              </p>
            </CollapsibleDetails>
          ) : undefined
        }
      />
    </main>
  );
}
