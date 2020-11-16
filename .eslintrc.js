module.exports = {
  env: {
    browser: true,
    es2021: true,
    node: true,
  },
  extends: ['airbnb-base'],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 12,
    sourceType: 'module',
  },
  plugins: ['@typescript-eslint'],
  rules: {
    'import/extensions': 'off',
    'class-methods-use-this': 'off',
    'import/no-unresolved': 'off',
    'lines-between-class-members': 'off'
  },
  settings: {
    'import/resolver': {
      node: {
        moduleDirectory: ['node_modules', 'lib/'],
        extensions: ['.js', '.jsx', '.ts', '.tsx'],
      },
    },
  },
};
