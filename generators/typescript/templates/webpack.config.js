const webpack = require('webpack');
const minimize = process.argv.indexOf('--minimize') !== -1;
const production = process.env.NODE_ENV === 'production';
const VisualforceHtmlPlugin = require('visualforce-html-webpack-plugin');

const plugins = [];

if (minimize) {
  plugins.push(new webpack.optimize.UglifyJsPlugin());
}
<% if(salesforce) { %> 
  const coveoComponentMock = `
  <script src="../vendor/coveo/js/CoveoJsSearch.Lazy.js"></script>
  <script src="../vendor/coveo/js/templates/templates.js"></script>
  <link rel="stylesheet" href="../vendor/coveo/css/CoveoFullSearch.css" />
  <script>
    document.addEventListener('DOMContentLoaded', function () {
      <%- endpointscript %>
    })
  </script>`;
<% } %>


if (!production) {
  plugins.push(new webpack.HotModuleReplacementPlugin());
  <% if(salesforce) { %>
  plugins.push(new VisualforceHtmlPlugin({
    SalesforceContext: {
      CustomModifiers: {
        '<CoveoV2:SearchInterface.*?></CoveoV2:SearchInterface>': coveoComponentMock
      },
      Resources: {
        <%= projectSafeName %>: '../<%= projectSafeName %>_unzip/'
      }
    }
  }))
  <% } %>
}

module.exports = {
  entry: {
    'coveo.customization.<%= projectSafeName %>': ['./src/Index.ts']
  },
  output: {
    path: require('path').resolve('./staticresources/<%= projectSafeName %>_unzip/js'),
    filename: minimize ? `[name].min.js` : `[name].js`,
    libraryTarget: 'umd',
    library: '<%= projectSafeName %>',
    publicPath: '/<%= projectSafeName %>_unzip/js/'
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