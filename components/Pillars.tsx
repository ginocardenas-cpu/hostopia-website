import { Cpu, Users, Layers } from "lucide-react";

const pillars = [
  {
    icon: Layers,
    title: "Platforms",
    color: "from-cyan-500 to-blue-600",
    shadow: "shadow-cyan-500/25",
    description:
      "Enterprise-grade, battle-tested platforms for email, web presence, ecommerce, and digital marketing — fully white-labeled and ready for your brand.",
  },
  {
    icon: Users,
    title: "People",
    color: "from-violet-500 to-purple-700",
    shadow: "shadow-violet-500/25",
    description:
      "Dedicated teams who understand the service provider business. From migrations to bilingual support, our people become an extension of yours.",
  },
  {
    icon: Cpu,
    title: "Technology",
    color: "from-orange-500 to-red-600",
    shadow: "shadow-orange-500/25",
    description:
      "Cutting-edge infrastructure that powers millions of mailboxes and websites. Built for scale, reliability, and the demands of enterprise service providers.",
  },
];

export default function Pillars() {
  return (
    <section className="py-24 bg-slate-950 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-[#060d2e] to-slate-950 pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        {/* Section header */}
        <div className="text-center mb-16">
          <span className="inline-block text-cyan-400 text-xs font-bold tracking-widest uppercase mb-4">
            Our Foundation
          </span>
          <h2 className="text-4xl md:text-5xl font-black text-white mb-4">
            Everything You Need.{" "}
            <span className="text-gradient">Nothing You Don&apos;t.</span>
          </h2>
          <p className="text-slate-400 text-lg max-w-2xl mx-auto">
            Three core pillars that give service providers a complete, turnkey
            solution for selling digital services to SMBs.
          </p>
        </div>

        {/* Pillars grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {pillars.map((pillar) => {
            const Icon = pillar.icon;
            return (
              <div
                key={pillar.title}
                className="group relative rounded-3xl p-8 bg-white/5 border border-white/10 hover:border-white/20 hover:bg-white/8 transition-all duration-300 hover:-translate-y-1"
              >
                {/* Icon */}
                <div
                  className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${pillar.color} ${pillar.shadow} shadow-lg flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}
                >
                  <Icon size={24} className="text-white" />
                </div>

                {/* Content */}
                <h3 className="text-2xl font-bold text-white mb-3">
                  {pillar.title}
                </h3>
                <p className="text-slate-400 leading-relaxed">
                  {pillar.description}
                </p>

                {/* Hover gradient border effect */}
                <div
                  className={`absolute inset-0 rounded-3xl bg-gradient-to-br ${pillar.color} opacity-0 group-hover:opacity-5 transition-opacity duration-300 pointer-events-none`}
                />
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
