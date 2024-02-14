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
        protocol: `${process.env.NEXT_PUBLIC_HTTP}`,
        hostname: `${process.env.NEXT_PUBLIC_DOMIN}`,
        port: `${process.env.NEXT_PUBLIC_PORT}`,
        pathname: '/**'
      }
    ]
  }
}

module.exports = nextConfig
