import { Mail, Globe, ShoppingCart, TrendingUp, Sparkles, ArrowUpRight } from "lucide-react";

const services = [
  {
    icon: Mail,
    number: "01",
    title: "Business Email",
    tag: "Core Revenue Driver",
    description:
      "Professional email hosting at enterprise scale. Give your SMB customers the reliability they demand — advanced spam filtering, calendar sync, and full admin controls. All under your brand.",
    highlights: ["Scalable to millions of mailboxes", "Advanced spam & threat protection", "Admin portal & reseller controls"],
    accent: "#2CADB2",
    light: "#e8f7f7",
  },
  {
    icon: Globe,
    number: "02",
    title: "Website Builder",
    tag: "SMB Essential",
    description:
      "A drag-and-drop website builder that lets SMBs launch a professional online presence in minutes. Modern templates, SEO tools, and full white-label customization for your brand.",
    highlights: ["500+ professional templates", "Built-in SEO & analytics", "Custom domain management"],
    accent: "#24282B",
    light: "#f2f2f0",
  },
  {
    icon: ShoppingCart,
    number: "03",
    title: "Ecommerce",
    tag: "High-Value Upsell",
    description:
      "A full-featured online store platform that empowers SMBs to sell products and services with ease. Inventory management, payment processing, and marketing tools — built in.",
    highlights: ["Integrated payment gateways", "Inventory & order management", "Mobile-optimized storefronts"],
    accent: "#2CADB2",
    light: "#e8f7f7",
  },
  {
    icon: TrendingUp,
    number: "04",
    title: "Digital Marketing",
    tag: "Stickiness Creator",
    description:
      "Give your customers real marketing results. SEO, social media management, Google Ads, and reputation management — packaged and branded as your own digital marketing suite.",
    highlights: ["SEO & local search optimization", "Social media scheduling", "Review & reputation management"],
    accent: "#24282B",
    light: "#f2f2f0",
  },
  {
    icon: Sparkles,
    number: "05",
    title: "AI-Powered Marketing",
    tag: "Growth Without the Agency",
    description:
      "Help SMB customers attract and retain more customers without hiring an agency. AI-powered marketing tools simplify SEO, ads, social media, and reputation management under your brand.",
    highlights: [
      "AI-driven SEO and local search optimization",
      "Automated ad and social campaign management",
      "Review monitoring with intelligent response suggestions",
    ],
    accent: "#2CADB2",
    light: "#e8f7f7",
  },
];

export default function Services() {
  return (
    <section id="solutions" className="py-28 bg-white">
      <div className="max-w-7xl mx-auto px-6">

        {/* Header */}
        <div className="mb-16">
          <div className="flex items-center gap-3 mb-5">
            <div className="w-8 h-px" style={{ backgroundColor: "#2CADB2" }} />
            <span className="section-label">White-Label Solutions</span>
          </div>
          <div className="flex flex-col md:flex-row md:items-end gap-8 justify-between">
            <h2
              className="font-black leading-tight"
              style={{
                fontFamily: "Montserrat, sans-serif",
                fontSize: "clamp(2.5rem, 5vw, 4.5rem)",
                color: "#24282B",
                maxWidth: "700px",
              }}
            >
              Everything Your Customers
              <br />
              Need to{" "}
              <span style={{ color: "#2CADB2" }}>Succeed Online</span>
            </h2>
            <p
              className="text-base leading-relaxed max-w-xs"
              style={{ fontFamily: "Raleway, sans-serif", color: "#6b7280" }}
            >
              You set the pricing.
              <br />
              We power the platform.
            </p>
          </div>
        </div>

        {/* Services list — editorial style */}
        <div className="space-y-px bg-gray-100 rounded-3xl overflow-hidden">
          {services.map((service) => {
            const Icon = service.icon;
            return (
              <div
                key={service.title}
                className="group grid md:grid-cols-12 bg-white hover:bg-gray-50 transition-colors duration-300 cursor-pointer"
              >
                {/* Number col */}
                <div className="md:col-span-1 flex items-center justify-center p-6 md:p-8 border-b md:border-b-0 md:border-r border-gray-100">
                  <span
                    className="font-black text-lg"
                    style={{ fontFamily: "Montserrat, sans-serif", color: service.accent, opacity: 0.5 }}
                  >
                    {service.number}
                  </span>
                </div>

                {/* Icon + tag col */}
                <div className="md:col-span-2 flex flex-row md:flex-col items-center md:items-start justify-start gap-4 p-6 md:p-8 md:border-r border-gray-100">
                  <div
                    className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0"
                    style={{ backgroundColor: service.light }}
                  >
                    <Icon size={18} style={{ color: service.accent }} />
                  </div>
                  <span
                    className="text-xs font-bold px-3 py-1 rounded-full"
                    style={{
                      fontFamily: "Montserrat, sans-serif",
                      backgroundColor: service.light,
                      color: service.accent,
                    }}
                  >
                    {service.tag}
                  </span>
                </div>

                {/* Title + desc col */}
                <div className="md:col-span-5 p-6 md:p-8 md:border-r border-gray-100">
                  <h3
                    className="font-black text-xl mb-3"
                    style={{ fontFamily: "Montserrat, sans-serif", color: "#24282B" }}
                  >
                    {service.title}
                  </h3>
                  <p
                    className="text-sm leading-relaxed"
                    style={{ fontFamily: "Raleway, sans-serif", color: "#6b7280" }}
                  >
                    {service.description}
                  </p>
                </div>

                {/* Highlights + arrow col */}
                <div className="md:col-span-4 p-6 md:p-8 flex flex-col justify-between">
                  <ul className="space-y-2 mb-4">
                    {service.highlights.map((item) => (
                      <li
                        key={item}
                        className="flex items-center gap-2 text-xs font-medium"
                        style={{ fontFamily: "Raleway, sans-serif", color: "#555" }}
                      >
                        <div
                          className="w-1.5 h-1.5 rounded-full flex-shrink-0"
                          style={{ backgroundColor: service.accent }}
                        />
                        {item}
                      </li>
                    ))}
                  </ul>
                  <div className="flex justify-end">
                    <ArrowUpRight
                      size={20}
                      className="group-hover:-translate-y-0.5 group-hover:translate-x-0.5 transition-transform duration-200"
                      style={{ color: service.accent }}
                    />
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
