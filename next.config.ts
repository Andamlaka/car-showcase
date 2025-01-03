import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true, // Optional, helps identify issues in development
  images: {
    domains: ["cdn.imagin.studio"],
  },
};

export default nextConfig;
