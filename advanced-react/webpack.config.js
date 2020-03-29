// This is where we will tell webpack how to find js and bundle

// this was pulled in from https://webpack.js.org/concepts/#loaders

const path = require('path');

const config = {
  resolve: {
    modules: [
      path.resolve('./lib'),
      path.resolve('./node_modules')
    ]
  },
  entry: ['@babel/polyfill', './lib/renderers/dom.js'],
  output: {
    path: path.resolve(__dirname, 'public'),
    filename: 'bundle.js',
  },
  module: {
    rules: [{test: /\.js$/, exclude: /node_modules/, use: 'babel-loader'}],
  },
};

module.exports = config;
