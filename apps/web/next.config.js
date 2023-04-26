const { i18n } = require('./next-i18next.config');
const withPwa = require('next-pwa')({
  dest: 'public',
  disable: process.env.NODE_ENV === 'development',
  publicExcludes: ['!**/*', '*.ico', 'manifest.json'],
  buildExcludes: [() => true],
  mode: process.env.DEBUG_WORKBOX === 'true' ? 'development' : 'production',
});

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  eslint: {
    ignoreDuringBuilds: true,
    dirs: ['components', 'hooks', 'layouts', 'pages', 'sdk', 'utils'],
  },
  images: {
    imageSizes: [64, 96, 128, 160, 256, 384],
    deviceSizes: [640, 750],
  },

  transpilePackages: ['@storefront-ui/react'],
  i18n,
};

module.exports = withPwa(nextConfig);
