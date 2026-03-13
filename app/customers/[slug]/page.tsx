type CustomersPageProps = {
  params: { slug: string };
};

const CUSTOMER_TYPE_TITLES: Record<string, string> = {
  cablecos: "Cablecos",
  distributors: "Distributors",
  isps: "ISPs",
  "mobile-carriers": "Mobile Carriers",
  registrars: "Registrars",
  resellers: "Resellers",
  telcos: "Telcos",
};

export default function CustomersPage({ params }: CustomersPageProps) {
  const title = CUSTOMER_TYPE_TITLES[params.slug] ?? "Customer Type";

  return (
    <main className="min-h-[60vh] pt-28 pb-16 px-6" style={{ backgroundColor: "#f7f6f2" }}>
      <div className="max-w-7xl mx-auto">
        <div className="flex items-center gap-3 mb-5">
          <div className="w-8 h-px" style={{ backgroundColor: "#2CADB2" }} />
          <span className="section-label">Who We Serve</span>
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
