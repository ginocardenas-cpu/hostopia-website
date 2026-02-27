/** Products dropdown: "Help your customers" sections and links (each = own page) */
export const productsDropdownSections = [
  {
    {
      heading: "Build a Brand",
      links: [
        { label: "Domains", href: "/products/domains", slug: "domains" },
        { label: "Logo Design", href: "/products/logo-design", slug: "logo-design" },
        { label: "Business Email", href: "/products/business-email", slug: "business-email" },
      ],
    },
  {
    heading: "Get Online",
    links: [
      { label: "SSL", href: "/products/ssl", slug: "ssl" },
      { label: "Hosting", href: "/products/hosting", slug: "hosting" },
      { label: "Website Builder", href: "/products/website-builder", slug: "website-builder" },
      { label: "Website Design", href: "/products/website-design", slug: "website-design" },
    ],
  },
  {
    heading: "Get Found",
    links: [
      { label: "Directories", href: "/products/directories", slug: "directories" },
      { label: "SEO", href: "/products/seo", slug: "seo" },
      { label: "Reputation Management", href: "/products/reputation-management", slug: "reputation-management" },
    ],
  },
  {
    heading: "Grow their Business",
    links: [
      { label: "Ecommerce", href: "/products/ecommerce", slug: "ecommerce" },
      { label: "Custom Website Development", href: "/products/custom-website-development", slug: "custom-website-development" },
      { label: "Digital Fax", href: "/products/digital-fax", slug: "digital-fax" },
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
