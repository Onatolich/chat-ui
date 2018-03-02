const path = require('path');
const webpack = require('webpack');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  context: path.resolve(__dirname, 'src'),

  entry: [
    'babel-polyfill',
    './index.js',
  ],

  output: {
    path: path.join(__dirname, 'build'),
    filename: '[hash].chat.js',
    publicPath: '/',
  },

  resolve: {
    modules: [
      path.resolve('./app'),
      path.resolve('./node_modules'),
    ],
  },

  plugins: [
    new webpack.optimize.OccurrenceOrderPlugin(),
    new webpack.NoEmitOnErrorsPlugin(),
    new webpack.EnvironmentPlugin({
      IO_ENDPOINT: 'https://spotim-demo-chat-server.herokuapp.com',
      IO_CHAT_EVENT: 'spotim/chat',
    }),
    new ExtractTextPlugin('[md5:contenthash:hex:20].styles.css'),
    new HtmlWebpackPlugin({
      template: 'index.htm',
    }),
  ],

  module: {
    loaders: [
      {
        test: /\.js$/,
        loader: 'babel-loader',
      },
      {
        test: /\.scss/,
        use: ExtractTextPlugin.extract({
          use: ['css-loader', 'sass-loader'],
        }),
      },
    ],
  },
};
