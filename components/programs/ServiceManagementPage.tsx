import content from "@/content/programs/service-management.json";
import {
  DifferentiatorsDarkSection,
  HowItWorksSection,
  ProgramCTADarkSection,
  ProgramMarketingHero,
  ProgramsBreadcrumb,
} from "./programSections";

const imageKey = `programs-${content.slug}`;

export default function ServiceManagementPage() {
  return (
    <main className="pb-0 pt-24">
      <ProgramsBreadcrumb label={content.programName} />
      <ProgramMarketingHero content={content} secondaryHref="#how-it-works" />
      <HowItWorksSection {...content.howItWorks} imageKey={imageKey} />
      <DifferentiatorsDarkSection {...content.differentiators} />
      <ProgramCTADarkSection {...content.cta} imageKey={imageKey} />
    </main>
  );
}
