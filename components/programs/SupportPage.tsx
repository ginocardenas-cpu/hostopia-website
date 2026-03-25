import content from "@/content/programs/support.json";
import {
  HowItWorksSection,
  ProgramCTADarkSection,
  ProgramMarketingHero,
  ProgramsBreadcrumb,
  ReportingSection,
  StatsDarkSection,
  TieredSupportSection,
  UpserveSection,
} from "./programSections";

const imageKey = `programs-${content.slug}`;

export default function SupportPage() {
  let splitIndex = 0;
  return (
    <main className="pb-0 pt-24">
      <ProgramsBreadcrumb label={content.programName} />
      <ProgramMarketingHero content={content} secondaryHref="#tiered-support" />
      <HowItWorksSection {...content.howItWorks} imageKey={imageKey} />
      <TieredSupportSection {...content.tieredSupport} imageKey={imageKey} splitIndex={splitIndex++} />
      <UpserveSection {...content.upserve} imageKey={imageKey} />
      <ReportingSection {...content.reporting} imageKey={imageKey} splitIndex={splitIndex++} />
      <StatsDarkSection {...content.stats} />
      <ProgramCTADarkSection {...content.cta} imageKey={imageKey} />
    </main>
  );
}
