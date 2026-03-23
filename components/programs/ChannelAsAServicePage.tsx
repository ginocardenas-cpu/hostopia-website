import content from "@/content/programs/channel-as-a-service.json";
import {
  DifferentiatorsDarkSection,
  HowItWorksSection,
  ProgramCTADarkSection,
  ProgramHero,
  ProgramsBreadcrumb,
} from "./programSections";

export default function ChannelAsAServicePage() {
  return (
    <main className="pt-24 pb-0">
      <ProgramsBreadcrumb label={content.programName} />
      <ProgramHero
        eyebrow={content.hero.eyebrow}
        headline={content.hero.headline}
        subheadline={content.hero.subheadline}
        cta={content.hero.cta}
        imageFilename={content.hero.image}
        imageAlt={`${content.programName} — white-label sales channel`}
        secondaryHref="#how-it-works"
      />
      <HowItWorksSection {...content.howItWorks} />
      <DifferentiatorsDarkSection {...content.differentiators} />
      <ProgramCTADarkSection {...content.cta} />
    </main>
  );
}
