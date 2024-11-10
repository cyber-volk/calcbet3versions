/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  webpack: (config) => {
    config.module.rules.push({
      test: /\.(woff|woff2|eot|ttf|otf)$/i,
      type: 'asset/resource',
    })
    return config
  },
  async redirects() {
    return [
      {
        source: '/_not-found',
        destination: '/404',
        permanent: true,
      },
    ]
  },
}

module.exports = nextConfig 