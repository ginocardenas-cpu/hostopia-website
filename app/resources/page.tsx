import Link from "next/link";
import Image from "next/image";
import { ArrowRight, BookOpen, Clapperboard, Download, FileText, Headphones, Play, Rss, Video } from "lucide-react";
import ProductGuideForm from "@/components/ProductGuideForm";

type SmbHubPlaceholder = {
  title: string;
  description: string;
  imageSrc: string;
  imageAlt: string;
};

const smbHubVideos: SmbHubPlaceholder[] = [
  {
    title: "Video resource 1",
    description: "Placeholder — add embed or hosted video URL when ready.",
    imageSrc: "/Website%20Design%20Page/website%20design%20slider%2001.jpg",
    imageAlt: "Abstract website and design imagery for video placeholder",
  },
  {
    title: "Video resource 2",
    description: "Placeholder — add embed or hosted video URL when ready.",
    imageSrc: "/Social%20Media/social%20media%20management%20header.png",
    imageAlt: "Social media marketing imagery for video placeholder",
  },
  {
    title: "Video resource 3",
    description: "Placeholder — add embed or hosted video URL when ready.",
    imageSrc: "/Marketing%20360/marketing%20360%20slider%2001.jpg",
    imageAlt: "Marketing campaign imagery for video placeholder",
  },
];

const smbHubEbooks: SmbHubPlaceholder[] = [
  {
    title: "eBook resource 1",
    description: "Placeholder — attach PDF or gated download when ready.",
    imageSrc: "/Email%20Marketing/email%20marketing%20header.png",
    imageAlt: "Email marketing creative for eBook placeholder",
  },
  {
    title: "eBook resource 2",
    description: "Placeholder — attach PDF or gated download when ready.",
    imageSrc: "/Domain%20Page/New%20Images/key-features-for-SMBs%20(1).png",
    imageAlt: "Domain and SMB features imagery for eBook placeholder",
  },
  {
    title: "eBook resource 3",
    description: "Placeholder — attach PDF or gated download when ready.",
    imageSrc: "/Search%20Engine%20Optimization/search%20engine%20optimization%20slider%2001.jpg",
    imageAlt: "Search optimization imagery for eBook placeholder",
  },
];

const smbHubPodcasts: SmbHubPlaceholder[] = [
  {
    title: "Podcast resource 1",
    description: "Placeholder — add audio file or podcast episode link when ready.",
    imageSrc: "/Brand%20Monitoring%20Page/New%20Images/brand%20monitoring%20header%20(2).png",
    imageAlt: "Brand monitoring concept for podcast placeholder",
  },
  {
    title: "Podcast resource 2",
    description: "Placeholder — add audio file or podcast episode link when ready.",
    imageSrc: "/Reputation%20Management/reputation%20management%20header.jpg",
    imageAlt: "Reputation management imagery for podcast placeholder",
  },
  {
    title: "Podcast resource 3",
    description: "Placeholder — add audio file or podcast episode link when ready.",
    imageSrc: "/Hosting/hosting%20slider%20manage%20multiple.jpg",
    imageAlt: "Hosting and infrastructure imagery for podcast placeholder",
  },
];

function SmbHubCardRow({
  items,
  actionLabel,
  ActionIcon,
}: {
  items: SmbHubPlaceholder[];
  actionLabel: string;
  ActionIcon: typeof Play;
}) {
  return (
    <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {items.map((item) => (
        <article
          key={item.title}
          className="flex flex-col rounded-2xl overflow-hidden border bg-white transition-shadow duration-200 hover:shadow-md"
          style={{ borderColor: "#e5e7eb" }}
        >
          <div className="relative aspect-[16/10] bg-gray-100 shrink-0">
            <Image src={item.imageSrc} alt={item.imageAlt} fill className="object-cover object-center" sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw" />
          </div>
          <div className="flex flex-col flex-1 p-5">
            <p
              className="text-xs font-bold uppercase tracking-wider mb-2"
              style={{ fontFamily: "Montserrat, sans-serif", color: "#2CADB2" }}
            >
              Placeholder
            </p>
            <h4 className="font-black text-lg leading-snug mb-2" style={{ fontFamily: "Montserrat, sans-serif", color: "#24282B" }}>
              {item.title}
            </h4>
            <p className="text-sm leading-relaxed mb-5 flex-1" style={{ fontFamily: "Raleway, sans-serif", color: "#6b7280" }}>
              {item.description}
            </p>
            <button
              type="button"
              disabled
              title="Replace with real link in app/resources/page.tsx when asset is ready"
              className="inline-flex items-center justify-center gap-2 font-bold px-4 py-2.5 rounded-full text-sm cursor-not-allowed opacity-60"
              style={{
                fontFamily: "Montserrat, sans-serif",
                backgroundColor: "#e5e7eb",
                color: "#6b7280",
              }}
            >
              <ActionIcon size={18} aria-hidden />
              {actionLabel}
            </button>
          </div>
        </article>
      ))}
    </div>
  );
}

export default function ResourcesPage() {
  return (
    <main>
      {/* Hero */}
      <section
        className="relative pt-28 pb-20 overflow-hidden"
        style={{ backgroundColor: "#f7f6f2" }}
      >
        <div
          className="absolute top-0 right-0 w-[500px] h-[500px] rounded-full pointer-events-none"
          style={{
            background: "radial-gradient(circle, rgba(44,173,178,0.1) 0%, transparent 70%)",
            transform: "translate(20%, -20%)",
          }}
        />
        <div className="relative z-10 max-w-7xl mx-auto px-6">
          <div className="flex items-center gap-3 mb-5">
            <div className="w-8 h-px" style={{ backgroundColor: "#2CADB2" }} />
            <span className="section-label">Resources</span>
          </div>
          <h1
            className="font-black leading-tight mb-6 max-w-4xl"
            style={{
              fontFamily: "Montserrat, sans-serif",
              fontSize: "clamp(2.5rem, 5vw, 4rem)",
              color: "#24282B",
            }}
          >
            Tools, Insights &amp; Enablement
          </h1>
          <p
            className="text-lg leading-relaxed max-w-3xl"
            style={{ fontFamily: "Raleway, sans-serif", color: "#6b7280" }}
          >
            Explore tools, insights, and enablement designed to help telecoms, ISVs, resellers, and service providers grow recurring revenue, strengthen customer relationships, and accelerate time to market. Our resource center gives you access to the content and expertise needed to build, launch, and scale digital services with confidence.
          </p>
        </div>
      </section>

      {/* Resource cards */}
      <section className="bg-white py-28">
        <div className="max-w-7xl mx-auto px-6">
          <div className="space-y-16">
            {/* HostopiaConnects */}
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <div
                  className="w-12 h-12 rounded-2xl flex items-center justify-center mb-6"
                  style={{ backgroundColor: "#e8f7f7" }}
                >
                  <FileText className="w-6 h-6" style={{ color: "#2CADB2" }} />
                </div>
                <h2
                  className="font-black text-2xl md:text-3xl leading-tight mb-4"
                  style={{ fontFamily: "Montserrat, sans-serif", color: "#24282B" }}
                >
                  HostopiaConnects
                </h2>
                <p
                  className="text-lg leading-relaxed mb-6"
                  style={{ fontFamily: "Raleway, sans-serif", color: "#6b7280" }}
                >
                  HostopiaConnects is your partner enablement hub, designed to support your go-to-market strategy. Access a comprehensive library of ready-to-use sales and marketing assets, including product sheets, presentations, campaign materials, videos, and customer-facing content. Equip your teams with proven resources to drive demand, improve sales productivity, and expand wallet share across your customer base.
                </p>
                <a
                  href="https://connects.hostopia.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 font-bold px-6 py-3 rounded-full transition-all duration-200 hover:scale-105"
                  style={{
                    fontFamily: "Montserrat, sans-serif",
                    backgroundColor: "#2CADB2",
                    color: "#ffffff",
                    boxShadow: "0 4px 20px rgba(44,173,178,0.3)",
                  }}
                >
                  Explore HostopiaConnects
                  <ArrowRight size={18} />
                </a>
              </div>
              <div className="flex justify-center">
                <div className="relative rounded-2xl overflow-hidden bg-gray-100 aspect-[4/3] w-full max-w-xl">
                  <Image
                    src="/images/hostopia-connects-office.png"
                    alt="Business professionals collaborating in a modern office with digital connectivity"
                    fill
                    className="object-cover object-center"
                    sizes="(max-width: 1024px) 100vw, 50vw"
                  />
                </div>
              </div>
            </div>

            {/* Hostopia Blog */}
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="order-2 lg:order-1 relative rounded-2xl overflow-hidden aspect-[4/3] bg-gray-100">
                <Image
                  src="/images/blog.png"
                  alt="Person at laptop engaging with blog content"
                  fill
                  className="object-cover object-center"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
              </div>
              <div className="order-1 lg:order-2">
                <div
                  className="w-12 h-12 rounded-2xl flex items-center justify-center mb-6"
                  style={{ backgroundColor: "#fef9e6" }}
                >
                  <Rss className="w-6 h-6" style={{ color: "#e0b82a" }} />
                </div>
                <h2
                  className="font-black text-2xl md:text-3xl leading-tight mb-4"
                  style={{ fontFamily: "Montserrat, sans-serif", color: "#24282B" }}
                >
                  Hostopia Blog
                </h2>
                <p
                  className="text-lg leading-relaxed mb-6"
                  style={{ fontFamily: "Raleway, sans-serif", color: "#6b7280" }}
                >
                  Stay ahead of industry trends and discover new growth opportunities. The Hostopia Blog delivers insights on digital transformation, cloud and SaaS monetization, customer lifecycle management, and partner success strategies. Learn how leading telecoms, ISVs, and service providers are evolving their portfolios to stay competitive in a rapidly changing market.
                </p>
                <Link
                  href="/blog"
                  className="inline-flex items-center gap-2 font-bold px-6 py-3 rounded-full transition-all duration-200 hover:scale-105"
                  style={{
                    fontFamily: "Montserrat, sans-serif",
                    backgroundColor: "#F8CF41",
                    color: "#24282B",
                    boxShadow: "0 4px 20px rgba(248,207,65,0.3)",
                  }}
                >
                  Read the Blog
                  <ArrowRight size={18} />
                </Link>
              </div>
            </div>

            {/* Hostopia Product Guide + image & download */}
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <div
                  className="w-12 h-12 rounded-2xl flex items-center justify-center mb-6"
                  style={{ backgroundColor: "#e8f7f7" }}
                >
                  <BookOpen className="w-6 h-6" style={{ color: "#2CADB2" }} />
                </div>
                <h2
                  className="font-black text-2xl md:text-3xl leading-tight mb-4"
                  style={{ fontFamily: "Montserrat, sans-serif", color: "#24282B" }}
                >
                  Hostopia Product Guide
                </h2>
                <p
                  className="text-lg leading-relaxed mb-4"
                  style={{ fontFamily: "Raleway, sans-serif", color: "#6b7280" }}
                >
                  See how Hostopia&apos;s platforms and solutions help you launch new services, increase ARPU, and create sustainable recurring revenue. Our product guide provides a clear overview of our digital experience, commerce, and customer lifecycle capabilities designed to power your business and support long-term growth.
                </p>
                <p
                  className="text-sm"
                  style={{ fontFamily: "Raleway, sans-serif", color: "#6b7280" }}
                >
                  Complete the form to receive your copy and discover how to unlock new revenue streams.
                </p>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-[1fr_1fr] gap-6 items-stretch max-w-2xl">
                <div className="relative rounded-2xl overflow-hidden border-2 shadow-lg bg-[#24282B] min-h-[320px] sm:min-h-[420px]">
                  <Image
                    src="/images/product-guide-2026.png"
                    alt="Hostopia Product Guide 2026"
                    fill
                    className="object-contain object-center p-4"
                    sizes="(max-width: 640px) 100vw, 320px"
                    priority={false}
                  />
                </div>
                <div
                  className="rounded-2xl border-2 shadow-lg flex flex-col min-h-[320px] sm:min-h-[420px]"
                  style={{ borderColor: "#e5e7eb", backgroundColor: "#fafafa" }}
                >
                  <h3
                    className="font-bold text-lg pt-6 px-6 pb-2 shrink-0"
                    style={{ fontFamily: "Montserrat, sans-serif", color: "#24282B" }}
                  >
                    Download the Product Guide
                  </h3>
                  <div className="flex-1 px-6 pb-6 flex flex-col justify-center">
                    <ProductGuideForm />
                  </div>
                </div>
              </div>
            </div>

            {/* Hostopia SMB Resource Hub */}
            <div className="pt-16 border-t border-gray-200">
              <div
                className="w-12 h-12 rounded-2xl flex items-center justify-center mb-6"
                style={{ backgroundColor: "#e8f7f7" }}
              >
                <Video className="w-6 h-6" style={{ color: "#2CADB2" }} aria-hidden />
              </div>
              <h2
                className="font-black text-2xl md:text-3xl leading-tight mb-2"
                style={{ fontFamily: "Montserrat, sans-serif", color: "#24282B" }}
              >
                Hostopia SMB Resource Hub
              </h2>
              <h3
                className="font-bold text-xl md:text-2xl leading-tight mb-6"
                style={{ fontFamily: "Montserrat, sans-serif", color: "#2CADB2" }}
              >
                SMB Resource Hub
              </h3>
              <div className="space-y-4 max-w-4xl mb-14">
                <p className="text-lg leading-relaxed" style={{ fontFamily: "Raleway, sans-serif", color: "#6b7280" }}>
                  Help your SMB customers succeed online with practical tools, insights, and guidance for every stage of their business journey.
                </p>
                <p className="text-lg leading-relaxed" style={{ fontFamily: "Raleway, sans-serif", color: "#6b7280" }}>
                  The SMB Resource Hub equips Service Providers with videos, eBooks, guides, and customer-ready resources to help SMBs build their brand, get online, grow their presence, and adopt new technologies and AI solutions.
                </p>
                <p className="text-lg leading-relaxed" style={{ fontFamily: "Raleway, sans-serif", color: "#6b7280" }}>
                  Support your customers while strengthening your role as a trusted digital advisor.
                </p>
              </div>

              <div className="space-y-14">
                <section aria-labelledby="smb-hub-videos-heading">
                  <div className="flex items-center gap-3 mb-6">
                    <Clapperboard className="w-6 h-6 shrink-0" style={{ color: "#2CADB2" }} aria-hidden />
                    <h4
                      id="smb-hub-videos-heading"
                      className="font-black text-xl md:text-2xl"
                      style={{ fontFamily: "Montserrat, sans-serif", color: "#24282B" }}
                    >
                      Videos
                    </h4>
                  </div>
                  <SmbHubCardRow items={smbHubVideos} actionLabel="Play" ActionIcon={Play} />
                </section>

                <section aria-labelledby="smb-hub-ebooks-heading">
                  <div className="flex items-center gap-3 mb-6">
                    <BookOpen className="w-6 h-6 shrink-0" style={{ color: "#2CADB2" }} aria-hidden />
                    <h4
                      id="smb-hub-ebooks-heading"
                      className="font-black text-xl md:text-2xl"
                      style={{ fontFamily: "Montserrat, sans-serif", color: "#24282B" }}
                    >
                      eBooks
                    </h4>
                  </div>
                  <SmbHubCardRow items={smbHubEbooks} actionLabel="Download" ActionIcon={Download} />
                </section>

                <section aria-labelledby="smb-hub-podcasts-heading">
                  <div className="flex items-center gap-3 mb-6">
                    <Headphones className="w-6 h-6 shrink-0" style={{ color: "#2CADB2" }} aria-hidden />
                    <h4
                      id="smb-hub-podcasts-heading"
                      className="font-black text-xl md:text-2xl"
                      style={{ fontFamily: "Montserrat, sans-serif", color: "#24282B" }}
                    >
                      Podcasts
                    </h4>
                  </div>
                  <SmbHubCardRow items={smbHubPodcasts} actionLabel="Listen" ActionIcon={Headphones} />
                </section>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
