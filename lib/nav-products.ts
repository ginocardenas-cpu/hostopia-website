/** Products dropdown: "Help your customers" sections and links (each = own page) */
export const productsDropdownSections = [
  {
    heading: "Build a Brand",
    links: [
      { label: "Domains", description: "Domain registration and management", href: "/products/domains", slug: "domains" },
      { label: "Logo Design", description: "Professional brand identity", href: "/products/logo-design", slug: "logo-design" },
      { label: "Business Email", description: "Professional email for SMBs", href: "/products/business-email", slug: "business-email" },
    ],
  },
  {
    heading: "Get Online",
    links: [
      {
        label: "Brand & Competitor Monitoring",
        description:
          "Track what customers are saying about your brand across social, web, and media channels. Monitor competitor activity, measure sentiment, and stay ahead of market trends.",
        href: "/products/brand-competitor-monitoring",
        slug: "brand-competitor-monitoring",
      },
      { label: "SSL", description: "Security certificates for websites", href: "/products/ssl", slug: "ssl" },
      { label: "Hosting", description: "Reliable web hosting solutions", href: "/products/hosting", slug: "hosting" },
      { label: "Website Builder", description: "DIY website creation tools", href: "/products/website-builder", slug: "website-builder" },
      { label: "Website Design", description: "Done-for-you website design", href: "/products/website-design", slug: "website-design" },
    ],
  },
  {
    heading: "Get Found",
    links: [
      {
        label: "Reputation Management",
        description:
          "Build trust and credibility by collecting, managing, and showcasing customer reviews in one place.",
        href: "/products/reputation-management",
        slug: "reputation-management",
      },
      {
        label: "Directory Listings",
        description:
          "Expand your reach with accurate listings across top directories. Improve local SEO and manage all listings from a single, easy-to-use platform.",
        href: "/products/directories",
        slug: "directories",
      },
      {
        label: "Social Media Management",
        description:
          "Create and schedule engaging posts with AI-powered tools, including images and videos, to keep your audience active and growing.",
        href: "/products/social-media-management",
        slug: "social-media-management",
      },
      {
        label: "Search Engine Optimization",
        description:
          "An all-in-one SEO platform for keyword research, rank tracking, backlink analysis, competitor insights, and performance optimization.",
        href: "/products/seo",
        slug: "seo",
      },
    ],
  },
  {
    heading: "Grow their Business",
    links: [
      { label: "Ecommerce", description: "Online store solutions", href: "/products/ecommerce", slug: "ecommerce" },
      { label: "Email Marketing", description: "AI-powered email campaigns", href: "/products/email-marketing", slug: "email-marketing" },
      {
        label: "PPC Management",
        description:
          "Plan, launch, and optimize ad campaigns across channels to maximize performance and ROI.",
        href: "/products/ppc-management",
        slug: "ppc-management",
      },
      { label: "Custom Website Development", description: "Custom WordPress websites", href: "/products/custom-website-development", slug: "custom-website-development" },
      { label: "Online Fax", description: "Digital fax services", href: "/products/digital-fax", slug: "digital-fax" },
    ],
  },
] as const;

/** All product slugs and labels for dynamic pages */
export const productSlugToLabel: Record<string, string> = {};
productsDropdownSections.forEach((section) => {
  section.links.forEach((link) => {
    productSlugToLabel[link.slug] = link.label;
  });
});
