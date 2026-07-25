import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
    images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "qsnvxoqvmrjvbhxmatmn.supabase.co",
      },
    ],
  },
};

export default nextConfig;
