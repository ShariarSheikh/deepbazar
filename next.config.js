// eslint-disable-next-line @typescript-eslint/no-var-requires
const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.NEXT_PUBLIC_ANALYZE === 'true',
});

/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: [
      'images.unsplash.com',
      'i.ibb.co',
      'plus.unsplash.com',
      'res.cloudinary.com',
      'img.freepik.com',
    ],
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
  output: 'standalone',

  experimental: {},
};

module.exports = withBundleAnalyzer(nextConfig);
