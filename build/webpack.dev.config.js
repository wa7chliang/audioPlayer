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
  devtool: 'cheap-module-eval-source-map',
  devServer: {
    contentBase: './debug',
    publicPath: '/dist/',
    hot: true,
    open: true,
    overlay: true
  },
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
  mode: 'development',
  plugins: [new webpack.HotModuleReplacementPlugin()]
}
