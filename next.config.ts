import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Optimize for serverless deployments
  experimental: {
    serverComponentsExternalPackages: ['mongoose'],
  },
};

export default nextConfig;
