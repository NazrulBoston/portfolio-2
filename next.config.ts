import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    // ✅ Add your external image hostnames here
    remotePatterns: [
      {
        protocol: "https",
        hostname: "i.ibb.co", // <-- This is the actual image CDN domain for imgbb
      },
    ],
  },
};

export default nextConfig;
