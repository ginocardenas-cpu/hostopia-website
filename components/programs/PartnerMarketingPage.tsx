import content from "@/content/programs/partner-marketing.json";
import {
  DifferentiatorsDarkSection,
  HowItWorksSection,
  LifecycleSection,
  ProgramCTADarkSection,
  ProgramMarketingHero,
  ProgramsBreadcrumb,
} from "./programSections";

const imageKey = `programs-${content.slug}`;

export default function PartnerMarketingPage() {
  let splitIndex = 0;
  return (
    <main className="pb-0 pt-24">
      <ProgramsBreadcrumb label={content.programName} />
      <ProgramMarketingHero content={content} secondaryHref="#how-it-works" />
      <HowItWorksSection {...content.howItWorks} imageKey={imageKey} />
      <LifecycleSection {...content.lifecycle} imageKey={imageKey} splitIndex={splitIndex++} />
      <DifferentiatorsDarkSection {...content.differentiators} />
      <ProgramCTADarkSection {...content.cta} imageKey={imageKey} />
    </main>
  );
}
