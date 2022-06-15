/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ["firebasestorage.googleapis.com", "www.whitmorerarebooks.com"],
  },
};

module.exports = nextConfig;
