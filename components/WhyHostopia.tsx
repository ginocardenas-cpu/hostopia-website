const points = [
  { label: "You brand it.", detail: "We build and run it.", accentClass: "bg-teal" as const },
  { label: "You set the pricing.", detail: "We power the platform.", accentClass: "bg-gold" as const },
  { label: "You own the customer.", detail: "We handle the complexity.", accentClass: "bg-teal" as const },
  { label: "You grow the revenue.", detail: "We ensure the reliability.", accentClass: "bg-gold" as const },
];

export default function WhyHostopia() {
  return (
    <section id="about" className="bg-white py-28">
      <div className="mx-auto max-w-7xl px-6">
        <div className="overflow-hidden rounded-3xl bg-charcoal">
          <div className="grid lg:grid-cols-2">
            {/* Left: Text */}
            <div className="border-b border-white/10 p-12 md:p-16 lg:border-b-0 lg:border-r">
              <div className="mb-6 flex items-center gap-3">
                <div className="h-px w-8 bg-gold" />
                <span className="section-label">Why Hostopia</span>
              </div>

              <h2 className="mb-8 font-montserrat text-4xl font-black leading-tight text-white sm:text-5xl lg:text-7xl">
                The Partner You Want
                <br />
                <span className="text-teal">Behind Your Brand.</span>
              </h2>

              <p className="mb-6 font-raleway text-base leading-relaxed text-white/70">
                Hostopia is more than a technology vendor. We&apos;re a strategic partner with 25+ years
                of experience in the service provider business — the pressures, the opportunities, and
                what it takes to make SMBs loyal customers for life.
              </p>

              <p className="mb-10 font-raleway text-base leading-relaxed text-white/70">
                We&apos;ve helped hundreds of telcos, ISPs, and resellers launch, package, and grow digital
                service portfolios across markets worldwide.
              </p>

              <a
                href="#partner"
                className="inline-flex items-center gap-2 rounded-full bg-gold px-8 py-4 font-raleway text-sm font-semibold uppercase tracking-wide text-charcoal transition-colors duration-200 hover:bg-gold-dark"
              >
                Talk to a Partner Expert
              </a>
            </div>

            {/* Right: Points */}
            <div className="flex flex-col justify-center p-12 md:p-16">
              <p className="section-label mb-8">The Hostopia Model</p>
              <div className="space-y-0 divide-y divide-white/10">
                {points.map((point) => (
                  <div key={point.label} className="flex items-center gap-5 py-6">
                    <div className={`h-2.5 w-2.5 shrink-0 rounded-full ${point.accentClass}`} />
                    <div>
                      <span className="font-montserrat text-lg font-black text-white">{point.label}</span>{" "}
                      <span className="font-raleway text-base text-white/70">{point.detail}</span>
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
