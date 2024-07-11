const path = require('path');
const nodeExternals = require('webpack-node-externals');

module.exports = {
  entry: './src/App.js',
  output: {
    path: path.resolve(__dirname, 'public'),
    filename: 'bundle.js'
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: 'babel-loader'
      }
    ]
  },
  target: 'node',
  externals: [nodeExternals()]
};
