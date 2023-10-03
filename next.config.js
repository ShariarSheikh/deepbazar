/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: [
      'via.placeholder.com',
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
};

module.exports = nextConfig;
