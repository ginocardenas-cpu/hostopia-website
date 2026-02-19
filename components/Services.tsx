import { Mail, Globe, ShoppingCart, TrendingUp, Headphones, ArrowUpRight } from "lucide-react";

const services = [
  {
    icon: Mail,
    title: "Business Email",
    tag: "Core Revenue Driver",
    tagColor: "bg-cyan-500/20 text-cyan-300",
    description:
      "Professional email hosting at scale. Give your SMB customers the reliability they demand with enterprise spam filtering, calendar sync, and admin controls — all under your brand.",
    highlights: ["Scalable to millions of mailboxes", "Advanced spam & threat protection", "Admin portal & reseller controls"],
    gradient: "from-cyan-500/10 to-blue-600/10",
    border: "border-cyan-500/20 hover:border-cyan-500/40",
    iconColor: "from-cyan-500 to-blue-600",
  },
  {
    icon: Globe,
    title: "Website Builder",
    tag: "SMB Essential",
    tagColor: "bg-indigo-500/20 text-indigo-300",
    description:
      "A drag-and-drop website builder that lets SMBs launch a professional online presence in minutes. Modern templates, SEO tools, and full white-label customization for your brand.",
    highlights: ["500+ professional templates", "Built-in SEO & analytics", "Custom domain management"],
    gradient: "from-indigo-500/10 to-violet-600/10",
    border: "border-indigo-500/20 hover:border-indigo-500/40",
    iconColor: "from-indigo-500 to-violet-600",
  },
  {
    icon: ShoppingCart,
    title: "Ecommerce",
    tag: "High-Value Upsell",
    tagColor: "bg-violet-500/20 text-violet-300",
    description:
      "A full-featured online store platform that empowers SMBs to sell products and services with ease. Inventory management, payment processing, and marketing tools built in.",
    highlights: ["Integrated payment gateways", "Inventory & order management", "Mobile-optimized storefronts"],
    gradient: "from-violet-500/10 to-purple-600/10",
    border: "border-violet-500/20 hover:border-violet-500/40",
    iconColor: "from-violet-500 to-purple-600",
  },
  {
    icon: TrendingUp,
    title: "Digital Marketing",
    tag: "Stickiness Creator",
    tagColor: "bg-orange-500/20 text-orange-300",
    description:
      "Give your customers real marketing results. SEO, social media management, Google Ads, and reputation management — packaged and branded as your own digital marketing suite.",
    highlights: ["SEO & local search optimization", "Social media scheduling", "Review & reputation management"],
    gradient: "from-orange-500/10 to-red-600/10",
    border: "border-orange-500/20 hover:border-orange-500/40",
    iconColor: "from-orange-500 to-red-600",
  },
  {
    icon: Headphones,
    title: "Bilingual Support",
    tag: "Unique Differentiator",
    tagColor: "bg-emerald-500/20 text-emerald-300",
    description:
      "Full English and French bilingual customer support, delivered in your brand's voice. Our agents become your team — a true white-label support experience your customers will trust.",
    highlights: ["English & French fluency", "Branded as your support team", "Dedicated account management"],
    gradient: "from-emerald-500/10 to-teal-600/10",
    border: "border-emerald-500/20 hover:border-emerald-500/40",
    iconColor: "from-emerald-500 to-teal-600",
  },
];

export default function Services() {
  return (
    <section id="solutions" className="py-24 bg-white relative">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section header */}
        <div className="text-center mb-16">
          <span className="inline-block text-indigo-600 text-xs font-bold tracking-widest uppercase mb-4">
            White-Label Solutions
          </span>
          <h2 className="text-4xl md:text-5xl font-black text-slate-900 mb-4">
            Everything Your Customers{" "}
            <span className="bg-gradient-to-r from-indigo-600 to-violet-600 bg-clip-text text-transparent">
              Need to Succeed Online
            </span>
          </h2>
          <p className="text-slate-500 text-lg max-w-2xl mx-auto">
            A complete suite of digital products, fully white-labeled and
            packaged under your brand. You set the pricing. We power the
            platform.
          </p>
        </div>

        {/* Services grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service) => {
            const Icon = service.icon;
            return (
              <div
                key={service.title}
                className={`group relative rounded-3xl p-7 bg-gradient-to-br ${service.gradient} border ${service.border} transition-all duration-300 hover:-translate-y-1 cursor-pointer`}
              >
                {/* Tag */}
                <span className={`inline-block text-xs font-bold px-3 py-1 rounded-full ${service.tagColor} mb-5`}>
                  {service.tag}
                </span>

                {/* Icon */}
                <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${service.iconColor} flex items-center justify-center mb-4`}>
                  <Icon size={20} className="text-white" />
                </div>

                {/* Title & Arrow */}
                <div className="flex items-start justify-between mb-3">
                  <h3 className="text-xl font-bold text-slate-900">
                    {service.title}
                  </h3>
                  <ArrowUpRight
                    size={18}
                    className="text-slate-400 group-hover:text-indigo-600 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 transition-all duration-200 mt-0.5"
                  />
                </div>

                <p className="text-slate-600 text-sm leading-relaxed mb-5">
                  {service.description}
                </p>

                {/* Highlights */}
                <ul className="space-y-2">
                  {service.highlights.map((item) => (
                    <li key={item} className="flex items-center gap-2 text-xs text-slate-500 font-medium">
                      <div className="w-1 h-1 rounded-full bg-indigo-400 flex-shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}

          {/* "More coming" card */}
          <div className="rounded-3xl p-7 border border-dashed border-slate-200 bg-slate-50 flex flex-col items-center justify-center text-center">
            <div className="w-12 h-12 rounded-xl bg-slate-200 flex items-center justify-center mb-4">
              <span className="text-2xl font-black text-slate-400">+</span>
            </div>
            <h3 className="text-lg font-bold text-slate-700 mb-2">
              And Much More
            </h3>
            <p className="text-slate-400 text-sm">
              Our platform roadmap is always expanding. Work with our team to explore custom solutions.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
