import { MessageCircle, Star, Globe2 } from "lucide-react";

const supportStats = [
  { value: "2", label: "Languages", sub: "English & French" },
  { value: "24/7", label: "Availability", sub: "Always on" },
  { value: "< 60s", label: "Response Time", sub: "First reply SLA" },
  { value: "98%", label: "CSAT Score", sub: "Customer satisfaction" },
];

export default function BilingualSupport() {
  return (
    <section id="support" className="py-24 bg-white relative overflow-hidden">
      <div className="absolute -bottom-32 -left-32 w-96 h-96 rounded-full bg-emerald-100 blur-3xl pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left: Support chat UI mockup */}
          <div className="relative order-2 lg:order-1">
            <div className="rounded-3xl bg-slate-900 border border-slate-700 p-6 shadow-2xl">
              {/* Chat header */}
              <div className="flex items-center gap-3 pb-5 border-b border-slate-700 mb-5">
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-emerald-500 to-teal-600 flex items-center justify-center">
                  <MessageCircle size={18} className="text-white" />
                </div>
                <div>
                  <p className="text-white font-semibold text-sm">Partner Support</p>
                  <div className="flex items-center gap-1">
                    <div className="w-2 h-2 rounded-full bg-emerald-400" />
                    <span className="text-emerald-400 text-xs">Online — Bilingual</span>
                  </div>
                </div>
                <div className="ml-auto flex gap-1">
                  <div className="text-2xl">🇨🇦</div>
                  <div className="text-2xl">🇺🇸</div>
                </div>
              </div>

              {/* Chat messages */}
              <div className="space-y-4 mb-5">
                {/* Agent message */}
                <div className="flex gap-3">
                  <div className="w-8 h-8 rounded-full bg-emerald-600 flex items-center justify-center flex-shrink-0">
                    <span className="text-white text-xs font-bold">H</span>
                  </div>
                  <div className="bg-slate-800 rounded-2xl rounded-tl-none px-4 py-3 max-w-xs">
                    <p className="text-slate-200 text-sm">
                      Hello! How can I assist you today? / Bonjour! Comment puis-je vous aider?
                    </p>
                  </div>
                </div>

                {/* User message */}
                <div className="flex gap-3 justify-end">
                  <div className="bg-indigo-600 rounded-2xl rounded-tr-none px-4 py-3 max-w-xs">
                    <p className="text-white text-sm">
                      We need help migrating 50,000 mailboxes by end of month.
                    </p>
                  </div>
                </div>

                {/* Agent message */}
                <div className="flex gap-3">
                  <div className="w-8 h-8 rounded-full bg-emerald-600 flex items-center justify-center flex-shrink-0">
                    <span className="text-white text-xs font-bold">H</span>
                  </div>
                  <div className="bg-slate-800 rounded-2xl rounded-tl-none px-4 py-3 max-w-xs">
                    <p className="text-slate-200 text-sm">
                      Absolutely! I&apos;ll connect you with our migration specialist right away. We&apos;ve done this thousands of times.
                    </p>
                    <div className="flex gap-1 mt-2">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} size={10} className="text-orange-400 fill-orange-400" />
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              {/* Input area */}
              <div className="flex items-center gap-3 bg-slate-800 rounded-xl p-3">
                <input
                  type="text"
                  placeholder="Type your message..."
                  className="flex-1 bg-transparent text-slate-300 text-sm placeholder-slate-500 outline-none"
                  readOnly
                />
                <button className="w-8 h-8 rounded-lg bg-emerald-500 flex items-center justify-center">
                  <MessageCircle size={14} className="text-white" />
                </button>
              </div>
            </div>

            {/* Floating badge */}
            <div className="absolute -top-5 -right-5 bg-white rounded-2xl shadow-xl border border-slate-100 px-4 py-3">
              <div className="flex items-center gap-2">
                <Globe2 size={16} className="text-emerald-500" />
                <div>
                  <p className="text-slate-900 font-bold text-xs">Bilingual</p>
                  <p className="text-slate-400 text-[10px]">EN & FR</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right: Text */}
          <div className="order-1 lg:order-2">
            <span className="inline-block text-emerald-600 text-xs font-bold tracking-widest uppercase mb-4">
              Bilingual Support
            </span>
            <h2 className="text-4xl md:text-5xl font-black text-slate-900 mb-6 leading-tight">
              Support That Sounds{" "}
              <span className="bg-gradient-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent">
                Like You.
              </span>
            </h2>
            <p className="text-slate-500 text-lg leading-relaxed mb-6">
              In Canada&apos;s bilingual market, the ability to provide seamless
              English and French customer support isn&apos;t optional — it&apos;s a
              competitive necessity. Hostopia provides full bilingual support,
              delivered in your brand&apos;s voice.
            </p>
            <p className="text-slate-500 leading-relaxed mb-8">
              Your customers interact with <strong className="text-slate-700">your brand</strong>,
              supported by <strong className="text-slate-700">our people</strong>. We never break
              the white-label experience, even in support tickets, chat, or
              phone calls.
            </p>

            {/* Stats */}
            <div className="grid grid-cols-2 gap-4">
              {supportStats.map((stat) => (
                <div
                  key={stat.label}
                  className="rounded-2xl bg-slate-50 border border-slate-100 p-5"
                >
                  <p className="text-2xl font-black text-slate-900">{stat.value}</p>
                  <p className="text-slate-700 text-sm font-semibold">{stat.label}</p>
                  <p className="text-slate-400 text-xs">{stat.sub}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
