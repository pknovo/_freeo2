"using strict";

var webpack = require('webpack');

var definePlugin = new webpack.DefinePlugin({
  __DEV__: JSON.stringify( JSON.parse( process.env.BUILD_DEV || 'true') ),
  __PRERELEASE__: JSON.stringify( JSON.parse( process.env.BUILD_PRERELEASE || 'false') )
});

module.exports = {
  entry: {
    main : './src/main.js'
  },
  output: {
    filename: './build/[name].bundle.js'
  },
  resolve: {
    // Add `.ts` and `.tsx` as a resolvable extension.
    extensions: ['', '.webpack.js', '.web.js', '.ts', '.tsx', '.js', '.jsx']
  },
  //devtool: 'source-map',
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
      }
    ]
  },
  plugins: [definePlugin]
};
