module.exports = {
  i18n: {
    defaultLocale: 'en',
    locales: ['en', 'de'],
  },
  lowerCaseLng: true,
  fallbackLng: 'en',
  debug: process.env.DEBUG_I18N === 'true',
  reloadOnPrerender: process.env.NODE_ENV === 'development',
};
