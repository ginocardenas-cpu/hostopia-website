import { Building2, Network, Store, Globe } from "lucide-react";

const partnerTypes = [
  {
    icon: Building2,
    title: "Telcos & Carriers",
    description:
      "Add high-margin digital services to your connectivity bundle. Retain customers with email, web, and ecommerce — products they use every single day.",
  },
  {
    icon: Network,
    title: "Resellers & Distributors",
    description:
      "Expand your product catalog with in-demand SMB digital tools. White-label Hostopia's platform and offer a complete suite without building anything.",
  },
  {
    icon: Store,
    title: "Domain Registrars",
    description:
      "Complement your domain business with email hosting, website builders, and online store capabilities. Turn one-time sales into recurring monthly revenue.",
  },
  {
    icon: Globe,
    title: "ISPs & Hosting Companies",
    description:
      "Move up the value chain. Add SMB-focused digital marketing, ecommerce, and professional services to your infrastructure business.",
  },
];

export default function PartnerTypes() {
  return (
    <section id="platform" className="py-24 bg-gradient-to-b from-slate-50 to-white relative">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <span className="inline-block text-indigo-600 text-xs font-bold tracking-widest uppercase mb-4">
            Who We Partner With
          </span>
          <h2 className="text-4xl md:text-5xl font-black text-slate-900 mb-4">
            Built for{" "}
            <span className="bg-gradient-to-r from-indigo-600 to-violet-600 bg-clip-text text-transparent">
              Service Providers
            </span>
          </h2>
          <p className="text-slate-500 text-lg max-w-2xl mx-auto">
            Whether you&apos;re a national telco or a regional reseller, if you sell
            to small businesses, Hostopia was built for you.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {partnerTypes.map((type) => {
            const Icon = type.icon;
            return (
              <div
                key={type.title}
                className="group text-center rounded-3xl p-8 bg-white border border-slate-100 shadow-sm hover:shadow-xl hover:border-indigo-200 hover:-translate-y-2 transition-all duration-300"
              >
                <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-indigo-500 to-violet-600 mx-auto mb-5 flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-lg shadow-indigo-500/25">
                  <Icon size={24} className="text-white" />
                </div>
                <h3 className="font-bold text-slate-900 mb-3">{type.title}</h3>
                <p className="text-slate-500 text-sm leading-relaxed">
                  {type.description}
                </p>
              </div>
            );
          })}
        </div>

        {/* Bottom CTA row */}
        <div className="mt-16 text-center">
          <p className="text-slate-500 mb-4">
            Don&apos;t see your category? We work with a wide range of service
            providers.
          </p>
          <a
            href="#contact"
            className="inline-flex items-center gap-2 border-2 border-indigo-600 text-indigo-600 font-semibold px-7 py-3 rounded-full hover:bg-indigo-600 hover:text-white transition-all duration-200"
          >
            Let&apos;s Talk About Your Business
          </a>
        </div>
      </div>
    </section>
  );
}
