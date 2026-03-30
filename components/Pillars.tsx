import TypewriterOnScroll from "./TypewriterOnScroll";

const pillars = [
  {
    number: "01",
    title: "New Revenue Streams",
    description:
      "Turn your existing customer base into a digital services revenue engine. Every SMB in your footprint needs email, websites, ecommerce, and marketing — and they'd rather buy it from you than a third party. Hostopia gives you the platform to sell it all under your brand, with flexible pricing and packaging you control.",
    accent: "#2CADB2",
  },
  {
    number: "02",
    title: "Digital Advisor Positioning",
    description:
      "Move beyond connectivity. When you deliver branded websites, professional email, SEO, and ecommerce, you become the partner SMBs depend on for their entire digital presence — not just their internet connection. That shift from infrastructure provider to digital advisor drives higher ARPU, deeper relationships, and lower churn.",
    accent: "#F8CF41",
  },
  {
    number: "03",
    title: "Proven Technology at Scale",
    description:
      "25+ years of engineering behind a cloud-based, AI-powered platform that supports millions of mailboxes and websites worldwide. Multi-language, multi-currency, and built for the enterprise demands of telcos and national resellers. You don't need to build it — it's ready now.",
    accent: "#2CADB2",
  },
  {
    number: "04",
    title: "Expert Partner Support",
    description:
      "Dedicated partner success teams, large-scale migration expertise with proprietary tooling, bilingual end-user support, and go-to-market enablement. Hostopia's people become an invisible extension of your team — from onboarding through ongoing optimization.",
    accent: "#F8CF41",
  },
];

export default function Pillars() {
  return (
    <section className="py-28 bg-white">
      <div className="max-w-7xl mx-auto px-6">

        {/* Section header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-20 gap-8">
          <div>
            <div className="flex items-center gap-3 mb-5">
              <div className="w-8 h-px" style={{ backgroundColor: "#F8CF41" }} />
              <span className="section-label">Why Service Providers choose Hostopia</span>
            </div>
            <h2
              className="font-black leading-tight"
              style={{
                fontFamily: "Montserrat, sans-serif",
                fontSize: "clamp(2.5rem, 5vw, 4.5rem)",
                color: "#24282B",
              }}
            >
              Everything You Need
              <br />
              <TypewriterOnScroll />
            </h2>
          </div>
          <p
            className="text-base leading-relaxed max-w-xs md:text-right"
            style={{ fontFamily: "Raleway, sans-serif", color: "#6b7280" }}
          >
            Four pillars that set Hostopia apart — and set your digital services business up for long-term, scalable success.
          </p>
        </div>

        {/* Pillars */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-px bg-gray-100 rounded-3xl overflow-hidden">
          {pillars.map((pillar) => (
            <div
              key={pillar.title}
              className="group bg-white p-10 hover:bg-gray-50 transition-colors duration-300 relative overflow-hidden"
            >
              {/* Big number */}
              <span
                className="block font-black mb-6 leading-none select-none"
                style={{
                  fontFamily: "Montserrat, sans-serif",
                  fontSize: "5rem",
                  color: pillar.accent,
                  opacity: 0.12,
                }}
              >
                {pillar.number}
              </span>

              {/* Accent line */}
              <div
                className="w-10 h-1 rounded-full mb-6 transition-all duration-300 group-hover:w-16"
                style={{ backgroundColor: pillar.accent }}
              />

              <h3
                className="font-black mb-4 text-2xl"
                style={{ fontFamily: "Montserrat, sans-serif", color: "#24282B" }}
              >
                {pillar.title}
              </h3>
              <p
                className="leading-relaxed text-sm"
                style={{ fontFamily: "Raleway, sans-serif", color: "#6b7280" }}
              >
                {pillar.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
