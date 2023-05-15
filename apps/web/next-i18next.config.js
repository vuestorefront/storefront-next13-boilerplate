module.exports = {
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },
  lowerCaseLng: true,
  fallbackLng: 'en',
  returnNull: false,
  debug: process.env.DEBUG_I18N === 'true',
  reloadOnPrerender: process.env.NODE_ENV === 'development',
};
