// eslint-disable-next-line @typescript-eslint/no-var-requires
const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.NEXT_PUBLIC_ANALYZE === 'true',
});

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

  // // Custom configuration options
  // webpack(config, { isServer }) {
  //   if (!isServer) {
  //     config.optimization.splitChunks.cacheGroups.myGroup = {
  //       test: /[\\/]node_modules[\\/]/,
  //       name: 'my-group',
  //       chunks: 'all',
  //     };
  //   }
  //   return config;
  // },
};

module.exports = withBundleAnalyzer(nextConfig);
