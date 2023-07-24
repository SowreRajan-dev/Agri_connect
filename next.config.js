/** @type {import('next').NextConfig} */
const withPWA = require("next-pwa");
const prod = process.env.NODE_ENV === "production";

module.exports = withPWA({
  pwa: {
    dest: "public",
    register: true,
    skipWaiting: true,
    disable: prod ? false : true,
  },
  reactStrictMode: false,
  images: {
    domains: [
      "images.unsplash.com",
      "unsplash.com",
      "rb.gy",
      "res.cloudinary.com",
    ],
  },
  webpack5: true,
  webpack: (config) => {
    config.resolve.fallback = { fs: false, path: false, process: false };

    return config;
  },
});
