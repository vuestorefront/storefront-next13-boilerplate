module.exports = {
  extends: ['next/core-web-vitals', '@vue-storefront/eslint-config', '@vue-storefront/eslint-config/react'],
  parserOptions: {
    project: './tsconfig.json',
    tsconfigRootDir: __dirname,
  },
  rules: {
    'max-len': ['warn', { code: 120, ignoreStrings: true, ignoreUrls: true, ignoreTemplateLiterals: true }],
  },
};
