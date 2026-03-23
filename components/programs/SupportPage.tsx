import content from "@/content/programs/support.json";
import {
  HowItWorksSection,
  ProgramCTADarkSection,
  ProgramHero,
  ProgramsBreadcrumb,
  ReportingSection,
  StatsDarkSection,
  TieredSupportSection,
  UpserveSection,
} from "./programSections";

export default function SupportPage() {
  return (
    <main className="pt-24 pb-0">
      <ProgramsBreadcrumb label={content.programName} />
      <ProgramHero
        eyebrow={content.hero.eyebrow}
        headline={content.hero.headline}
        subheadline={content.hero.subheadline}
        cta={content.hero.cta}
        imageFilename={content.hero.image}
        imageAlt={`${content.programName} — multilingual technical support`}
        secondaryHref="#tiered-support"
      />
      <HowItWorksSection {...content.howItWorks} />
      <TieredSupportSection {...content.tieredSupport} />
      <UpserveSection {...content.upserve} />
      <ReportingSection {...content.reporting} />
      <StatsDarkSection {...content.stats} />
      <ProgramCTADarkSection {...content.cta} />
    </main>
  );
}
