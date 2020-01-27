// This is where we will tell webpack how to find js and bundle

// this was pulled in from https://webpack.js.org/concepts/#loaders

const path = require('path');

const config = {
  entry: ['babel-polyfill', './lib/components/Index.js'],
  output: {
    path: path.resolve(__dirname, 'public'),
    filename: 'bundle.js',
  },
  module: {
    rules: [{test: /\.js$/, exclude: /node_modules/, use: 'babel-loader'}],
  },
};

module.exports = config;
