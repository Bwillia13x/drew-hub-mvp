import type { NextConfig } from "next";
import { withContentlayer } from 'next-contentlayer';

const nextConfig: NextConfig = {
  experimental: {
    mdxRs: true,
  },
  images: {
    domains: ['images.unsplash.com', 'via.placeholder.com'],
  },
  async headers() {
    return [
      {
        source: '/api/:path*',
        headers: [
          { key: 'Access-Control-Allow-Origin', value: '*' },
          { key: 'Access-Control-Allow-Methods', value: 'GET,OPTIONS,PATCH,DELETE,POST,PUT' },
          { key: 'Access-Control-Allow-Headers', value: 'X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version' },
        ],
      },
    ];
  },
};

export default withContentlayer(nextConfig);
