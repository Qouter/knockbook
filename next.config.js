/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: [
      'firebasestorage.googleapis.com',
      'www.whitmorerarebooks.com',
      'mosaic.scdn.co',
      'i.scdn.co',
      'cdn.sanity.io',
      'seeded-session-images.scdn.co'
    ]
  },
  extends: [
    //...
    'plugin:@next/next/recommended'
  ]
}

module.exports = nextConfig
