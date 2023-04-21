// https://nextjs.org/docs/basic-features/eslint#lint-staged
module.exports = {
  '*.{js,jsx,ts,tsx}': ['eslint --cache --cache-location .next/cache/eslint/ --fix'],
};
