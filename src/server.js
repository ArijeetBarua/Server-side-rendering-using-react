import React from 'react';
import ReactDOMServer from 'react-dom/server';
import App from './App';

const handleRender = (req, res) => {
  const app = ReactDOMServer.renderToString(<App />);

  const html = `
    <!DOCTYPE html>
    <html lang="en">
      <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>SSR with React</title>
      </head>
      <body>
        <div id="root">${app}</div>
        <script src="/bundle.js"></script>
      </body>
    </html>
  `;

  res.send(html);
};

export default handleRender;
