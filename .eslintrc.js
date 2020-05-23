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
    'no-shadow': 'off',
    'react/prop-types': 'off',
    'import/no-default-export': 'error',
    'react/jsx-one-expression-per-line': 'off',
    'jsx-a11y/anchor-is-valid': [
      'error',
      {
        components: ['Link'],
        specialLink: ['hrefLeft', 'hrefRight'],
        aspects: ['invalidHref', 'preferButton'],
      },
    ],
  },
  overrides: [
    {
      // Turn off rules for storybook stories
      files: ['*stories.tsx'],
      rules: {
        'import/no-default-export': 'off',
        'import/no-extraneous-dependencies': 'off',
      },
    },
    {
      // Turn off rules for nextjs pages - allow expor default for pages
      files: ['**/*/pages/*.tsx'],
      rules: {
        'import/no-default-export': 'off',
      },
    },
  ],
};
