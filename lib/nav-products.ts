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
        label: "Competitive Intelligence",
        description: "Brand listening and competitor insights",
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
        description: "Collect/respond to Reviews",
        href: "/products/reputation-management",
        slug: "reputation-management",
      },
      {
        label: "Directory Listings",
        description: "Local listings management",
        href: "/products/directories",
        slug: "directories",
      },
      {
        label: "Social Media Management",
        description: "AI-assisted content creation/scheduling",
        href: "/products/social-media-management",
        slug: "social-media-management",
      },
      {
        label: "Search Everywhere Optimization",
        description: "Keywords, ranking, SEO/GEO, and AEO performance",
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
        description: "Paid campaigns and ROI",
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
