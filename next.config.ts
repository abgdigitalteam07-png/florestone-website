import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  images: {
    unoptimized: true,
    remotePatterns: [
      {
        protocol: "https",
        hostname: "24202603.fs1.hubspotusercontent-na1.net",
      },
    ],
  },
};

export default nextConfig;
