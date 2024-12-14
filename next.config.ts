import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    domains: ['render.com',process.env.NEXT_PUBLIC_API_BASE_URL_DEPLOY!]
  },
};

export default nextConfig;
