const pillars = [
  {
    number: "01",
    title: "Platforms",
    description:
      "Enterprise-grade, battle-tested platforms for email, web presence, ecommerce, and digital marketing — fully white-labeled and ready for your brand identity. You set the pricing. We power everything underneath.",
    accent: "#2CADB2",
  },
  {
    number: "02",
    title: "People",
    description:
      "Dedicated teams who live and breathe the service provider business. From large-scale migrations to bilingual customer support, our people become an invisible extension of your team.",
    accent: "#F8CF41",
  },
  {
    number: "03",
    title: "Technology",
    description:
      "Cutting-edge infrastructure powering millions of mailboxes and websites at proven scale. Built for reliability, security, and the enterprise demands of telcos and national resellers.",
    accent: "#2CADB2",
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
              <span className="section-label">Our Foundation</span>
            </div>
            <h2
              className="font-black leading-tight"
              style={{
                fontFamily: "Montserrat, sans-serif",
                fontSize: "clamp(2.5rem, 5vw, 4.5rem)",
                color: "#24282B",
              }}
            >
              Everything You Need.
              <br />
              <span style={{ color: "#2CADB2" }} className="inline-flex items-baseline">
                <span className="inline-block overflow-hidden whitespace-nowrap animate-typewriter-reveal">
                  Nothing You Don&apos;t.
                </span>
                <span
                  className="animate-typewriter-cursor ml-0.5"
                  style={{ color: "#2CADB2" }}
                  aria-hidden
                >
                  |
                </span>
              </span>
            </h2>
          </div>
          <p
            className="text-base leading-relaxed max-w-xs md:text-right"
            style={{ fontFamily: "Raleway, sans-serif", color: "#6b7280" }}
          >
            Three pillars that give service providers a complete, turnkey solution for selling digital services to SMBs.
          </p>
        </div>

        {/* Pillars */}
        <div className="grid md:grid-cols-3 gap-px bg-gray-100 rounded-3xl overflow-hidden">
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
                className="font-black mb-4 text-3xl"
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
