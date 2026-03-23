import content from "@/content/programs/partner-marketing.json";
import {
  DifferentiatorsDarkSection,
  HowItWorksSection,
  LifecycleSection,
  ProgramCTADarkSection,
  ProgramHero,
  ProgramsBreadcrumb,
} from "./programSections";

export default function PartnerMarketingPage() {
  return (
    <main className="pt-24 pb-0">
      <ProgramsBreadcrumb label={content.programName} />
      <ProgramHero
        eyebrow={content.hero.eyebrow}
        headline={content.hero.headline}
        subheadline={content.hero.subheadline}
        cta={content.hero.cta}
        imageFilename={content.hero.image}
        imageAlt={`${content.programName} — demand generation and MDF`}
        secondaryHref="#how-it-works"
      />
      <HowItWorksSection {...content.howItWorks} />
      <LifecycleSection {...content.lifecycle} />
      <DifferentiatorsDarkSection {...content.differentiators} />
      <ProgramCTADarkSection {...content.cta} />
    </main>
  );
}
