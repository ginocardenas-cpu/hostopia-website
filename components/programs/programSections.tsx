import Link from "next/link";
import ProgramHeroImage from "./ProgramHeroImage";
import { ProgramIcon } from "./programIcon";
import {
  heroImageOnLeft,
  MarketingCenteredSection,
  MarketingDarkIconSection,
  MarketingDarkStatsSection,
  MarketingHeroSplit,
  MarketingPreFooterLight,
  MarketingSplitSection,
} from "@/components/marketing/marketingLayout";

export function ProgramsBreadcrumb({ label }: { label: string }) {
  return (
    <div className="mx-auto max-w-6xl px-6 pb-4 pt-2">
      <nav className="font-raleway text-sm text-gray-500">
        <Link href="/" className="hover:text-teal">
          Home
        </Link>
        <span className="mx-2">/</span>
        <Link href="/programs" className="hover:text-teal">
          Programs
        </Link>
        <span className="mx-2">/</span>
        <span className="text-neutral-900">{label}</span>
      </nav>
    </div>
  );
}

type HeroCta = { primary: string; secondary: string };

type ProgramContentHero = {
  eyebrow: string;
  headline: string;
  subheadline: string;
  cta: HeroCta;
  image: string;
};

export function ProgramMarketingHero({
  content,
  secondaryHref,
}: {
  content: { slug: string; programName: string; hero: ProgramContentHero };
  secondaryHref: string;
}) {
  return (
    <MarketingHeroSplit
      id="program-hero"
      imageOnLeft={heroImageOnLeft(content.slug)}
      eyebrow={content.hero.eyebrow}
      headline={content.hero.headline}
      blurb={content.hero.subheadline}
      primaryCta={content.hero.cta.primary}
      details={
        <p className="mt-4 text-sm text-neutral-500">
          <Link href={secondaryHref} className="font-medium text-teal hover:underline">
            {content.hero.cta.secondary}
          </Link>
        </p>
      }
      visual={<ProgramHeroImage filename={content.hero.image} alt={`${content.programName} — Hostopia program`} />}
    />
  );
}

type IconCard = { icon: string; title: string; body: string };

type HowItWorksProps = {
  eyebrow: string;
  heading: string;
  intro: string;
  cards: IconCard[];
};

export function HowItWorksSection({ eyebrow, heading, intro, cards, imageKey }: HowItWorksProps & { imageKey: string }) {
  const grid =
    cards.length === 3 ? "md:grid-cols-3" : cards.length <= 4 ? "md:grid-cols-2" : "md:grid-cols-2 lg:grid-cols-3";
  return (
    <MarketingCenteredSection
      slug={imageKey}
      salt={1}
      bgClass="bg-white"
      kicker={eyebrow}
      title={heading}
      blurb={intro}
      sectionId="how-it-works"
      maxTextWidth="none"
      afterImage={
        <div className={`mx-auto mt-16 grid max-w-5xl gap-6 ${grid}`}>
          {cards.map((card) => (
            <div
              key={card.title}
              className="rounded-2xl border border-neutral-200/80 bg-gray-50 p-6 text-left shadow-sm"
            >
              <ProgramIcon name={card.icon} className="mb-4" />
              <h3 className="mb-2 font-montserrat text-lg font-black text-charcoal">
                {card.title}
              </h3>
              <p className="text-base leading-relaxed text-gray-500 font-raleway">
                {card.body}
              </p>
            </div>
          ))}
        </div>
      }
    />
  );
}

type DifferentiatorsProps = {
  eyebrow: string;
  heading: string;
  items: IconCard[];
};

export function DifferentiatorsDarkSection({ eyebrow, heading, items }: DifferentiatorsProps) {
  return <MarketingDarkIconSection eyebrow={eyebrow} heading={heading} items={items} />;
}

type LifecycleColumn = { title: string; icon: string; body: string };

type LifecycleProps = {
  eyebrow: string;
  heading: string;
  columns: LifecycleColumn[];
};

export function LifecycleSection({
  eyebrow,
  heading,
  columns,
  imageKey,
  splitIndex,
}: LifecycleProps & { imageKey: string; splitIndex: number }) {
  return (
    <MarketingSplitSection
      slug={imageKey}
      salt={3}
      splitIndex={splitIndex}
      bgClass="bg-gray-50"
      kicker={eyebrow}
      title={heading}
      blurb=""
      details={
        <div className="grid gap-8 md:grid-cols-3">
          {columns.map((col) => (
            <div key={col.title} className="flex flex-col">
              <ProgramIcon name={col.icon} className="mb-4" />
              <h3 className="mb-3 font-montserrat text-xl font-black text-charcoal">
                {col.title}
              </h3>
              <p className="flex-1 text-base leading-relaxed text-gray-500 font-raleway">
                {col.body}
              </p>
            </div>
          ))}
        </div>
      }
    />
  );
}

type MigrationExpertiseProps = {
  eyebrow: string;
  heading: string;
  items: IconCard[];
};

export function MigrationExpertiseSection({
  eyebrow,
  heading,
  items,
  imageKey,
  splitIndex,
}: MigrationExpertiseProps & { imageKey: string; splitIndex: number }) {
  const lead = items[0]?.body ?? "";
  const blurb = lead.length > 200 ? `${lead.slice(0, 200).trim()}…` : lead;
  return (
    <MarketingSplitSection
      slug={imageKey}
      salt={11}
      splitIndex={splitIndex}
      bgClass="bg-white"
      kicker={eyebrow}
      title={heading}
      blurb={blurb}
      sectionId="migration-expertise"
      details={
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {items.map((item) => (
            <div key={item.title} className="flex gap-4">
              <ProgramIcon name={item.icon} className="mt-1 shrink-0" />
              <div>
                <h3 className="mb-1 font-montserrat text-base font-black text-charcoal">
                  {item.title}
                </h3>
                <p className="text-sm leading-relaxed text-neutral-600 md:text-base font-raleway">
                  {item.body}
                </p>
              </div>
            </div>
          ))}
        </div>
      }
    />
  );
}

type Tier = { level: string; title: string; body: string; icon: string };

type TieredSupportProps = {
  eyebrow: string;
  heading: string;
  tiers: Tier[];
};

export function TieredSupportSection({
  eyebrow,
  heading,
  tiers,
  imageKey,
  splitIndex,
}: TieredSupportProps & { imageKey: string; splitIndex: number }) {
  return (
    <MarketingSplitSection
      slug={imageKey}
      salt={5}
      splitIndex={splitIndex}
      bgClass="bg-white"
      kicker={eyebrow}
      title={heading}
      blurb=""
      sectionId="tiered-support"
      details={
        <div className="grid gap-6 md:grid-cols-3">
          {tiers.map((tier) => (
            <div key={tier.level} className="rounded-2xl border border-neutral-200/80 bg-gray-50 p-8 shadow-sm">
              <p className="section-label mb-2">
                {tier.level}
              </p>
              <ProgramIcon name={tier.icon} className="mb-4" />
              <h3 className="mb-3 font-montserrat text-lg font-black text-charcoal">
                {tier.title}
              </h3>
              <p className="text-base leading-relaxed text-gray-500 font-raleway">
                {tier.body}
              </p>
            </div>
          ))}
        </div>
      }
    />
  );
}

type UpserveProps = {
  eyebrow: string;
  heading: string;
  intro: string;
  cards: IconCard[];
};

export function UpserveSection({ eyebrow, heading, intro, cards, imageKey }: UpserveProps & { imageKey: string }) {
  return (
    <MarketingCenteredSection
      slug={imageKey}
      salt={6}
      bgClass="bg-gray-50"
      kicker={eyebrow}
      title={heading}
      blurb={intro}
      sectionId="upserve"
      maxTextWidth="none"
      afterImage={
        <div className="mx-auto mt-16 grid max-w-5xl gap-6 md:grid-cols-3">
          {cards.map((card) => (
            <div key={card.title} className="rounded-2xl border border-neutral-200/80 bg-white p-6 shadow-sm">
              <ProgramIcon name={card.icon} className="mb-4" />
              <h3 className="mb-2 font-montserrat text-lg font-black text-charcoal">
                {card.title}
              </h3>
              <p className="text-base leading-relaxed text-gray-500 font-raleway">
                {card.body}
              </p>
            </div>
          ))}
        </div>
      }
    />
  );
}

type ReportingProps = {
  eyebrow: string;
  heading: string;
  items: IconCard[];
};

export function ReportingSection({
  eyebrow,
  heading,
  items,
  imageKey,
  splitIndex,
}: ReportingProps & { imageKey: string; splitIndex: number }) {
  return (
    <MarketingSplitSection
      slug={imageKey}
      salt={7}
      splitIndex={splitIndex}
      bgClass="bg-white"
      kicker={eyebrow}
      title={heading}
      blurb=""
      details={
        <div className="grid gap-8 sm:grid-cols-2">
          {items.map((item) => (
            <div key={item.title} className="flex gap-4">
              <ProgramIcon name={item.icon} className="mt-1 shrink-0" />
              <div>
                <h3 className="mb-1 font-montserrat text-base font-black text-charcoal">
                  {item.title}
                </h3>
                <p className="text-sm leading-relaxed text-neutral-600 md:text-base font-raleway">
                  {item.body}
                </p>
              </div>
            </div>
          ))}
        </div>
      }
    />
  );
}

type StatItem = { stat: string; label: string };

type StatsProps = {
  heading: string;
  items: StatItem[];
};

export function StatsDarkSection({ heading, items }: StatsProps) {
  return <MarketingDarkStatsSection heading={heading} items={items} />;
}

type CtaProps = {
  headline: string;
  body: string;
  buttonText: string;
};

export function ProgramCTADarkSection({ headline, body, buttonText, imageKey }: CtaProps & { imageKey: string }) {
  return <MarketingPreFooterLight headline={headline} body={body} buttonText={buttonText} slug={imageKey} />;
}
