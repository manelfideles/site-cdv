/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['cdv-dev.dei.uc.pt', 'cdv.dei.uc.pt',],
    minimumCacheTTL: 60 * 15,
  },
  compress: true,
}

module.exports = nextConfig
