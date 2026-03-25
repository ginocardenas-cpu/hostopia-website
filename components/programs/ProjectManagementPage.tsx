import content from "@/content/programs/project-management.json";
import {
  DifferentiatorsDarkSection,
  HowItWorksSection,
  MigrationExpertiseSection,
  ProgramCTADarkSection,
  ProgramMarketingHero,
  ProgramsBreadcrumb,
} from "./programSections";

const imageKey = `programs-${content.slug}`;

export default function ProjectManagementPage() {
  let splitIndex = 0;
  return (
    <main className="pb-0 pt-24">
      <ProgramsBreadcrumb label={content.programName} />
      <ProgramMarketingHero content={content} secondaryHref="#migration-expertise" />
      <HowItWorksSection {...content.howItWorks} imageKey={imageKey} />
      <MigrationExpertiseSection {...content.migrationExpertise} imageKey={imageKey} splitIndex={splitIndex++} />
      <DifferentiatorsDarkSection {...content.differentiators} />
      <ProgramCTADarkSection {...content.cta} imageKey={imageKey} />
    </main>
  );
}
