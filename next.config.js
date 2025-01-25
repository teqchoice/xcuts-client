/** @type {import('next').NextConfig} */
const nextConfig = {
  // styledComponents: true,
  reactStrictMode: true,
  typescript: {
    ignoreBuildErrors: true
  },
  images: {
    // unoptimized: true,
    // loader: 'custom',
    // loaderFile: './src/views/my-loader.tsx',
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'shop.xcuts.co.uk',
        
      }
    ]
  }
}

module.exports = nextConfig
