import { MoveRight, CheckCircle, Clock, Database, Wifi } from "lucide-react";

const migrationFeatures = [
  {
    icon: Clock,
    title: "Zero Downtime",
    desc: "Customers never know the switch happened. Business continues uninterrupted throughout the entire migration.",
  },
  {
    icon: Database,
    title: "Massive Scale",
    desc: "We've migrated millions of mailboxes, thousands of domains, and hundreds of websites — simultaneously.",
  },
  {
    icon: Wifi,
    title: "Full Data Integrity",
    desc: "Every email, contact, calendar event, and file is validated pre- and post-migration. Nothing gets left behind.",
  },
];

const migrationTypes = [
  "Email Migrations",
  "Domain Transfers",
  "Website Migrations",
  "DNS Migrations",
  "Contact & Calendar Sync",
  "Control Panel Transfers",
];

export default function Migrations() {
  return (
    <section id="migrations" className="py-24 bg-white relative overflow-hidden">
      {/* Background accent */}
      <div className="absolute -top-32 -right-32 w-96 h-96 rounded-full bg-indigo-100 blur-3xl pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        {/* Section header */}
        <div className="text-center mb-16">
          <span className="inline-block text-indigo-600 text-xs font-bold tracking-widest uppercase mb-4">
            Migration Capabilities
          </span>
          <h2 className="text-4xl md:text-5xl font-black text-slate-900 mb-4">
            Large-Scale Migrations.{" "}
            <span className="bg-gradient-to-r from-indigo-600 to-violet-600 bg-clip-text text-transparent">
              Zero Drama.
            </span>
          </h2>
          <p className="text-slate-500 text-lg max-w-2xl mx-auto">
            Switching platforms is one of the biggest risks for any service
            provider. Hostopia eliminates that risk entirely. We&apos;ve mastered
            the art of enterprise-scale migrations with guaranteed uptime.
          </p>
        </div>

        {/* Main content block */}
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left: Visual */}
          <div className="relative">
            <div className="rounded-3xl bg-gradient-to-br from-indigo-900 to-slate-900 p-8 border border-indigo-500/20">
              {/* Migration flow diagram */}
              <div className="text-center mb-8">
                <span className="text-slate-400 text-xs font-semibold uppercase tracking-widest">
                  Migration Flow
                </span>
              </div>

              <div className="flex items-center justify-center gap-4 mb-8">
                {/* Old platform */}
                <div className="flex-1 rounded-xl bg-slate-800 border border-slate-700 p-4 text-center">
                  <div className="w-8 h-8 rounded-lg bg-slate-600 mx-auto mb-2 flex items-center justify-center">
                    <Database size={14} className="text-slate-300" />
                  </div>
                  <p className="text-slate-300 text-xs font-semibold">Old Platform</p>
                  <p className="text-slate-500 text-[10px] mt-1">Any provider</p>
                </div>

                {/* Arrow */}
                <div className="flex flex-col items-center gap-1">
                  <MoveRight size={24} className="text-orange-500" />
                  <span className="text-orange-400 text-[10px] font-bold">ZERO DOWNTIME</span>
                </div>

                {/* Hostopia */}
                <div className="flex-1 rounded-xl bg-gradient-to-br from-indigo-600 to-violet-600 p-4 text-center shadow-lg shadow-indigo-500/25">
                  <div className="w-8 h-8 rounded-lg bg-white/20 mx-auto mb-2 flex items-center justify-center">
                    <Database size={14} className="text-white" />
                  </div>
                  <p className="text-white text-xs font-semibold">Hostopia</p>
                  <p className="text-indigo-200 text-[10px] mt-1">Your brand</p>
                </div>
              </div>

              {/* Migration types */}
              <div className="grid grid-cols-2 gap-2">
                {migrationTypes.map((type) => (
                  <div
                    key={type}
                    className="flex items-center gap-2 bg-white/5 rounded-lg px-3 py-2"
                  >
                    <CheckCircle size={12} className="text-emerald-400 flex-shrink-0" />
                    <span className="text-slate-300 text-xs font-medium">{type}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Floating stat badges */}
            <div className="absolute -top-4 -left-4 bg-emerald-500 text-white rounded-2xl px-4 py-3 shadow-xl shadow-emerald-500/30">
              <p className="text-xl font-black">99.99%</p>
              <p className="text-emerald-100 text-xs">Uptime guaranteed</p>
            </div>
            <div className="absolute -bottom-4 -right-4 bg-orange-500 text-white rounded-2xl px-4 py-3 shadow-xl shadow-orange-500/30">
              <p className="text-xl font-black">20M+</p>
              <p className="text-orange-100 text-xs">Mailboxes migrated</p>
            </div>
          </div>

          {/* Right: Features */}
          <div>
            <h3 className="text-2xl font-bold text-slate-900 mb-3">
              The Migration Problem — Solved
            </h3>
            <p className="text-slate-500 mb-8 leading-relaxed">
              Migrating thousands of customers from an old platform to a new one
              used to mean risk, complaints, and churn. Hostopia has engineered
              that risk out of the equation entirely — so you can make the switch
              confidently and at any scale.
            </p>

            <div className="space-y-6">
              {migrationFeatures.map((feature) => {
                const Icon = feature.icon;
                return (
                  <div key={feature.title} className="flex gap-4">
                    <div className="w-11 h-11 rounded-xl bg-indigo-50 flex items-center justify-center flex-shrink-0">
                      <Icon size={20} className="text-indigo-600" />
                    </div>
                    <div>
                      <h4 className="font-bold text-slate-900 mb-1">{feature.title}</h4>
                      <p className="text-slate-500 text-sm leading-relaxed">{feature.desc}</p>
                    </div>
                  </div>
                );
              })}
            </div>

            <div className="mt-8 p-5 rounded-2xl bg-indigo-50 border border-indigo-100">
              <p className="text-indigo-800 text-sm font-semibold">
                &ldquo;We moved 2.3 million mailboxes over a long weekend. No tickets. No complaints.&rdquo;
              </p>
              <p className="text-indigo-500 text-xs mt-2">— Hostopia Migration Team</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
