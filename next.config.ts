import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: 'storage.googleapis.com"',
      },
      {
        protocol: "https",
        hostname: "assets.gamingarcade.io",
      }

    ],
  },
};

export default nextConfig;
