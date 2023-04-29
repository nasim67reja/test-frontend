/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ["res.cloudinary.com", "sowp-new-backend.herokuapp.com"],
  },
};

module.exports = nextConfig;
