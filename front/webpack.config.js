/* eslint-disable global-require */

if (process.env.NODE_ENV === 'development') {
  module.exports = require('./webpack.config.dev');
}

if (process.env.NODE_ENV === 'production') {
  module.exports = require('./webpack.config.prod');
}
