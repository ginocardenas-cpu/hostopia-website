import { Megaphone, BookOpen, Target, Users2 } from "lucide-react";

const services = [
  {
    icon: Megaphone,
    number: "01",
    title: "Co-Branded Marketing",
    description:
      "Ready-to-use campaigns, assets, and messaging that help you take Hostopia-powered products to market fast. Digital ads, email campaigns, landing pages, and more.",
  },
  {
    icon: BookOpen,
    number: "02",
    title: "Sales Enablement",
    description:
      "Battle cards, pitch decks, and training programs that arm your sales teams with everything needed to confidently sell digital services to SMBs.",
  },
  {
    icon: Target,
    number: "03",
    title: "Product Positioning",
    description:
      "Strategic guidance on packaging, pricing, and positioning Hostopia products within your existing portfolio to maximize ARPU and minimize churn.",
  },
  {
    icon: Users2,
    number: "04",
    title: "Partner Success Management",
    description:
      "A dedicated team that reviews your metrics, identifies growth opportunities, and ensures you're maximizing the full value of the Hostopia platform.",
  },
];

export default function GoToMarket() {
  return (
    <section className="py-28" style={{ backgroundColor: "#f7f6f2" }}>
      <div className="max-w-7xl mx-auto px-6">

        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end gap-10 justify-between mb-16">
          <div>
            <div className="flex items-center gap-3 mb-5">
              <div className="w-8 h-px" style={{ backgroundColor: "#2CADB2" }} />
              <span className="section-label">Go-to-Market Services</span>
            </div>
            <h2
              className="font-black leading-tight"
              style={{
                fontFamily: "Montserrat, sans-serif",
                fontSize: "clamp(2.5rem, 5vw, 4.5rem)",
                color: "#24282B",
              }}
            >
              We Help You{" "}
              <span style={{ color: "#2CADB2" }}>Sell It,</span>
              <br />
              Not Just Build It.
            </h2>
          </div>
          <p
            className="text-base leading-relaxed max-w-sm"
            style={{ fontFamily: "Raleway, sans-serif", color: "#6b7280" }}
          >
            Our go-to-market expertise helps service providers accelerate adoption, increase ARPU, and reduce churn from day one.
          </p>
        </div>

        {/* 2x2 grid */}
        <div className="grid md:grid-cols-2 gap-6">
          {services.map((service) => {
            const Icon = service.icon;
            return (
              <div
                key={service.title}
                className="group rounded-3xl p-10 bg-white border border-transparent hover:border-gray-200 hover:shadow-lg transition-all duration-300"
              >
                <div className="flex items-start justify-between mb-6">
                  <div
                    className="w-12 h-12 rounded-2xl flex items-center justify-center"
                    style={{ backgroundColor: "#e8f7f7" }}
                  >
                    <Icon size={22} style={{ color: "#2CADB2" }} />
                  </div>
                  <span
                    className="font-black text-4xl"
                    style={{ fontFamily: "Montserrat, sans-serif", color: "#2CADB2", opacity: 0.15 }}
                  >
                    {service.number}
                  </span>
                </div>

                <div
                  className="w-8 h-0.5 mb-4 transition-all duration-300 group-hover:w-14"
                  style={{ backgroundColor: "#F8CF41" }}
                />

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
            );
          })}
        </div>
      </div>
    </section>
  );
}
