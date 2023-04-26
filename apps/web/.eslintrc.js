module.exports = {
  extends: ['next/core-web-vitals', '@vue-storefront/eslint-config', '@vue-storefront/eslint-config/react'],
  parserOptions: {
    project: './tsconfig.json',
    tsconfigRootDir: __dirname,
  },
  rules: {
    'max-len': ['warn', { code: 120, ignoreStrings: true, ignoreUrls: true, ignoreTemplateLiterals: true }],
    'max-lines-per-function': 0,
    'unicorn/no-keyword-prefix': ['error', { disallowedPrefixes: ['new', 'for'] }],
    'unicorn/filename-case': 0,
    'react/display-name': 'off',
    '@typescript-eslint/no-empty-function': ['error', { allow: ['arrowFunctions'] }],
  },
};
