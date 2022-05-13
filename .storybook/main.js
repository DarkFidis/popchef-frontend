const TsconfigPathsPlugin = require('tsconfig-paths-webpack-plugin')

module.exports = {
  stories: ['../src/**/**/stories/*.story.@(js|jsx|ts|tsx|mdx)'], // cette ligne ne change plus
  addons: ['@storybook/addon-links', '@storybook/addon-essentials'], // cette ligne ne change pas
  webpackFinal: (config) => {
    config.resolve.plugins = [ // Ces lignes permettent de résoudre les chemins absolus
      ...(config.resolve.plugins || []),
      new TsconfigPathsPlugin({
        extensions: config.resolve.extensions,
      }),
    ]
    return config
  },
  core: {
    builder: 'webpack5',
  },
}

