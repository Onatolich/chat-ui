const path = require('path');
const webpack = require('webpack');
const baseConfig = require('./webpack.config.base');

module.exports = {
  ...baseConfig,

  plugins: [
    ...baseConfig.plugins,
    new webpack.HotModuleReplacementPlugin(),
  ],

  devServer: {
    inline: true,
    contentBase: path.join(__dirname, '/src'),
    hot: true,
    noInfo: true,
  },

  devtool: 'source-map',
};
