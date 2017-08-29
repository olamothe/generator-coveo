const webpack = require('webpack');
const minimize = process.argv.indexOf('--minimize') !== -1;

const plugins = [];

if (minimize) {
  plugins.push(new webpack.optimize.UglifyJsPlugin());
}

module.exports = {
  entry: {
    'coveo.customization.<%= projectSafeName %>': ['./src/Index.ts']
  },
  output: {
    path: require('path').resolve('./bin/js'),
    filename: minimize ? `[name].min.js` : `[name].js`,
    libraryTarget: 'umd',
    library: 'CoveoExtension',
    publicPath: '/js/'
  },
  externals: {
    'coveo-search-ui': 'Coveo'
  },
  resolve: {
    extensions: ['.ts', '.js'],
  },
  devtool: 'source-map',
  module: {
    loaders: [
      { test: /\.ts$/, loader: 'ts-loader' }
    ]
  },
  plugins: plugins,
  bail: true
};