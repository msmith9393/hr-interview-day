const path = require('path');
const express = require('express');
const Data = require('./controllers/data');

const isDevelopment = (process.env.NODE_ENV !== 'production');

module.exports = function(app, static_path){

  app.get('/api/data', Data.data);

  app.get('/bundle.js', function (req, res) {
    res.sendFile('bundle.js', {
      root: path.resolve('./public/')
    });
  });

  app.get('/bundle.js.map', function (req, res) {
    res.sendFile('bundle.js.map', {
      root: path.resolve('./public/')
    });
  });

  app.get('/*', function (req, res) {
    res.sendFile('index.html', {
      root: path.resolve('./public/')
    });
  });
}
