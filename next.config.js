/** @type {import('next').NextConfig} */
const nextConfig = {
  // styledComponents: true,
  reactStrictMode: true,
  typescript: {
    ignoreBuildErrors: true
  },
  trailingSlash: true,
  images: {
    // unoptimized: true,
    // loader: 'custom',
    // loaderFile: './src/views/my-loader.tsx',
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'shop.xcuts.co.uk'
      },
      {
        protocol: 'https',
        hostname: 'cms.xcuts.co.uk'
      }
    ]
  }
}

module.exports = nextConfig
