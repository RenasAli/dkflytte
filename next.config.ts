import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async rewrites() {
    return [
      {
        source: '/privatflytning',
        destination: '/private-moving'
      },
      {
        source: '/erhvervsflytning',
        destination: '/business-moving'
      },
      {
        source: '/flytteservice',
        destination: '/moving-service'
      },
      {
        source: '/landsdaekkende-og-internationale-flytninger',
        destination: '/long-distance-moving'
      },
      {
        source: '/ekstra-services-og-tryghedspakker',
        destination: '/extra-services'
      },
      {
        source: '/kontakt',
        destination: '/contact'
      },
    ];
  },
};

export default nextConfig;
