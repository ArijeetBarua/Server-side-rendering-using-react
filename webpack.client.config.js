const path = require('path');

module.exports = {
  entry: './src/client.js',
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
  mode: process.env.NODE_ENV === 'production' ? 'production' : 'development'    
};
