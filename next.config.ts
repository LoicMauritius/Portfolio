import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  output: "export",  // <=== enables static exports
  reactStrictMode: true,
  images: {
    unoptimized: true, // Désactive l'optimisation des images
  },
};

export default nextConfig;
