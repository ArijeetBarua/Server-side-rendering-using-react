const path = require('path');
const nodeExternals = require('webpack-node-externals');

module.exports = {
  entry: './src/server.js',
  target: 'node',
  externals: [nodeExternals()],
  output: {
    path: path.resolve(__dirname, 'build'),
    filename: 'server.js'
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
   mode: process.env.NODE_ENV === 'production' ? 'production' : 'development'
};
