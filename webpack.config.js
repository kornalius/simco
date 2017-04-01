var path = require('path')

var externals = require('./package.json').dependencies

var ElectronConnectWebpackPlugin = require('electron-connect-webpack-plugin')

module.exports = {
  devtool: 'inline-source-map',

  target: 'electron-renderer',

  entry: './app/main.js',

  output: {
    path: path.join(__dirname, 'build'),
    filename: 'bundle.js',
    libraryTarget: 'commonjs2',
  },

  module: {
    loaders: [
      {
        test: /\.js$/i,
        exclude: /node_modules/,
        loader: 'babel',
        query: {
          presets: ['latest']
        }
      },

      {
        test: /\.json$/i,
        loader: 'json'
      },

      {
        test: /\.html$/i,
        loader: 'html'
      },

      {
        test: /\.css$/i,
        loaders: ['style', 'css?sourceMap', 'cssnext']
      },
    ],
  },

  cssnext: {
    features: {
      import: {
        path: ['./style']
      },
    },
  },

  plugins: [
    new ElectronConnectWebpackPlugin(),
  ],

  externals: Object.keys(externals || {}),

}
