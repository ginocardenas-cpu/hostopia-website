import Image from "next/image";


export default function BilingualSupport() {
  return (
    <section id="support" className="py-28 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-20 items-center">

          {/* Left: Text */}
          <div>
            <div className="flex items-center gap-3 mb-5">
              <div className="w-8 h-px" style={{ backgroundColor: "#F8CF41" }} />
              <span className="section-label">White-Label Customer Support</span>
            </div>

            <h2
              className="font-black leading-tight mb-6"
              style={{
                fontFamily: "Montserrat, sans-serif",
                fontSize: "clamp(2.5rem, 5vw, 4.5rem)",
                color: "#24282B",
              }}
            >
              24/7 Multilingual Support{" "}
              <span
                style={{
                  color: "#2CADB2",
                  textDecoration: "underline",
                  textDecorationColor: "#F8CF41",
                  textUnderlineOffset: "6px",
                  textDecorationThickness: "4px",
                }}
              >
                Under Your Brand.
              </span>
            </h2>

            <p
              className="text-lg leading-relaxed mb-10"
              style={{ fontFamily: "Raleway, sans-serif", color: "#6b7280" }}
            >
              Your customers call your brand. Our team answers as your team. Phone, chat, and email â€” with defined SLAs, measurable KPIs, and full reporting. Exceptional customer support is a competitive advantage, not a cost center. Hostopia&apos;s multilingual support team delivers high-quality, on-brand interactions across every channel â€” so you can scale your customer base without scaling your headcount.
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

          {/* Right: Image (stats are embedded in the image itself) */}
          <div className="rounded-3xl overflow-hidden shadow-lg">
            <Image
              src="/Home Page images/New/support-that-sounds-like-you.png"
              alt="Bilingual support team member with headset and stat cards"
              width={700}
              height={560}
              className="w-full h-auto"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
