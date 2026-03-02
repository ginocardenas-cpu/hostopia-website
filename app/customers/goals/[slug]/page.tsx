type CustomerGoalsPageProps = {
  params: { slug: string };
};

const GOAL_TITLES: Record<string, string> = {
  bundles: "Bundles",
  "differentiate-core": "Differentiate Core",
  "grow-existing-revenues": "Grow Existing Revenues",
  "improve-retention": "Improve Retention",
  "migrate-and-save": "Migrate and Save",
  "new-revenue-streams": "New Revenue Streams",
};

export default function CustomerGoalsPage({ params }: CustomerGoalsPageProps) {
  const title = GOAL_TITLES[params.slug] ?? "Customer Goal";

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

