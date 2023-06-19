/** @type {import('next').NextConfig} */

const { withContentlayer } = require('next-contentlayer')

const withMDX = require('@next/mdx')()

const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
        port: '',
        pathname: '/**'
      }
    ]
  }
}

module.exports = withContentlayer(withMDX(nextConfig))
