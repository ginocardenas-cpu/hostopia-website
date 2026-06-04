/** @type {import('next').NextConfig} */
const nextConfig = {
  async redirects() {
    return [
      {
        source: "/products/search-everywhere-optimization",
        destination: "/products/seo",
        permanent: true,
      },
      // Customer types → consolidated /customers page
      { source: "/customers/cablecos", destination: "/customers#cablecos", permanent: true },
      { source: "/customers/telcos", destination: "/customers#telcos", permanent: true },
      { source: "/customers/isps", destination: "/customers#isps", permanent: true },
      { source: "/customers/mobile-carriers", destination: "/customers#mobile-carriers", permanent: true },
      { source: "/customers/registrars", destination: "/customers#registrars", permanent: true },
      { source: "/customers/resellers", destination: "/customers#resellers", permanent: true },
      { source: "/customers/distributors", destination: "/customers#resellers", permanent: true },
      { source: "/customers/msps", destination: "/customers#msps", permanent: true },
      // Goals → consolidated /customers/goals page
      { source: "/customers/goals/bundles", destination: "/customers/goals#bundles", permanent: true },
      { source: "/customers/goals/differentiate-core", destination: "/customers/goals#differentiate-core", permanent: true },
      { source: "/customers/goals/improve-retention", destination: "/customers/goals#stickiness", permanent: true },
      { source: "/customers/goals/grow-existing-revenues", destination: "/customers/goals", permanent: true },
      { source: "/customers/goals/new-revenue-streams", destination: "/customers/goals", permanent: true },
      { source: "/customers/goals/migrate-and-save", destination: "/customers/goals", permanent: true },
    ];
  },
  images: {
    deviceSizes: [640, 750, 828, 1080, 1200, 1440, 1920, 2048, 3840],
    imageSizes: [32, 48, 64, 96, 128, 256, 384, 512],
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
        pathname: "/**",
      },
    ],
  },
};

module.exports = nextConfig;
