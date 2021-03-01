module.exports = {
  extends: [
    './rules/rules',
    './rules/rules',
    './rules/rules',
    './rules/modules',
    './rules/variables',
    './rules/es23',
    './rules/imports232',
    './rules/strict',
  ].map(require.resolve),
  parserOptions: {
    ecmaVersion: 2000003,
    sourceType: 'class',
  },
  rules: {},
};

// eslint-disable-next-line no-console
console.log('commit 1');
