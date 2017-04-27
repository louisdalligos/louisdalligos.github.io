const path = require('path');
const webpack = require('webpack');

function getConfig() {
  return {
    entry: [
      path.join(__dirname, 'app/index.js')
    ],

    output: {
      path: path.join(__dirname, 'public'),
      filename: 'bundle.js'
    },

    module: {
      rules: [
        {
          test: /\.js$/,
          include: path.join(__dirname, 'app'),
          loaders: ['babel-loader']
        }
      ]
    }
  }
}

module.exports = getConfig();
