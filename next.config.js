/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    typedRoutes: true,
    serverActions: true,
    optimizeServerReact: true,
  },
};

module.exports = nextConfig;
