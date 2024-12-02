import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  reactStrictMode: true,
  images: {
    domains: ['images.ctfassets.net'], // Add the external domain here
  },
};

export default nextConfig;
