/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: [
      'images.unsplash.com',
      'sowp-new-backend.herokuapp.com',
    ],
  },
};

module.exports = nextConfig;
