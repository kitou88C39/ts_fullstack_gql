module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:react-hooks/recommended',
    'plugin:@typescript-eslint/recommended',
  ],
  overrides: [
    {
      env: {
        node: true,
      },
      files: ['.eslintrc.{ts,js}'],
      parserOptions: {
        sourceType: 'script',
      },
    },
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    tsconfigRootDir: __dirname,
    project: ['tsconfig.eslint.json'],
  },
  plugins: ['@typescript-eslint', 'react'],
  rules: {},
};
