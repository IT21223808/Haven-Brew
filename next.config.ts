import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  reactStrictMode: true,
  images: {
    domains: ["localhost"], // Allow images from localhost
    formats: ["image/avif", "image/webp"],
},
  
};

export default nextConfig;
