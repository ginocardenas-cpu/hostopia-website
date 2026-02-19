import { Megaphone, BookOpen, Target, Users2 } from "lucide-react";

const gtmServices = [
  {
    icon: Megaphone,
    title: "Co-Branded Marketing",
    description:
      "Ready-to-use campaigns, assets, and messaging that help you take Hostopia-powered products to market fast. Digital ads, email campaigns, landing pages, and more.",
  },
  {
    icon: BookOpen,
    title: "Sales Enablement",
    description:
      "Battle cards, pitch decks, and training programs that arm your sales teams with everything they need to have confident SMB conversations about digital services.",
  },
  {
    icon: Target,
    title: "Product Positioning",
    description:
      "Strategic guidance on packaging, pricing, and positioning Hostopia products within your existing portfolio. We help you find the right bundle for your market.",
  },
  {
    icon: Users2,
    title: "Partner Success Management",
    description:
      "A dedicated partner success team that reviews your metrics, identifies growth opportunities, and ensures you're maximizing the value of the Hostopia platform.",
  },
];

export default function GoToMarket() {
  return (
    <section className="py-24 bg-slate-950 relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-indigo-500/30 to-transparent" />
      <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-indigo-500/30 to-transparent" />

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Left: Text */}
          <div className="lg:sticky lg:top-32">
            <span className="inline-block text-orange-400 text-xs font-bold tracking-widest uppercase mb-4">
              Go-to-Market Services
            </span>
            <h2 className="text-4xl md:text-5xl font-black text-white mb-6 leading-tight">
              We Help You{" "}
              <span className="text-gradient">Sell It,</span>
              <br />
              Not Just Build It.
            </h2>
            <p className="text-slate-400 text-lg leading-relaxed mb-8">
              Launching a new digital service is one thing. Building the revenue
              engine around it is another. Hostopia&apos;s go-to-market expertise
              helps service providers accelerate adoption, increase ARPU, and
              reduce churn from day one.
            </p>
            <div className="rounded-2xl bg-white/5 border border-white/10 p-6">
              <p className="text-slate-300 text-sm leading-relaxed">
                <span className="text-white font-semibold">The Hostopia advantage:</span> We&apos;ve
                helped dozens of telcos and resellers launch, package, and grow
                digital service portfolios. That experience informs every
                recommendation we make for your business.
              </p>
            </div>
          </div>

          {/* Right: GTM service cards */}
          <div className="grid gap-5">
            {gtmServices.map((service, i) => {
              const Icon = service.icon;
              return (
                <div
                  key={service.title}
                  className="group flex gap-5 rounded-2xl p-6 bg-white/5 border border-white/10 hover:border-white/20 hover:bg-white/8 transition-all duration-300"
                >
                  <div className="w-11 h-11 rounded-xl bg-gradient-to-br from-orange-500 to-red-600 flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                    <Icon size={20} className="text-white" />
                  </div>
                  <div>
                    <h4 className="text-white font-bold mb-2">{service.title}</h4>
                    <p className="text-slate-400 text-sm leading-relaxed">
                      {service.description}
                    </p>
                  </div>
                  <div className="flex-shrink-0 self-start">
                    <span className="text-slate-600 text-sm font-black">0{i + 1}</span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
