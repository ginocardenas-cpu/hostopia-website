import Link from "next/link";
import type { ReactNode } from "react";
import { ArrowRight } from "lucide-react";
import BundlesEconomicsCarousel from "@/components/customers/BundlesEconomicsCarousel";
import CustomerStaticImage from "@/components/customers/CustomerStaticImage";
import { BundleFrameworksDetail, SolutionBlockDetail } from "@/components/customers/customerSolutionDetail";
import { getCustomerCarouselImages } from "@/lib/customer-carousel-images";
import type { CustomerStoryContent, CustomerSolution, SolutionBlock } from "@/lib/customer-story-types";

type CustomerStoryPageProps = {
  content: CustomerStoryContent;
  breadcrumbGroup: string;
  sectionEyebrow: string;
};

const ACCENT = "#2CADB2";
const GOLD = "#F8CF41";

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

function heroImageOnLeft(slug: string): boolean {
  let h = 0;
  for (let i = 0; i < slug.length; i++) h = (h * 31 + slug.charCodeAt(i)) >>> 0;
  return h % 2 === 0;
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

function CollapsibleDetails({
  label,
  children,
  align = "start",
}: {
  label: string;
  children: ReactNode;
  align?: "start" | "center";
}) {
  const wrap = align === "center" ? "justify-center" : "";
  return (
    <details className={`group mt-8 border-t border-neutral-200/80 pt-6 ${align === "center" ? "text-center" : "text-left"}`}>
      <summary className="cursor-pointer list-none text-sm font-semibold text-[#2CADB2] transition hover:text-[#249a9f] [&::-webkit-details-marker]:hidden">
        <span className={`inline-flex items-center gap-2 ${wrap}`}>
          {label}
          <span className="text-neutral-400 transition group-open:rotate-180">▼</span>
        </span>
      </summary>
      <div className={`mt-5 ${align === "center" ? "text-left" : ""}`}>{children}</div>
    </details>
  );
}

function HeroSplit({
  slug,
  imageOnLeft,
  eyebrow,
  headline,
  blurb,
  primaryCta,
  secondaryHref,
  secondaryLabel,
  details,
}: {
  slug: string;
  imageOnLeft: boolean;
  eyebrow: string;
  headline: string;
  blurb: string;
  primaryCta: string;
  secondaryHref: string;
  secondaryLabel: string;
  details: ReactNode;
}) {
  const reverse = !imageOnLeft;
  const copy = (
    <div className="flex flex-col justify-center">
      <p className="mb-4 text-xs font-semibold uppercase tracking-[0.2em]" style={{ fontFamily: "Montserrat, sans-serif", color: ACCENT }}>
        {eyebrow}
      </p>
      <h1 className="mb-5 text-3xl font-semibold tracking-tight text-[#24282B] md:text-4xl lg:text-5xl" style={{ fontFamily: "Montserrat, sans-serif" }}>
        {headline}
      </h1>
      {blurb ? (
        <p className="mb-8 max-w-lg text-lg leading-relaxed text-neutral-600" style={{ fontFamily: "Raleway, sans-serif" }}>
          {blurb}
        </p>
      ) : null}
      <SectionCta href="/contact">{primaryCta}</SectionCta>
      {details}
    </div>
  );
  const visual = <CustomerStaticImage slug={slug} salt={0} priority className="w-full" />;

  return (
    <section id="customer-hero" className="scroll-mt-28 bg-[#fafaf9] py-20 md:py-28">
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

function CenteredNarrativeSection({
  slug,
  salt,
  bgClass,
  kicker,
  title,
  blurb,
  details,
  sectionId,
}: {
  slug: string;
  salt: number;
  bgClass: string;
  kicker: string;
  title: string;
  blurb: string;
  details?: ReactNode;
  sectionId?: string;
}) {
  return (
    <section id={sectionId} className={`scroll-mt-28 py-20 md:py-28 ${bgClass}`}>
      <div className="mx-auto max-w-3xl px-6 text-center">
        <p className="mb-4 text-xs font-semibold uppercase tracking-[0.2em]" style={{ fontFamily: "Montserrat, sans-serif", color: ACCENT }}>
          {kicker}
        </p>
        <h2 className="mb-5 text-3xl font-semibold tracking-tight text-[#24282B] md:text-4xl" style={{ fontFamily: "Montserrat, sans-serif" }}>
          {title}
        </h2>
        {blurb ? (
          <p className="mx-auto mb-6 max-w-2xl text-lg leading-relaxed text-neutral-600" style={{ fontFamily: "Raleway, sans-serif" }}>
            {blurb}
          </p>
        ) : null}
        {details}
        <div className="mt-12">
          <CustomerStaticImage slug={slug} salt={salt} className="w-full" />
        </div>
      </div>
    </section>
  );
}

function SplitSectionStatic({
  slug,
  salt,
  reverse,
  bgClass,
  kicker,
  title,
  blurb,
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
  details?: ReactNode;
  sectionId?: string;
}) {
  const copy = (
    <div className="flex flex-col justify-center">
      <p className="mb-4 text-xs font-semibold uppercase tracking-[0.2em]" style={{ fontFamily: "Montserrat, sans-serif", color: ACCENT }}>
        {kicker}
      </p>
      <h2 className="mb-5 text-3xl font-semibold tracking-tight text-[#24282B] md:text-4xl" style={{ fontFamily: "Montserrat, sans-serif" }}>
        {title}
      </h2>
      {blurb ? (
        <p className="mb-6 max-w-lg text-lg leading-relaxed text-neutral-600" style={{ fontFamily: "Raleway, sans-serif" }}>
          {blurb}
        </p>
      ) : null}
      {details}
    </div>
  );
  const visual = <CustomerStaticImage slug={slug} salt={salt} className="w-full" />;

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
            <blockquote className="mt-6 border-l-4 pl-5 text-base font-medium italic text-[#24282B]" style={{ borderColor: ACCENT }}>
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

  let splitReverse = false;
  const nextSplitReverse = () => {
    const r = splitReverse;
    splitReverse = !splitReverse;
    return r;
  };

  const skipBundleFrameworks = firstCentered?.consumesBundleFrameworks ?? false;
  const skipSolutionIntro = firstCentered?.consumesSolutionIntro ?? false;

  const middleNodes: ReactNode[] = [];

  if (challenge && solution && !skipSolutionIntro) {
    middleNodes.push(
      <SplitSectionStatic
        key="solution-intro"
        slug={content.slug}
        salt={2}
        reverse={nextSplitReverse()}
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
        <SplitSectionStatic
          key={`block-${block.heading}`}
          slug={content.slug}
          salt={10 + i}
          reverse={nextSplitReverse()}
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
      <SplitSectionStatic
        key="bundle-frameworks"
        slug={content.slug}
        salt={20}
        reverse={nextSplitReverse()}
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
                    <p className="mb-1 text-sm font-semibold" style={{ color: ACCENT, fontFamily: "Montserrat, sans-serif" }}>
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
        <SplitSectionStatic
          key="why-bundles"
          slug={content.slug}
          salt={21}
          reverse={nextSplitReverse()}
          bgClass="bg-white"
          kicker="Why bundles work"
          title={whyBundlesWork.heading}
          blurb={toBlurb(whyBundlesWork.perspectives.map((p) => p.benefit).join(" "), 200)}
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
        />,
      );
    }
  }

  if (whyNow) {
    middleNodes.push(
      <SplitSectionStatic
        key="why-now"
        slug={content.slug}
        salt={22}
        reverse={nextSplitReverse()}
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
      <SplitSectionStatic
        key="outcomes"
        slug={content.slug}
        salt={23}
        reverse={nextSplitReverse()}
        bgClass="bg-white"
        kicker="Outcomes"
        title={outcomes.heading}
        blurb={outcomes.cards[0] ? firstSentence(outcomes.cards[0].body) : toBlurb(outcomes.heading)}
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
      />,
    );
  }

  if (migrationScenarios) {
    middleNodes.push(
      <SplitSectionStatic
        key="migration"
        slug={content.slug}
        salt={24}
        reverse={nextSplitReverse()}
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
      <SplitSectionStatic
        key="retention"
        slug={content.slug}
        salt={25}
        reverse={nextSplitReverse()}
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
      />,
    );
  }

  if (stats && stats.length > 0) {
    middleNodes.push(
      <SplitSectionStatic
        key="stats"
        slug={content.slug}
        salt={30}
        reverse={nextSplitReverse()}
        bgClass="bg-[#f4f4f2]"
        kicker="Signal"
        title="By the numbers"
        blurb="Market signals that frame the opportunity for your portfolio."
        details={
          <div className="grid grid-cols-2 gap-6 pt-2">
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
        }
      />,
    );
  }

  if (faq && faq.length > 0) {
    middleNodes.push(
      <SplitSectionStatic
        key="faq"
        slug={content.slug}
        salt={31}
        reverse={nextSplitReverse()}
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

      <HeroSplit
        slug={content.slug}
        imageOnLeft={heroImageOnLeft(content.slug)}
        eyebrow={hero.eyebrow ?? sectionEyebrow}
        headline={hero.headline}
        blurb={[firstSentence(hero.subheadline), toBlurb(hero.description, 180)].filter(Boolean).join(" ")}
        primaryCta={hero.cta.primary}
        secondaryHref={secondaryHref}
        secondaryLabel={hero.cta.secondary}
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

      {firstCentered ? (
        <CenteredNarrativeSection
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

      <section className="bg-[#fafaf9] py-20 md:py-28">
        <div className="mx-auto max-w-3xl px-6 text-center">
          <p className="mb-4 text-xs font-semibold uppercase tracking-[0.2em]" style={{ fontFamily: "Montserrat, sans-serif", color: ACCENT }}>
            Next step
          </p>
          <h2 className="mb-5 text-3xl font-semibold tracking-tight text-[#24282B] md:text-4xl" style={{ fontFamily: "Montserrat, sans-serif" }}>
            {cta.headline}
          </h2>
          <p className="mx-auto mb-8 max-w-2xl text-lg leading-relaxed text-neutral-600" style={{ fontFamily: "Raleway, sans-serif" }}>
            {toBlurb(cta.body, 280)}
          </p>
          <SectionCta href="/contact">{cta.buttonText}</SectionCta>
          <CollapsibleDetails label="Full message">
            <p className="text-neutral-600 leading-relaxed" style={{ fontFamily: "Raleway, sans-serif" }}>
              {cta.body}
            </p>
          </CollapsibleDetails>
          <div className="mx-auto mt-12 max-w-5xl">
            <CustomerStaticImage slug={content.slug} salt={40} className="w-full" />
          </div>
        </div>
      </section>
    </main>
  );
}
