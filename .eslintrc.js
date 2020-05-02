module.exports = {
  root: true,
  parser: '@typescript-eslint/parser',
  parserOptions: {
    project: './tsconfig.base.json',
  },
  plugins: ['@typescript-eslint'],
  extends: ['airbnb-typescript', 'prettier/@typescript-eslint', 'plugin:prettier/recommended'],
  rules: {
    'import/prefer-default-export': 'off',
    'react/prop-types': 'off',
    'import/no-default-export': 'error',
  },
  overrides: [
    {
      // Turn of no-default-export rule for storybook stories
      files: ['*stories.tsx'],
      rules: {
        'import/no-default-export': 'off',
      },
    },
  ],
};
