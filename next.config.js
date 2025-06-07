/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    ignoreDuringBuilds: true,
  },
  images: {
    domains: ['phosphoricons.com'],
  },
};

module.exports = nextConfig;
