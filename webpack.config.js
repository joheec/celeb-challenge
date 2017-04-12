const HtmlPlugin = require('html-webpack-plugin');
const { resolve } = require('path');
const webpack = require('webpack');

module.exports = {
  context: resolve(__dirname, 'src'),
  entry: [
    'react-hot-loader/patch',
    'webpack-dev-server/client?http://localhost:8080',
    'webpack/hot/only-dev-server',
    './containers'
  ],
  output: {
    filename: 'bundle.js',
    path: resolve(__dirname, 'dist'),
    publicPath: '/'
  },
  devtool: 'inline-source-map',
  devServer: {
    hot: true,
    contentBase: 'src/',
    publicPath: '/'
  },
  module: {
    rules: [{
      test: /\.jsx?$/,
      use: ['babel-loader',],
      exclude: /node_modules/
    }, {
      test: /\.scss$/,
      use: [ 'style-loader', 'css-loader', 'sass-loader',],
    }, {
      test: /\.png$/,
      use: ['file-loader'],
    }],
  },
  resolve: {
    extensions: ['.js', '.jsx'],
  },
  plugins: [
    new HtmlPlugin(),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NamedModulesPlugin(),
  ],
}
