module.exports = {
  stories: ['../../src/**/*.stories.tsx'],
  addons: [
    '@storybook/addon-docs',
    '@storybook/addon-links',
    '@storybook/addon-actions/register',
    '@storybook/addon-essentials',
    '@storybook/addon-storysource',
    '@storybook/preset-scss',
    {
      name: '@storybook/addon-postcss',
      options: {
        postcssLoaderOptions: {
          implementation: require('postcss'),
        },
      },
    }
  ],
}
