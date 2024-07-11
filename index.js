require('@babel/register')({
    presets: ['@babel/preset-env', '@babel/preset-react']
  });
  
  const express = require('express');
  const path = require('path');
  const server = require('./build/server');
  
  const app = express();
  
  app.use('^/$', server);
  
  app.use(express.static(path.resolve(__dirname, 'public')));
  
  app.listen(3000, () => {
    console.log('Server is running on http://localhost:3000');
  });
  