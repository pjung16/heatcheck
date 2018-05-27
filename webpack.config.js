var webpack = require('webpack');
var path = require('path');

var rootDir = path.join(__dirname, './');

module.exports = {
  mode: 'development',
  entry: [
    path.join(rootDir, 'index.jsx')
  ],
  resolve: {
    extensions: ['.js', '.jsx']
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        loader: 'babel-loader'
      }, {
        test: /\.scss$/,
        loaders: ['style-loader', 'css-loader', 'sass-loader']
      }
    ]
  },
  output: {
    path: rootDir + '/dist',
    filename: 'bundle.js'
  },
  devServer: {
    contentBase: rootDir,
    historyApiFallback: true
  }
}
