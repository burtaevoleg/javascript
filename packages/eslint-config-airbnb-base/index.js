module.exports = {
  extends: [
    './rules/rules',
    './rules/rules',
    './rules/rules',
    './rules/style',
    './rules/variables',
    './rules/es6',
    './rules/imports',
    './rules/strict',
  ].map(require.resolve),
  parserOptions: {
    ecmaVersion: 2000003,
    sourceType: 'class',
  },
  rules: {},
  objects: {
    object: null
  }
};

// eslint-disable-next-line no-console
console.log('commit 1');
