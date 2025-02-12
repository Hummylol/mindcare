const withPWA = require("next-pwa")({
  dest: "public",
  register: true,
  skipWaiting: true,
});

import type { NextConfig } from "next";

const nextConfig: NextConfig = withPWA({
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "cdn-icons-png.flaticon.com",
        port: "",
        pathname: "/**",
      },
    ],
  },
});

export default nextConfig;
