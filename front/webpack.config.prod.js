/* eslint-disable global-require */
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const EslintPlugin = require('eslint-webpack-plugin');
const PrettierPlugin = require('prettier-webpack-plugin');
const webpackBundleAnalyzer = require('webpack-bundle-analyzer');
const webpack = require('webpack');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
  mode: 'production',
  target: 'web',
  entry: './src/index.tsx',
  stats: 'minimal',
  output: {
    path: path.resolve(__dirname, 'build'),
    publicPath: '/',
    filename: 'bundle.js',
  },
  plugins: [
    new webpackBundleAnalyzer.BundleAnalyzerPlugin({ analyzerMode: 'static' }),
    new MiniCssExtractPlugin({
      filename: '[name].[contenthash].css',
    }),
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV),
    }),
    new HtmlWebpackPlugin({
      template: 'public/index.html',
      favicon: 'public/favicon.ico',
      minify: {
        removeComments: true,
        collapseWhitespace: true,
        removeRedundantAttributes: true,
        useShortDoctype: true,
        removeEmptyAttributes: true,
        removeStyleLinkTypeAttributes: true,
        keepClosingSlash: true,
        minifyJS: true,
        minifyCSS: true,
        minifyURLs: true,
      },
    }),
    new EslintPlugin({
      extensions: ['js', 'jsx', 'ts', 'tsx'],
    }),
    new PrettierPlugin(),
  ],
  module: {
    rules: [
      {
        test: /\.(js|jsx|ts|tsx)$/,
        exclude: /node_modules/,
        use: ['babel-loader'],
      },
      {
        test: /\.(css)$/,
        use: [
          MiniCssExtractPlugin.loader,
          {
            loader: 'css-loader',
            options: {
              sourceMap: true,
            },
          },
          {
            loader: 'postcss-loader',
            options: {
              postcssOptions: {
                plugins: [() => [require('cssnano')]],
              },
              sourceMap: true,
            },
          },
        ],
      },
      {
        test: /\.png/,
        type: 'asset/resource',
      },
    ],
  },
  resolve: {
    extensions: ['.jsx', '.ts', '.tsx', '...'],
  },
};
