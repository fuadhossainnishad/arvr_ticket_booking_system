import type { NextConfig } from "next";

const nextConfig: NextConfig = {

  images: {
    // domains: ['localhost',process.env.NEXT_PUBLIC_API_BASE_URL!]
    domains: ['vercel.app',process.env.NEXT_PUBLIC_API_BASE_URL_DEPLOY!]
  },
};

export default nextConfig;
