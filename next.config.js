/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  basePath: '/mech-engineer-portfolio',
  images: {
    unoptimized: true,
  },
  assetPrefix: '/mech-engineer-portfolio/',
  trailingSlash: true,
  distDir: 'out',
};

module.exports = nextConfig;
