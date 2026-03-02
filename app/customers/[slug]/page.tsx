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

