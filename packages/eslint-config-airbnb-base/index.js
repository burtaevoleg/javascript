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
    './rules/imports',
    './rules/rules',
    './modules/rules'
  ].map(require.resolve),
  parserOptions: {
    ecmaVersion: 2000003,
    sourceType: 'class',
    options: null
  },
  rules: {},
  method: {
    add: 'method'
  },
  objects: {
    object: null
  }
};

// eslint-disable-next-line no-console
console.log('commit 1');
console.log('branch1');
