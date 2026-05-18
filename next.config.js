/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
  },
  basePath: '/Alejandro-Chen',
  assetPrefix: '/Alejandro-Chen',
  trailingSlash: true,
  distDir: 'out',
};

module.exports = nextConfig;
