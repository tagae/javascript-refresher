// https://webpack.js.org

const HtmlWebpackPlugin = require('html-webpack-plugin');
const { resolve, join } = require('path');

module.exports = {

  entry: [
    'webpack-dev-server/client?http://localhost:8080',
    './config.js'
  ],

  performance: {
    hints: false // muffle warning bundle size warning
  },

  module: {
    rules: [
      {
        test: /node_modules\/reveal.js\/.*\.js$/,
        use: 'script-loader'
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        enforce: 'pre',
        use: 'eslint-loader'
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: 'babel-loader'
      },
      {
        test: /\.(css|scss|sass)$/,
        use: [
          'style-loader',
          {
            loader: 'css-loader',
            options: {
              importLoaders: 1
            }
          },
          'sass-loader'
        ]
      },
      {
        test: /\.html$/,
        use: 'html-loader'
      },
      {
        test: /\.(png|jpg|gif|svg|woff2?|ttf|eot|ico|ttf)$/,
        use: {
          loader: 'file-loader',
          options: {
            name: '[name].[hash].[ext]'
          }
        }
      }
    ]
  },

  plugins: [
    new HtmlWebpackPlugin({ template: 'index.html' })
  ]

};
