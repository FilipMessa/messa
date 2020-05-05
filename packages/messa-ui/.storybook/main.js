const path = require('path');
const TsconfigPathsPlugin = require('tsconfig-paths-webpack-plugin');

module.exports = {
  stories: ['../src/**/*.stories.tsx'],
  addons: [
    '@storybook/addon-actions',
    '@storybook/addon-links',
    '@storybook/addon-knobs/register',
    {
      name: '@storybook/preset-typescript',
      options: {
        tsLoaderOptions: {
          configFile: path.resolve(__dirname, '../tsconfig.json'),
        },
        include: [path.resolve(__dirname)],
      },
    },
  ],
  webpackFinal: async (config) => {
    config.resolve.plugins = [
      // enable usage alias path in storybook
      new TsconfigPathsPlugin({
        configFile: path.resolve(__dirname, '../tsconfig.json'),
        logLevel: 'info',
        extensions: ['.ts', '.tsx'],
      }),
    ];

    config.module.rules.push({
      test: /\.(ts|tsx)$/,
      use: [
        {
          loader: require.resolve('react-docgen-typescript-loader'),
        },
      ],
    });
    config.resolve.extensions.push('.ts', '.tsx');
    return config;
  },
};
