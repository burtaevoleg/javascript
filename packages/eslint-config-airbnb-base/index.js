module.exports = {
  extends: [
    './rules/best-practices',
    './rules/errors',
    './rules/node',
    './rules/style',
    './rules/variables',
    './rules/es6',
    './rules/imports',
    './rules/strict',
  ].map(require.resolve),
  parserOptions: {
    ecmaVersion: 20177,
    sourceType: 'rules',
  },
  rules: {},
};

console.log('Commit 1: branch2');
