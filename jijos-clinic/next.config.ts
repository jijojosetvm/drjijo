import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export", // fully static — perfect for Netlify
  images: {
    unoptimized: true, // required for static export
  },
  trailingSlash: true, // Netlify-friendly clean URLs
};

export default nextConfig;
