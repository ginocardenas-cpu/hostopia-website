import Link from "next/link";
import type { ReactNode } from "react";
import { ArrowRight } from "lucide-react";
import CustomerStaticImage from "@/components/customers/CustomerStaticImage";
import { MarketingFaIcon } from "@/components/marketing/MarketingFaIcon";
import { ProgramIcon } from "@/components/programs/programIcon";

export const MARKETING_ACCENT = "#2CADB2";
export const MARKETING_GOLD = "#F8CF41";
export const MARKETING_DARK_BG = "#24282B";

export function heroImageOnLeft(slug: string): boolean {
  let h = 0;
  for (let i = 0; i < slug.length; i++) h = (h * 31 + slug.charCodeAt(i)) >>> 0;
  return h % 2 === 0;
}

export function SectionCta({ href, children }: { href: string; children: ReactNode }) {
  return (
    <Link
      href={href}
      className="inline-flex w-fit items-center gap-2 rounded-full px-7 py-3 text-sm font-semibold text-[#24282B] shadow-sm transition hover:scale-[1.02] hover:shadow-md"
      style={{ fontFamily: "Montserrat, sans-serif", backgroundColor: MARKETING_GOLD }}
    >
      {children}
      <ArrowRight className="h-4 w-4" aria-hidden />
    </Link>
  );
}

export function CollapsibleDetails({
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

type MarketingHeroSplitProps = {
  id?: string;
  imageOnLeft: boolean;
  eyebrow: string;
  headline: string;
  blurb: string;
  primaryCta: string;
  primaryHref?: string;
  details: ReactNode;
  visual: ReactNode;
  className?: string;
};

export function MarketingHeroSplit({
  id,
  imageOnLeft,
  eyebrow,
  headline,
  blurb,
  primaryCta,
  primaryHref = "/contact",
  details,
  visual,
  className = "bg-[#fafaf9]",
}: MarketingHeroSplitProps) {
  const reverse = !imageOnLeft;
  const copy = (
    <div className="flex flex-col justify-center">
      <p className="mb-4 text-xs font-semibold uppercase tracking-[0.2em]" style={{ fontFamily: "Montserrat, sans-serif", color: MARKETING_ACCENT }}>
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
      <SectionCta href={primaryHref}>{primaryCta}</SectionCta>
      {details}
    </div>
  );

  return (
    <section id={id} className={`scroll-mt-28 py-20 md:py-28 ${className}`}>
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

type MarketingCenteredSectionProps = {
  slug: string;
  salt: number;
  bgClass: string;
  kicker: string;
  title: string;
  blurb: string;
  /** Rich content after the blurb, before the hero image (not inside a collapsible). */
  appendBeforeImage?: ReactNode;
  details?: ReactNode;
  afterImage?: ReactNode;
  sectionId?: string;
  maxTextWidth?: "3xl" | "none";
};

export function MarketingCenteredSection({
  slug,
  salt,
  bgClass,
  kicker,
  title,
  blurb,
  appendBeforeImage,
  details,
  afterImage,
  sectionId,
  maxTextWidth = "3xl",
}: MarketingCenteredSectionProps) {
  const wrap = maxTextWidth === "3xl" ? "max-w-3xl mx-auto" : "mx-auto max-w-6xl";
  return (
    <section id={sectionId} className={`scroll-mt-28 py-20 md:py-28 ${bgClass}`}>
      <div className={`px-6 text-center ${wrap}`}>
        <p className="mb-4 text-xs font-semibold uppercase tracking-[0.2em]" style={{ fontFamily: "Montserrat, sans-serif", color: MARKETING_ACCENT }}>
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
        {appendBeforeImage ? <div className="mx-auto mb-10 max-w-3xl text-left">{appendBeforeImage}</div> : null}
        {details}
        <div className="mt-12">
          <CustomerStaticImage slug={slug} salt={salt} className="w-full" />
        </div>
        {afterImage}
      </div>
    </section>
  );
}

type MarketingSplitSectionProps = {
  slug: string;
  salt: number;
  splitIndex: number;
  bgClass: string;
  kicker: string;
  title: string;
  blurb: string;
  appendBeforeImage?: ReactNode;
  details?: ReactNode;
  sectionId?: string;
  visual?: ReactNode;
};

export function MarketingSplitSection({
  slug,
  salt,
  splitIndex,
  bgClass,
  kicker,
  title,
  blurb,
  appendBeforeImage,
  details,
  sectionId,
  visual,
}: MarketingSplitSectionProps) {
  const visualOnLeft = splitIndex % 2 === 0;
  const defaultVisual = <CustomerStaticImage slug={slug} salt={salt} className="w-full" />;
  const viz = visual ?? defaultVisual;
  const copy = (
    <div className="flex flex-col justify-center">
      <p className="mb-4 text-xs font-semibold uppercase tracking-[0.2em]" style={{ fontFamily: "Montserrat, sans-serif", color: MARKETING_ACCENT }}>
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
      {appendBeforeImage ? <div className="mb-6 max-w-xl">{appendBeforeImage}</div> : null}
      {details}
    </div>
  );

  return (
    <section id={sectionId} className={`scroll-mt-28 py-20 md:py-28 ${bgClass}`}>
      <div className="mx-auto max-w-6xl px-6">
        <div className="grid items-center gap-12 md:grid-cols-2 md:gap-16 lg:gap-20">
          {visualOnLeft ? (
            <>
              {viz}
              {copy}
            </>
          ) : (
            <>
              {copy}
              {viz}
            </>
          )}
        </div>
      </div>
    </section>
  );
}

const STAT_ICON_CYCLE = ["TrendingUp", "Target", "ShieldCheck", "Layers", "BarChart3", "Rocket", "Globe", "Handshake"];

export type DarkIconItem = { icon: string; title: string; body: string };

type MarketingDarkIconSectionProps = {
  eyebrow: string;
  heading: string;
  items: DarkIconItem[];
  sectionId?: string;
  /** Customer story pages use Font Awesome for a distinct, polished B2B icon treatment. */
  useFontAwesomeIcons?: boolean;
};

export function MarketingDarkIconSection({
  eyebrow,
  heading,
  items,
  sectionId,
  useFontAwesomeIcons = false,
}: MarketingDarkIconSectionProps) {
  return (
    <section id={sectionId} className="scroll-mt-28 py-20 md:py-28" style={{ backgroundColor: MARKETING_DARK_BG }}>
      <div className="mx-auto max-w-6xl px-6">
        <div className="mb-5 flex items-center gap-3">
          <div className="h-px w-8" style={{ backgroundColor: MARKETING_ACCENT }} />
          <span className="text-xs font-semibold uppercase tracking-[0.2em] text-neutral-400" style={{ fontFamily: "Montserrat, sans-serif" }}>
            {eyebrow}
          </span>
        </div>
        <h2
          className="mb-10 max-w-3xl text-3xl font-semibold leading-tight tracking-tight text-white md:text-4xl"
          style={{ fontFamily: "Montserrat, sans-serif" }}
        >
          {heading}
        </h2>
        <div className="grid gap-6 md:grid-cols-2">
          {items.map((item) => (
            <div key={item.title} className="rounded-2xl border border-white/10 bg-white/5 p-6">
              {useFontAwesomeIcons ? (
                <MarketingFaIcon name={item.icon} className="mb-4" size={26} />
              ) : (
                <ProgramIcon name={item.icon} className="mb-4" size={26} />
              )}
              <h3 className="mb-2 text-lg font-semibold text-white" style={{ fontFamily: "Montserrat, sans-serif" }}>
                {item.title}
              </h3>
              <p className="text-base leading-relaxed text-neutral-300" style={{ fontFamily: "Raleway, sans-serif" }}>
                {item.body}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

type StatLine = { stat: string; label: string };

type MarketingDarkStatsSectionProps = {
  heading: string;
  items: StatLine[];
  sectionId?: string;
  useFontAwesomeIcons?: boolean;
};

export function MarketingDarkStatsSection({ heading, items, sectionId, useFontAwesomeIcons = false }: MarketingDarkStatsSectionProps) {
  return (
    <section id={sectionId} className="py-20 md:py-28" style={{ backgroundColor: MARKETING_DARK_BG }}>
      <div className="mx-auto max-w-6xl px-6 text-center">
        <h2
          className="mx-auto mb-14 max-w-3xl text-3xl font-semibold leading-tight tracking-tight text-white md:text-4xl"
          style={{ fontFamily: "Montserrat, sans-serif" }}
        >
          {heading}
        </h2>
        <ul className="mx-auto flex max-w-5xl flex-row flex-wrap justify-center gap-x-10 gap-y-12 sm:gap-x-14 md:gap-x-16">
          {items.map((item, i) => (
            <li
              key={item.label}
              className="flex w-[calc(50%-1.25rem)] max-w-[220px] flex-col items-center text-center sm:w-40 sm:max-w-none md:w-44"
            >
              <div className="mb-3 flex justify-center">
                {useFontAwesomeIcons ? (
                  <MarketingFaIcon name={STAT_ICON_CYCLE[i % STAT_ICON_CYCLE.length]} size={28} />
                ) : (
                  <ProgramIcon name={STAT_ICON_CYCLE[i % STAT_ICON_CYCLE.length]} size={28} />
                )}
              </div>
              <p className="mb-2 text-3xl font-semibold md:text-4xl" style={{ fontFamily: "Montserrat, sans-serif", color: MARKETING_ACCENT }}>
                {item.stat}
              </p>
              <p className="text-sm leading-snug text-neutral-300 md:text-base" style={{ fontFamily: "Raleway, sans-serif" }}>
                {item.label}
              </p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

/** Customer stats use `value` / `label`; programs use `stat` / `label`. */
export function MarketingDarkStatsSectionFromCustomer({
  heading,
  stats,
  sectionId,
  useFontAwesomeIcons,
}: {
  heading: string;
  stats: Array<{ value: string; label: string }>;
  sectionId?: string;
  useFontAwesomeIcons?: boolean;
}) {
  return MarketingDarkStatsSection({
    heading,
    items: stats.map((s) => ({ stat: s.value, label: s.label })),
    sectionId,
    useFontAwesomeIcons,
  });
}

type MarketingPreFooterLightProps = {
  kicker?: string;
  headline: string;
  body: string;
  buttonText: string;
  slug: string;
  salt?: number;
  details?: ReactNode;
};

export function MarketingPreFooterLight({
  kicker = "Next step",
  headline,
  body,
  buttonText,
  slug,
  salt = 40,
  details,
}: MarketingPreFooterLightProps) {
  return (
    <section className="bg-[#fafaf9] py-20 md:py-28">
      <div className="mx-auto max-w-3xl px-6 text-center">
        <p className="mb-4 text-xs font-semibold uppercase tracking-[0.2em]" style={{ fontFamily: "Montserrat, sans-serif", color: MARKETING_ACCENT }}>
          {kicker}
        </p>
        <h2 className="mb-5 text-3xl font-semibold tracking-tight text-[#24282B] md:text-4xl" style={{ fontFamily: "Montserrat, sans-serif" }}>
          {headline}
        </h2>
        <p className="mx-auto mb-8 max-w-2xl text-lg leading-relaxed text-neutral-600" style={{ fontFamily: "Raleway, sans-serif" }}>
          {body}
        </p>
        <SectionCta href="/contact">{buttonText}</SectionCta>
        {details}
        <div className="mx-auto mt-12 max-w-5xl">
          <CustomerStaticImage slug={slug} salt={salt} className="w-full" />
        </div>
      </div>
    </section>
  );
}

export function outcomeCardsToDarkItems(
  cards: Array<{ title: string; body: string }>,
  iconCycle: string[] = ["Target", "TrendingUp", "ShieldCheck", "Rocket", "Layers", "Globe", "Handshake", "Megaphone"],
): DarkIconItem[] {
  return cards.map((c, i) => ({
    icon: iconCycle[i % iconCycle.length],
    title: c.title,
    body: c.body,
  }));
}
