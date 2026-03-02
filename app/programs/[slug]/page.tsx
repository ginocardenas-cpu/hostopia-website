type ProgramsPageProps = {
  params: { slug: string };
};

const PROGRAM_TITLES: Record<string, string> = {
  "channel-as-a-service": "Channel as a Service",
  "partner-marketing": "Partner Marketing",
  "project-management": "Project Management",
  "service-management": "Service Management",
  support: "Support",
};

export default function ProgramsPage({ params }: ProgramsPageProps) {
  const title = PROGRAM_TITLES[params.slug] ?? "Program";

  return (
    <main className="min-h-[60vh] pt-24 pb-16 px-6">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-3xl font-bold text-gray-900 mb-4">{title}</h1>
        <p className="text-gray-600">
          Detailed content for <strong>{title}</strong> will be added here.
        </p>
      </div>
    </main>
  );
}

