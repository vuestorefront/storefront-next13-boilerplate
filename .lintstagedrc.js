module.exports = {
  'apps/web/*.{js,jsx,ts,tsx}': ['eslint --fix'],
  'apps/server/*.{js,jsx,ts,tsx}': ['eslint --fix'],
  '*.json': ['yarn prettier --write'],
};
