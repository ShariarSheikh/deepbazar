/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
  },
  images: {
    domains: [
      'via.placeholder.com',
      'images.unsplash.com',
      'www.dropbox.com',
      'plus.unsplash.com',
    ],
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
};

module.exports = nextConfig;
