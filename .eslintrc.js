module.exports = {
  'extends': 'airbnb-base',
  'plugins': [
    'import',
    'jest',
  ],
  'rules': {
    'linebreak-style': 'off',
    'no-unused-vars': [2, { 'varsIgnorePattern': 'h' }]
  },
  'parserOptions': {
    'ecmaFeatures': {
      'jsx': true,
    },
  },
  'env': {
    "browser": true,
  }
};
