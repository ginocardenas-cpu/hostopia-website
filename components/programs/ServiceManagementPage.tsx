import content from "@/content/programs/service-management.json";
import {
  DifferentiatorsDarkSection,
  HowItWorksSection,
  ProgramCTADarkSection,
  ProgramHero,
  ProgramsBreadcrumb,
} from "./programSections";

export default function ServiceManagementPage() {
  return (
    <main className="pt-24 pb-0">
      <ProgramsBreadcrumb label={content.programName} />
      <ProgramHero
        eyebrow={content.hero.eyebrow}
        headline={content.hero.headline}
        subheadline={content.hero.subheadline}
        cta={content.hero.cta}
        imageFilename={content.hero.image}
        imageAlt={`${content.programName} — dedicated account ownership`}
        secondaryHref="#how-it-works"
      />
      <HowItWorksSection {...content.howItWorks} />
      <DifferentiatorsDarkSection {...content.differentiators} />
      <ProgramCTADarkSection {...content.cta} />
    </main>
  );
}
