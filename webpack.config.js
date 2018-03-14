const webpack = require('webpack');
const path = require('path');
const ExtractTextPlugin = require("extract-text-webpack-plugin");
const extractSassPlugin = new ExtractTextPlugin({ filename: "main.css" });

const parentDir = path.join(__dirname, './');

module.exports = {
  entry: { main: path.join(parentDir, '/src/entry.js') },
  output: {
    filename: 'bundle.js',
    path: path.join(parentDir, '/pub')
  },
  module: {
    loaders: [
      {
        test: /\.jsx$/,
        include: path.join(parentDir, '/src'),
        use: 'babel-loader'
      }, {
        test: /\.scss$/,
        use: extractSassPlugin.extract({ use: [ { loader: "css-loader" }, { loader: "sass-loader" } ] })
      }
    ]
  },
  resolve: {
    extensions: ['.js', '.scss', '.jsx']
  },
  devServer: {
    inline: true,
    hot: true
  },
  plugins: [extractSassPlugin]
}
