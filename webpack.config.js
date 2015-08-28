"use strict";

var webpack = require("webpack");

var config = {
  entry:{
    app:'./src/main.jsx',
    vendor: ['react']
  },
  output: {
    path: 'build',
    filename: '[name].bundle.js'
  },
  resolve: {
    extensions: ['', '.webpack.js', '.web.js', '.ts', '.tsx', '.js', 'jsx','.styl']
  },
  module: {
    loaders: [
      {test: /\.ts(x?)$/, loader: 'ts-loader'},
      { test: /\.styl$/, loader: 'style-loader?singleton!css-loader!stylus-loader' },
      { test: /\.js(x?)$/, exclude: /(node_modules|bower_components)/, loader: "babel-loader", query: {stage: 0}}
    ],
    noParse:['react']
  },
  plugins: [
    new webpack.optimize.CommonsChunkPlugin(/* chunkName= */"vendor", /* filename= */"vendor.bundle.js", Infinity)
  ]
};

module.exports = config;
