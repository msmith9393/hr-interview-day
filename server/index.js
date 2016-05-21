const express = require('express');
const http = require('http');
const path = require('path');
const bodyParser = require('body-parser');
const morgan = require('morgan');
const app = express();
const router = require('./router')
const cors = require('cors');

const isDevelopment = (process.env.NODE_ENV !== 'production');
const port = process.env.PORT || 8080;

// App Setup
app.use(morgan('combined'));
app.use(cors());
app.use(bodyParser.json({ type: '*/*' }));


router(app, path.resolve(__dirname, 'public'));

// Webpack hot-reloader setup for Development
if (isDevelopment) {
  const WebpackDevServer = require('webpack-dev-server');
  const webpack = require('webpack');
  const webpackConfig = require('../webpack.config');

  new WebpackDevServer(webpack(webpackConfig), {
    hot: true,
    historyApiFallback: true,
    proxy: {
      "*": "http://localhost:" + port
    }
  }).listen(3000, 'localhost', function (err, result) {
    if (err) { console.log(err) }
    console.log('Listening at localhost:3000');
  });
}

// Production Server Setup
const server = http.createServer(app);
server.listen(port);
console.log("Server listening on : ", port);
