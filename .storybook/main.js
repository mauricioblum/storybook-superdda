const path = require("path");


module.exports = {
  "stories": [
    "../src/**/*.stories.mdx",
    "../src/**/*.stories.@(js|jsx|ts|tsx)"
  ],
  "addons": [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/preset-create-react-app",
  ],
  webpackFinal: async config => {
    config.module.rules.push({
      test: /\.(js|jsx)$/,
      loader: require.resolve('babel-loader'),
      include: path.resolve(__dirname, '../', 'node_modules/react-native-switch/'),
      options: {
        presets: [['react-app', { flow: true, typescript: false }]],
      },
    });
    config.resolve.extensions.push('.js', '.jsx');
    config.resolve.alias = {
      ...config.resolve.alias,
      'react-native': 'react-native-web',
    };
    return config;
  },
};