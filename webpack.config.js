const path = require('path');

module.exports = {
  mode: 'development',
  devtool: 'inline-source-map',
  entry: path.join(__dirname, './src/index.js'),
  output: {
    filename: 'bundle.js',
    publicPath: 'virtual',
  },
  devServer: {
    port: 3000,
    contentBase: path.join(__dirname, './www'),
    compress: true,
  },
};
