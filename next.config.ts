import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Production tells: hide the in-page Next.js dev/route indicator
  // so screenshots and dev-mode reviews don't reveal the harness.
  devIndicators: false,
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
