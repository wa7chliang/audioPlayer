const path = require('path')
const webpack = require('webpack')
module.exports = {
  entry: './src/index.js',
  output: {
    path: path.join(__dirname, '../dist'),
    filename: 'player.js',
    library: 'player',
    libraryTarget: 'umd',
    umdNamedDefine: true
  },
  devtool: 'source-map',
  module: {
    rules: [
      {
        test: /\.js$/,
        loader: 'babel-loader',
        exclude: __dirname + 'node_modules',
        include: __dirname + 'src',
        options: {
          presetes: ['env']
        }
      }
    ]
  },
  mode: 'production'
}
