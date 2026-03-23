import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { productSlugToLabel } from "@/lib/nav-products";
import DomainsPage from "@/components/products/DomainsPage";
import WebsiteDesignPage from "@/components/products/WebsiteDesignPage";
import SslPage from "@/components/products/SslPage";
import BusinessEmailPage from "@/components/products/BusinessEmailPage";
import LogoDesignPage from "@/components/products/LogoDesignPage";
import DirectoriesPage from "@/components/products/DirectoriesPage";
import OnlineFaxPage from "@/components/products/OnlineFaxPage";
import ReputationManagementPage from "@/components/products/ReputationManagementPage";
import HostingPage from "@/components/products/HostingPage";
import WebsiteBuilderPage from "@/components/products/WebsiteBuilderPage";
import EcommercePage from "@/components/products/EcommercePage";
import SearchEnginePage from "@/components/products/SearchEnginePage";
import EmailMarketingPage from "@/components/products/EmailMarketingPage";
import CustomWebsitePage from "@/components/products/CustomWebsitePage";
import OverviewProductPage from "@/components/products/OverviewProductPage";

type Props = { params: { slug: string } };

const productMeta: Record<
  string,
  {
    title: string;
    description: string;
    keywords?: string[];
  }
> = {
  domains: {
    title: "White-Label Domains Platform for SMBs | Hostopia",
    description:
      "Offer a fully branded domain platform to SMBs. Enable domain registration, management, and integration with websites, email, and security services—all under your brand.",
    keywords: [
      "white-label domain platform",
      "reseller domain solution",
      "SMB domain management",
      "white-label domain offering",
      "domain registration for telecom partners",
      "private-label domain platform",
    ],
  },
  "website-design": {
    title: "DIFM Website Design | White-Label Professional Websites for Service Providers",
    description:
      "Launch done-for-me website design under your brand. Hostopia's DIFM Website Design helps telcos, ISPs, and MSPs deliver professional SMB websites while driving activation, digital revenue, and retention.",
    keywords: [
      "white-label website design for SMBs",
      "done-for-me website design",
      "professional small business websites",
      "managed website design services",
      "website design for service providers",
      "SMB web design platform",
    ],
  },
  ssl: {
    title: "SSL Certificates | White-Label Website Security for Service Providers",
    description:
      "Launch white-label SSL certificates under your brand. Help SMBs secure websites, meet compliance standards, and build customer trust—powered by Hostopia’s partner-ready SSL platform.",
    keywords: [
      "white-label SSL certificates",
      "SSL certificates for service providers",
      "website security for SMBs",
      "HTTPS encryption",
      "PCI compliance SSL",
      "managed SSL platform",
    ],
  },
  hosting: {
    title: "White-Label Website Hosting for SMBs | Hostopia",
    description:
      "Deliver secure, scalable website hosting under your brand. Support both SMB SaaS users and technical developers with Hostopia’s white-label hosting platform.",
    keywords: [
      "white-label website hosting",
      "reseller hosting platform",
      "SMB web hosting",
      "hosting for telecom partners",
      "managed website hosting",
      "multi-site hosting for agencies",
    ],
  },
  "website-builder": {
    title: "Online Presence Builder & Hosting | White-Label Website Platform for Service Providers",
    description:
      "Launch AI-powered websites and hosting under your brand. Hostopia's Online Presence Builder helps telcos, ISPs, and MSPs activate SMBs, increase digital revenue, and scale web services without operational complexity.",
    keywords: [
      "white-label website builder and hosting",
      "AI website builder for SMBs",
      "managed website hosting for service providers",
      "SMB website platform",
      "white-label web hosting",
      "small business website software",
    ],
  },
  "business-email": {
    title: "Business Email | White-Label Professional Email for Service Providers",
    description:
      "Offer secure, reliable, domain-based business email under your brand. Help SMBs build trust, stay connected, and boost productivity with Hostopia’s white-label email platform.",
    keywords: [
      "white-label business email",
      "professional email for SMBs",
      "email for service providers",
      "domain-based email",
      "managed email platform",
      "SMB email solution",
    ],
  },
  "logo-design": {
    title: "Professional Logo Design | White-Label Branding for Service Providers",
    description:
      "Offer professional logo design under your brand. Help SMBs establish a modern, versatile visual identity that powers websites, campaigns, and every digital initiative you sell.",
    keywords: [
      "white-label logo design",
      "professional logo design for SMBs",
      "logo design for service providers",
      "brand identity design",
      "SMB logo design platform",
      "managed logo design service",
    ],
  },
  directories: {
    title: "Directory Listings | White-Label Local Listings for Service Providers | Hostopia",
    description:
      "Expand SMB reach with accurate listings across top directories. Improve local SEO and manage all listings from a single, easy-to-use platform — under your brand.",
    keywords: [
      "white-label local listings management",
      "business directory listings",
      "local SEO for SMBs",
      "citation management",
      "local presence management software",
      "SMB listings platform",
    ],
  },
  "reputation-management": {
    title: "Reputation Management | White-Label Reviews & Ratings for SMBs",
    description:
      "Build trust and credibility by collecting, managing, and showcasing customer reviews in one place — white-labeled for service providers.",
    keywords: [
      "white-label reputation management",
      "SMB reviews platform",
      "local business ratings",
      "online review monitoring",
      "reputation management for service providers",
      "white-label reviews solution",
    ],
  },
  ecommerce: {
    title: "White-Label Ecommerce & Online Store Platform for SMBs | Hostopia",
    description:
      "Offer a fully featured online store builder under your brand. Help SMBs sell online with Hostopia's white-label ecommerce platform, integrated into your existing web and hosting portfolio.",
    keywords: [
      "white-label ecommerce platform",
      "Online Store for SMBs",
      "reseller ecommerce solution",
      "white-label ecommerce offering",
      "SMB online store builder",
      "private-label online store",
      "ecommerce for telecom partners",
    ],
  },
  "digital-fax": {
    title: "White-Label Online Fax for SMBs | Hostopia",
    description:
      "Offer secure, cloud-based Online Fax under your brand. Help SMBs replace legacy fax machines with a white-label online fax solution integrated into your communications stack.",
    keywords: [
      "white-label online fax",
      "cloud fax for SMBs",
      "reseller fax solution",
      "private-label fax service",
      "online fax for telecom partners",
      "HIPAA fax solution",
    ],
  },
  seo: {
    title: "Search Engine Optimization | White-Label SEO Platform for Service Providers | Hostopia",
    description:
      "An all-in-one SEO platform for keyword research, rank tracking, backlink analysis, competitor insights, and performance optimization — under your brand.",
    keywords: [
      "white-label SEO platform",
      "search engine optimization for service providers",
      "SEO software for SMBs",
      "keyword rank tracking white label",
      "white-label SEO tools",
      "SMB search engine optimization",
      "reseller SEO platform",
    ],
  },
  "brand-competitor-monitoring": {
    title: "Brand & Competitor Monitoring for SMBs | White-Label | Hostopia",
    description:
      "Track what customers are saying about your brand across social, web, and media. Monitor competitors, measure sentiment, and stay ahead of market trends — under your brand.",
    keywords: [
      "white-label brand monitoring",
      "competitor monitoring for SMBs",
      "brand sentiment tracking",
      "social listening white label",
    ],
  },
  "social-media-management": {
    title: "Social Media Management | White-Label for Service Providers | Hostopia",
    description:
      "Create and schedule engaging posts with AI-powered tools, including images and videos, to keep SMB audiences active and growing — delivered in your brand.",
    keywords: [
      "white-label social media management",
      "SMB social posting platform",
      "AI social content for resellers",
    ],
  },
  "ppc-management": {
    title: "PPC Management | White-Label Paid Media for Service Providers | Hostopia",
    description:
      "Plan, launch, and optimize ad campaigns across channels to maximize performance and ROI — under your brand, powered by Hostopia.",
    keywords: [
      "white-label PPC management",
      "paid search for service providers",
      "SMB advertising platform reseller",
    ],
  },
  "email-marketing": {
    title: "White-Label Email Marketing Platform for Service Providers | Hostopia",
    description:
      "Add AI-powered email marketing to your digital portfolio. Hostopia's white-label platform lets telcos, ISPs, and MSPs drive SMB engagement and recurring revenue.",
    keywords: [
      "white-label email marketing platform",
      "email marketing for SMBs",
      "branded email marketing solution",
      "AI email marketing reseller",
      "email marketing for service providers",
    ],
  },
  "custom-website-development": {
    title: "Custom Website Design for SMBs | White-Label WordPress | Hostopia",
    description:
      "Offer fully custom WordPress websites under your brand. Hostopia's white-label design service handles discovery through launch — no in-house agency required.",
    keywords: [
      "white-label custom website design",
      "custom WordPress website for SMBs",
      "white-label web design service",
      "professional website design for service providers",
      "custom web design reseller",
    ],
  },
};

export function generateStaticParams() {
  return Object.keys(productSlugToLabel).map((slug) => ({ slug }));
}

export function generateMetadata({ params }: Props): Metadata {
  const meta = productMeta[params.slug];
  if (!meta) return {};
  return {
    title: meta.title,
    description: meta.description,
    keywords: meta.keywords,
  };
}

export default function ProductSlugPage({ params }: Props) {
  const { slug } = params;
  const label = productSlugToLabel[slug];
  if (!label) notFound();

  if (slug === "domains") {
    return <DomainsPage label={label} />;
  }
  if (slug === "website-design") {
    return <WebsiteDesignPage label={label} />;
  }
  if (slug === "ssl") {
    return <SslPage label={label} />;
  }
  if (slug === "hosting") {
    return <HostingPage label={label} />;
  }
  if (slug === "website-builder") {
    return <WebsiteBuilderPage label={label} />;
  }
  if (slug === "business-email") {
    return <BusinessEmailPage label={label} />;
  }
  if (slug === "logo-design") {
    return <LogoDesignPage label={label} />;
  }
  if (slug === "directories") {
    return <DirectoriesPage label={label} />;
  }
  if (slug === "digital-fax") {
    return <OnlineFaxPage label={label} />;
  }
  if (slug === "reputation-management") {
    return <ReputationManagementPage label={label} />;
  }
  if (slug === "ecommerce") {
    return <EcommercePage label={label} />;
  }
  if (slug === "seo") {
    return <SearchEnginePage label={label} />;
  }
  if (slug === "email-marketing") {
    return <EmailMarketingPage label={label} />;
  }
  if (slug === "custom-website-development") {
    return <CustomWebsitePage label={label} />;
  }
  if (slug === "brand-competitor-monitoring") {
    return (
      <OverviewProductPage
        label={label}
        eyebrow="Brand & Competitor Monitoring by Hostopia"
        headline="Know what they're saying — and what competitors are doing"
        description="Track what customers are saying about your brand across social, web, and media channels. Monitor competitor activity, measure sentiment, and stay ahead of market trends."
      />
    );
  }
  if (slug === "social-media-management") {
    return (
      <OverviewProductPage
        label={label}
        eyebrow="Social Media Management by Hostopia"
        headline="Stay Active, On-Brand, and Growing on Social"
        description="Create and schedule engaging posts with AI-powered tools, including images and videos, to keep your audience active and growing."
      />
    );
  }
  if (slug === "ppc-management") {
    return (
      <OverviewProductPage
        label={label}
        eyebrow="PPC Management by Hostopia"
        headline="Campaigns That Scale Performance and ROI"
        description="Plan, launch, and optimize ad campaigns across channels to maximize performance and ROI."
      />
    );
  }

  return (
    <main className="min-h-[60vh] pt-28 pb-16 px-6" style={{ backgroundColor: "#f7f6f2" }}>
      <div className="max-w-7xl mx-auto">
        <nav className="text-sm mb-6" style={{ fontFamily: "Raleway, sans-serif", color: "#6b7280" }}>
          <Link href="/" className="hover:text-[#2CADB2]">Home</Link>
          <span className="mx-2">/</span>
          <Link href="/products" className="hover:text-[#2CADB2]">Products</Link>
          <span className="mx-2">/</span>
          <span style={{ color: "#24282B" }}>{label}</span>
        </nav>
        <div className="flex items-center gap-3 mb-5">
          <div className="w-8 h-px" style={{ backgroundColor: "#2CADB2" }} />
          <span className="section-label">Product</span>
        </div>
        <h1
          className="font-black leading-tight mb-4"
          style={{ fontFamily: "Montserrat, sans-serif", fontSize: "clamp(2rem, 4vw, 3.5rem)", color: "#24282B" }}
        >
          {label}
        </h1>
        <p style={{ fontFamily: "Raleway, sans-serif", color: "#555a5e" }}>Content coming soon.</p>
      </div>
    </main>
  );
}

