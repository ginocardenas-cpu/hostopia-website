const points = [
  {
    label: "You brand it.",
    detail: "We build and run it.",
    accent: "#2CADB2",
  },
  {
    label: "You set the pricing.",
    detail: "We power the platform.",
    accent: "#F8CF41",
  },
  {
    label: "You own the customer.",
    detail: "We handle the complexity.",
    accent: "#2CADB2",
  },
  {
    label: "You grow the revenue.",
    detail: "We ensure the reliability.",
    accent: "#F8CF41",
  },
];

export default function WhyHostopia() {
  return (
    <section id="about" className="py-28 bg-white">
      <div className="max-w-7xl mx-auto px-6">

        {/* Full-bleed charcoal panel */}
        <div
          className="rounded-3xl overflow-hidden"
          style={{ backgroundColor: "#24282B" }}
        >
          <div className="grid lg:grid-cols-2">

            {/* Left: Text */}
            <div className="p-12 md:p-16 border-b lg:border-b-0 lg:border-r border-white/10">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-8 h-px" style={{ backgroundColor: "#F8CF41" }} />
                <span className="section-label" style={{ color: "#2CADB2" }}>Why Hostopia</span>
              </div>

              <h2
                className="font-black leading-tight mb-8"
                style={{
                  fontFamily: "Montserrat, sans-serif",
                  fontSize: "clamp(2rem, 4vw, 3.5rem)",
                  color: "#ffffff",
                }}
              >
                The Partner You Want
                <br />
                <span style={{ color: "#F8CF41" }}>Behind Your Brand.</span>
              </h2>

              <p
                className="text-base leading-relaxed mb-6"
                style={{ fontFamily: "Raleway, sans-serif", color: "#9ca3af" }}
              >
                Hostopia is more than a technology vendor. We&apos;re a strategic partner with 25+ years of experience in the service provider business — the pressures, the opportunities, and what it takes to make SMBs loyal customers for life.
              </p>

              <p
                className="text-base leading-relaxed mb-10"
                style={{ fontFamily: "Raleway, sans-serif", color: "#9ca3af" }}
              >
                We&apos;ve helped hundreds of telcos, ISPs, and resellers launch, package, and grow digital service portfolios across markets worldwide.
              </p>

              <a
                href="#partner"
                className="inline-flex items-center gap-2 font-bold px-8 py-4 rounded-full transition-all duration-200 hover:scale-105"
                style={{
                  fontFamily: "Montserrat, sans-serif",
                  backgroundColor: "#F8CF41",
                  color: "#24282B",
                  boxShadow: "0 4px 20px rgba(248,207,65,0.25)",
                }}
              >
                Talk to a Partner Expert
              </a>
            </div>

            {/* Right: Points */}
            <div className="p-12 md:p-16 flex flex-col justify-center">
              <p
                className="text-xs font-bold uppercase tracking-widest mb-8"
                style={{ fontFamily: "Montserrat, sans-serif", color: "#2CADB2" }}
              >
                The Hostopia Model
              </p>
              <div className="space-y-0 divide-y divide-white/10">
                {points.map((point) => (
                  <div key={point.label} className="py-6 flex items-center gap-5">
                    <div
                      className="w-2.5 h-2.5 rounded-full flex-shrink-0"
                      style={{ backgroundColor: point.accent }}
                    />
                    <div>
                      <span
                        className="font-black text-lg"
                        style={{ fontFamily: "Montserrat, sans-serif", color: "#ffffff" }}
                      >
                        {point.label}
                      </span>{" "}
                      <span
                        className="text-base"
                        style={{ fontFamily: "Raleway, sans-serif", color: "#9ca3af" }}
                      >
                        {point.detail}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
