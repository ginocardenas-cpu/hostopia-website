import { Shield, BarChart3, Handshake, Rocket } from "lucide-react";

const reasons = [
  {
    icon: Shield,
    title: "Proven at Enterprise Scale",
    description:
      "We've powered some of the largest digital services launches in North America. When you partner with Hostopia, you're backed by years of enterprise-grade experience — not a startup experiment.",
    color: "text-cyan-500",
    bg: "bg-cyan-500/10",
  },
  {
    icon: Rocket,
    title: "Fast Time to Market",
    description:
      "Our white-label platforms are ready to deploy. With turnkey go-to-market playbooks, onboarding support, and co-branded materials, you can launch new revenue streams in weeks, not months.",
    color: "text-orange-500",
    bg: "bg-orange-500/10",
  },
  {
    icon: BarChart3,
    title: "New Revenue Streams",
    description:
      "Every Hostopia service is designed to help you upsell, cross-sell, and retain customers. Add measurable ARPU with products your SMBs actually need and use every day.",
    color: "text-violet-500",
    bg: "bg-violet-500/10",
  },
  {
    icon: Handshake,
    title: "A True Partner — Not Just a Vendor",
    description:
      "We're invested in your success. Our teams provide strategic guidance, marketing co-op support, sales enablement, and ongoing partner success management at every stage of growth.",
    color: "text-emerald-500",
    bg: "bg-emerald-500/10",
  },
];

export default function WhyHostopia() {
  return (
    <section id="about" className="py-24 bg-slate-950 relative overflow-hidden">
      {/* Background accent */}
      <div className="absolute top-0 right-0 w-96 h-96 rounded-full bg-indigo-600/10 blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-64 h-64 rounded-full bg-cyan-500/10 blur-3xl pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left: Text */}
          <div>
            <span className="inline-block text-orange-400 text-xs font-bold tracking-widest uppercase mb-4">
              Why Hostopia
            </span>
            <h2 className="text-4xl md:text-5xl font-black text-white mb-6 leading-tight">
              We Don&apos;t Just Give You a Platform.{" "}
              <span className="text-gradient">We Help You Win.</span>
            </h2>
            <p className="text-slate-400 text-lg leading-relaxed mb-8">
              Hostopia is more than a technology provider. We&apos;re a strategic
              partner who understands the service provider business — the
              pressures, the opportunities, and what it takes to make SMBs loyal
              customers for life.
            </p>
            <div className="flex flex-col gap-4">
              <div className="flex items-center gap-3">
                <div className="w-2 h-2 rounded-full bg-orange-500" />
                <span className="text-slate-300 text-sm">
                  <strong className="text-white">You brand it.</strong> We build
                  and run it.
                </span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-2 h-2 rounded-full bg-cyan-500" />
                <span className="text-slate-300 text-sm">
                  <strong className="text-white">You set the pricing.</strong>{" "}
                  We power the platform.
                </span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-2 h-2 rounded-full bg-violet-500" />
                <span className="text-slate-300 text-sm">
                  <strong className="text-white">You own the customer.</strong>{" "}
                  We handle the complexity.
                </span>
              </div>
            </div>

            <a
              href="#partner"
              className="inline-flex items-center gap-2 mt-10 bg-gradient-to-r from-orange-500 to-orange-600 text-white font-bold px-8 py-4 rounded-full shadow-xl shadow-orange-500/25 hover:shadow-orange-500/40 hover:scale-105 transition-all duration-200"
            >
              Talk to a Partner Expert
            </a>
          </div>

          {/* Right: Reason cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            {reasons.map((reason) => {
              const Icon = reason.icon;
              return (
                <div
                  key={reason.title}
                  className="rounded-2xl p-6 bg-white/5 border border-white/10 hover:border-white/20 transition-all duration-300 hover:-translate-y-1"
                >
                  <div className={`w-10 h-10 rounded-xl ${reason.bg} flex items-center justify-center mb-4`}>
                    <Icon size={20} className={reason.color} />
                  </div>
                  <h4 className="text-white font-bold text-sm mb-2">
                    {reason.title}
                  </h4>
                  <p className="text-slate-400 text-xs leading-relaxed">
                    {reason.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
