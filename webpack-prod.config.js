var path = require('path');
// var webpack = require('webpack');

module.exports = {
  devtool: 'source-map',

  entry: [
    './src/entry'
  ],

  output: {
    path: path.join(__dirname, 'public'),
    filename: 'bundle.js',
    publicPath: '/public/'
  },

  resolve: {
    extensions: ['', '.js', '.jsx']
  },

  module: {
    loaders: [
      { test: /\.js$/,
        loader: 'babel?stage=0',
        include: path.join(__dirname, 'src') },
      { test: /\.less$/, loader: "style!css!less" }
    ]
  }
}
