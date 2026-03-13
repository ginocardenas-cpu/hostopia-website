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
    <main className="min-h-[60vh] pt-28 pb-16 px-6" style={{ backgroundColor: "#f7f6f2" }}>
      <div className="max-w-7xl mx-auto">
        <div className="flex items-center gap-3 mb-5">
          <div className="w-8 h-px" style={{ backgroundColor: "#2CADB2" }} />
          <span className="section-label">Customer Goals</span>
        </div>
        <h1
          className="font-black leading-tight mb-4"
          style={{ fontFamily: "Montserrat, sans-serif", fontSize: "clamp(2rem, 4vw, 3.5rem)", color: "#24282B" }}
        >
          {title}
        </h1>
        <p style={{ fontFamily: "Raleway, sans-serif", color: "#555a5e" }}>
          Detailed content for <strong>{title}</strong> will be added here.
        </p>
      </div>
    </main>
  );
}
