/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true
  },
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

module.exports = nextConfig
