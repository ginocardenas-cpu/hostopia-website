import { ArrowRight, CheckCircle2, Zap } from "lucide-react";

const badges = [
  "Zero-Downtime Migrations",
  "Bilingual Support",
  "White-Label Ready",
];

const stats = [
  { value: "500+", label: "Service Provider Partners" },
  { value: "99.99%", label: "Platform Uptime" },
  { value: "20M+", label: "Mailboxes Migrated" },
  { value: "2", label: "Languages Supported" },
];

export default function Hero() {
  return (
    <section className="relative min-h-screen bg-hero-gradient flex items-center overflow-hidden pt-20">
      {/* Background decorative orbs */}
      <div className="absolute top-20 left-10 w-96 h-96 rounded-full bg-indigo-600/20 blur-3xl pointer-events-none" />
      <div className="absolute bottom-20 right-10 w-80 h-80 rounded-full bg-violet-600/20 blur-3xl pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-cyan-500/5 blur-3xl pointer-events-none" />

      {/* Grid overlay */}
      <div
        className="absolute inset-0 opacity-10 pointer-events-none"
        style={{
          backgroundImage:
            "linear-gradient(rgba(99,102,241,0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(99,102,241,0.3) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-6 py-24 w-full">
        <div className="max-w-4xl">
          {/* Eyebrow */}
          <div className="inline-flex items-center gap-2 bg-white/10 border border-white/20 rounded-full px-4 py-2 mb-8">
            <Zap size={14} className="text-orange-400" />
            <span className="text-slate-300 text-xs font-semibold tracking-widest uppercase">
              Wholesale &amp; White-Label Digital Services
            </span>
          </div>

          {/* Headline */}
          <h1 className="text-5xl md:text-7xl font-black text-white leading-[1.05] tracking-tight mb-6">
            The Platform
            <br />
            <span className="text-gradient">Behind the Brands</span>
            <br />
            That Power
            <br />
            Small Business.
          </h1>

          {/* Subheadline */}
          <p className="text-lg md:text-xl text-slate-300 leading-relaxed mb-8 max-w-2xl">
            Hostopia gives telcos, resellers, and distributors everything they
            need to launch, grow, and retain SMB customers — email, websites,
            ecommerce, digital marketing, and beyond. Fully white-label. Proven
            at scale.
          </p>

          {/* Feature badges */}
          <div className="flex flex-wrap gap-3 mb-10">
            {badges.map((badge) => (
              <div
                key={badge}
                className="flex items-center gap-2 bg-white/10 border border-white/15 rounded-full px-4 py-2"
              >
                <CheckCircle2 size={14} className="text-cyan-400" />
                <span className="text-slate-200 text-sm font-medium">
                  {badge}
                </span>
              </div>
            ))}
          </div>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row gap-4">
            <a
              href="#partner"
              className="group inline-flex items-center justify-center gap-2 bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-400 hover:to-orange-500 text-white font-bold px-8 py-4 rounded-full text-base shadow-xl shadow-orange-500/30 hover:shadow-orange-500/50 transition-all duration-200 hover:scale-105"
            >
              Become a Partner
              <ArrowRight
                size={18}
                className="group-hover:translate-x-1 transition-transform"
              />
            </a>
            <a
              href="#solutions"
              className="inline-flex items-center justify-center gap-2 border border-white/25 hover:border-white/50 text-white font-semibold px-8 py-4 rounded-full text-base transition-all duration-200 hover:bg-white/5"
            >
              Explore Solutions
            </a>
          </div>
        </div>

        {/* Stats Row */}
        <div className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-6">
          {stats.map((stat) => (
            <div
              key={stat.label}
              className="glass rounded-2xl p-6 text-center hover:bg-white/10 transition-colors duration-300"
            >
              <div className="text-3xl md:text-4xl font-black text-white mb-1">
                {stat.value}
              </div>
              <div className="text-slate-400 text-xs font-medium uppercase tracking-wider">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
