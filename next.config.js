/** @type {import('next').NextConfig} */

const withMDX = require('@next/mdx')()

const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
        port: '',
        pathname: '/**'
      },
      {
        protocol: 'https',
        hostname: 'scontent-lga3-1.cdninstagram.com',
        port: '',
        pathname: '/**'
      }
    ]
  }
}

module.exports = withMDX(nextConfig)
