import content from "@/content/programs/project-management.json";
import {
  DifferentiatorsDarkSection,
  HowItWorksSection,
  MigrationExpertiseSection,
  ProgramCTADarkSection,
  ProgramHero,
  ProgramsBreadcrumb,
} from "./programSections";

export default function ProjectManagementPage() {
  return (
    <main className="pt-24 pb-0">
      <ProgramsBreadcrumb label={content.programName} />
      <ProgramHero
        eyebrow={content.hero.eyebrow}
        headline={content.hero.headline}
        subheadline={content.hero.subheadline}
        cta={content.hero.cta}
        imageFilename={content.hero.image}
        imageAlt={`${content.programName} — deployments and migrations`}
        secondaryHref="#migration-expertise"
      />
      <HowItWorksSection {...content.howItWorks} />
      <MigrationExpertiseSection {...content.migrationExpertise} />
      <DifferentiatorsDarkSection {...content.differentiators} />
      <ProgramCTADarkSection {...content.cta} />
    </main>
  );
}
