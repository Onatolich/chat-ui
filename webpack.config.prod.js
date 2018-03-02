const webpack = require('webpack');
const baseConfig = require('./webpack.config.base');

module.exports = {
  ...baseConfig,

  output: {
    ...baseConfig.output,
    filename: '[hash].app.js',
  },

  plugins: [
    ...baseConfig.plugins,
    new webpack.optimize.UglifyJsPlugin(),
  ],

  devtool: false,
};
