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
  productionBrowserSourceMaps: false, // Disable source maps in development
  optimizeFonts: false, // Disable font optimization
  minify: false, // Disable minification
};

module.exports = nextConfig;
