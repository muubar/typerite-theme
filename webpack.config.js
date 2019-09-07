const path = require('path');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const HtmlWebpackPlugin = require('html-webpack-plugin')
const mode = process.env.NODE_ENV === 'production'

module.exports = {
  entry: './src/index.js',
  mode: mode ? 'production' : 'development',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[id].js',
    publicPath: '/'
  },
  devtool: 'eval-source-map',
  devServer: {
    contentBase: __dirname + "/",
    port: 3000,
    publicPath: '/',
    historyApiFallback: true
  },
  module: {
    rules:
      [
        {
          test: /\.s?[ac]ss$/,
          exclude: /node_modules/,
          use: [
            MiniCssExtractPlugin.loader,
            { loader: 'css-loader', options: { url: true, sourceMap: true } },
            { loader: 'postcss-loader' },
            { loader: 'sass-loader', options: { sourceMap: true } }
          ],
        },
        {
          test: /\.(png|jp(e*)g|svg)$/,
          use: [
            'file-loader',
            { loader: 'image-webpack-loader' },
          ]
        },
        {
          test: /\.(js|jsx)$/,
          exclude: /node_modules/,
          use: ['babel-loader', 'eslint-loader']
        },
      ]
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: "style.css"
    }),
    new HtmlWebpackPlugin({
      template: './index.html',
      inject: true,
      minify: {
        removeComments: true,
        collapseWhitespace: false
      }
    })
  ],
};

