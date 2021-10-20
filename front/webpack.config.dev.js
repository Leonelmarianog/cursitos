const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const EslintPlugin = require('eslint-webpack-plugin');
const PrettierPlugin = require('prettier-webpack-plugin');

module.exports = {
  mode: 'development',
  target: 'web',
  devtool: 'cheap-module-source-map',
  entry: './src/index.tsx',
  stats: 'minimal',
  output: {
    path: path.resolve(__dirname, 'build'),
    publicPath: '/',
    filename: 'bundle.js',
  },
  devServer: {
    port: 3000,
    open: true,
    historyApiFallback: true,
    headers: { 'Access-Control-Allow-Origin': '*' },
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: 'public/index.html',
      favicon: 'public/favicon.ico',
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
        use: ['style-loader', 'css-loader'],
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
