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
  transpilePackages: ['@storefront-ui/react'],
};

module.exports = withPwa(nextConfig);
