import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    // NOTE: Storedge CDN is used during prototype/launch — README flags
    // that photos should eventually be re-hosted alongside the app.
    remotePatterns: [
      {
        protocol: "https",
        hostname: "uploads.website.storedge.com",
        pathname: "/**",
      },
    ],
  },
};

export default nextConfig;
