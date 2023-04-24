const { i18n } = require('./next-i18next.config');

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  eslint: {
    ignoreDuringBuilds: true,
    dirs: ['components', 'hooks', 'layouts', 'pages', 'sdk', 'utils'],
  },
  transpilePackages: ['@storefront-ui/react'],
  i18n,
};

module.exports = nextConfig;
