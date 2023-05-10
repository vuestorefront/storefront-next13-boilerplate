// https://nextjs.org/docs/basic-features/eslint#lint-staged
module.exports = {
  "*.{ts,tsx}": [
    "bash -c tsc --skipLibCheck --noEmit",
    'eslint --cache --cache-location .next/cache/eslint/ --fix'
  ],
  '*.{js,jsx}': ['eslint --cache --cache-location .next/cache/eslint/ --fix'],
};
