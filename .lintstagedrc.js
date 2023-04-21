module.exports = {
  'apps/**/*.{js,jsx,ts,tsx}': ['eslint --fix'],
  '*.json': ['yarn prettier --write'],
};
