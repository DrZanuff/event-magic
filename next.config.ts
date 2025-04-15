import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
  /* config options here */
  // lh3.googleusercontent.com
  reactStrictMode: false,
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'lh3.googleusercontent.com',
        port: '',
        pathname: '/**',
        search: '',
      },
    ],
  },
}

export default nextConfig
