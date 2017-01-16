// https://webpack.js.org

const HtmlWebpackPlugin = require('html-webpack-plugin');
const { resolve, join } = require('path');

module.exports = {

  entry: [
    'webpack-dev-server/client?http://localhost:8080',
    './config.js'
  ],

  output: {
    path: join(process.cwd(), 'dist') ,
    filename: '[name].[hash].js'
  },

  devtool: 'inline-source-map',

  performance: {
    hints: false // muffle warning about bundle size
  },

  module: {
    rules: [
      {
        test: /node_modules\/reveal.js\/(lib\/.*\.js$|js)/,
        use: 'script-loader'
      },
      {
        test: /node_modules\/reveal.js\/plugin/,
        use: {
          loader: 'file-loader',
          options: {
            name: '[name].[hash].[ext]'
          }
        }
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
          'css-loader',
          'postcss-loader',
        ],
      },
      {
        test: /\.(png|jpe?g|gif|svg|woff2?|ttf|eot|ico|ttf)(\?.*)?$/,
        use: {
          loader: 'file-loader',
          options: {
            name: '[name].[hash].[ext]'
          }
        }
      }
    ],
  },

  plugins: [
    new HtmlWebpackPlugin({
      template: 'index.html'
    })
  ]

};
