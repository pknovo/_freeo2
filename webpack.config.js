var webpack = require('webpack');
var OUTPUT_PATH = 'build';
var OUTPUT_FILENAME = '[name].bundle.js';

module.exports = {
  entry: {
    app: './src/main.js',
    vendor: ['react', 'rx']
  },
  output: {
    path: OUTPUT_PATH,
    filename: OUTPUT_FILENAME
  },
  resolve: {
    // Add `.ts` and `.tsx` as a resolvable extension.
    extensions: ['', '.webpack.js', '.web.js', '.ts', '.tsx', '.js', '.jsx', '.styl']
  },
  //devtool: 'eval',
  module: {
    loaders: [
      {
        test: /\.tsx?$/,
        loader: 'ts-loader'
      },
      {
        test: /\.jsx?$/,
        exclude: /(node_modules|bower_components)/,
        loader: 'babel?stage=0'
      },
      {test: /\.styl$/, loader: 'style-loader!css-loader!stylus-loader'}
    ]
  },
  plugins: [
    new webpack.optimize.CommonsChunkPlugin("vendor", OUTPUT_FILENAME)
  ]
};
