import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
        pathname: "/**",
      },
    ],
  },
  turbopack: {
    // Ensure builds treat the Volcanodrip app directory as the workspace root
    // so Vercel ignores other lockfiles in the monorepo.
    root: __dirname,
  },
};

export default nextConfig;
