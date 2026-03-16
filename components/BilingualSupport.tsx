import Image from "next/image";

const supportStats = [
  { value: "EN/FR/SP", label: "Multilingual", sub: "North America based" },
  { value: "24/7", label: "Availability", sub: "Always on" },
  { value: ">60s", label: "First Reply", sub: "Response SLA" },
  { value: "98%", label: "CSAT", sub: "Satisfaction score" },
];

export default function BilingualSupport() {
  return (
    <section id="support" className="py-28 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-20 items-center">

          {/* Left: Text */}
          <div>
            <div className="flex items-center gap-3 mb-5">
              <div className="w-8 h-px" style={{ backgroundColor: "#F8CF41" }} />
              <span className="section-label">Bilingual Support</span>
            </div>

            <h2
              className="font-black leading-tight mb-6"
              style={{
                fontFamily: "Montserrat, sans-serif",
                fontSize: "clamp(2.5rem, 5vw, 4.5rem)",
                color: "#24282B",
              }}
            >
              Support That
              <br />
              Sounds Like{" "}
              <span
                style={{
                  color: "#2CADB2",
                  textDecoration: "underline",
                  textDecorationColor: "#F8CF41",
                  textUnderlineOffset: "6px",
                  textDecorationThickness: "4px",
                }}
              >
                You.
              </span>
            </h2>

            <p
              className="text-lg leading-relaxed mb-10"
              style={{ fontFamily: "Raleway, sans-serif", color: "#555a5e" }}
            >
              We believe exceptional customer interactions can provide your business a meaningful competitive advantage. Our team delivers high-quality support on your behalf while maintaining your brand voice. You benefit from defined SLAs, measurable KPIs, and full reporting to track performance. Your customers receive multilingual support across phone, chat, and email — ensuring consistent, scalable experiences wherever they do business.
            </p>

            <a
              href="#partner"
              className="inline-flex items-center gap-2 font-bold px-8 py-4 rounded-full transition-all duration-200 hover:scale-105"
              style={{
                fontFamily: "Montserrat, sans-serif",
                backgroundColor: "#2CADB2",
                color: "#ffffff",
                boxShadow: "0 4px 20px rgba(44,173,178,0.3)",
              }}
            >
              Talk to Us About Support
            </a>
          </div>

          {/* Right: Image with stats overlaid */}
          <div className="relative">
            <div className="relative rounded-3xl overflow-hidden shadow-lg">
              <Image
                src="/Home Page images/support-that-sounds-like-you.png"
                alt="Bilingual support team member with headset"
                width={600}
                height={520}
                className="w-full h-auto"
              />
            </div>

            {/* Stats cards overlaid on left side of image */}
            <div className="absolute top-0 left-4 bottom-0 flex flex-col justify-center gap-3 py-6">
              {supportStats.map((stat, i) => (
                <div
                  key={stat.label}
                  className="bg-white rounded-xl px-4 py-2 shadow-lg border border-gray-100 min-w-[130px]"
                >
                  <p
                    className="font-black text-xl leading-none mb-0.5"
                    style={{
                      fontFamily: "Montserrat, sans-serif",
                      color: i % 2 === 0 ? "#2CADB2" : "#24282B",
                    }}
                  >
                    {stat.value}
                  </p>
                  <p
                    className="font-bold text-xs"
                    style={{ fontFamily: "Montserrat, sans-serif", color: "#24282B" }}
                  >
                    {stat.label}
                  </p>
                  <p
                    className="text-xs"
                    style={{ fontFamily: "Raleway, sans-serif", color: "#9ca3af" }}
                  >
                    {stat.sub}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
