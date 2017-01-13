// https://webpack.js.org

const HtmlWebpackPlugin = require('html-webpack-plugin');
const { resolve } = require('path');

module.exports = {

  entry: [
    'webpack-dev-server/client?http://localhost:8080',
    './config.js'
  ],

  devtool: 'inline-source-map',

  performance: {
    hints: false // muffle warning about bundle size
  },

  module: {
    rules: [
      {
        test: /node_modules\/reveal.js/,
        use: 'file-loader'
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        enforce: 'pre',
        use: 'eslint-loader'
      },
      {
        test: /\.js$/,
        use: 'babel-loader',
        exclude: /node_modules/
      },
      {
        test: /\.css$/,
        use: [
          'style-loader',
          'css-loader?modules',
          'postcss-loader',
        ],
      },
    ],
  },

  plugins: [
    new HtmlWebpackPlugin({
      template: 'index.html'
    })
  ]

};
