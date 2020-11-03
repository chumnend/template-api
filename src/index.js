'use strict';

const express = require('express');
const cors = require('cors');
const cookieParser = require('cookie-parser');
const helmet = require('helmet');
const morgan = require('morgan');
const config = require('./config');
const middleware = require('./middleware');
const utils = require('./utils');

// configure the application
const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());
app.use(cookieParser());
app.use(helmet());
if (config.env !== 'test') {
  app.use(morgan('common')); // middleware deactivated in testing mode
}

// setup routes
app.get('/status', (req, res, next) => {
  return res.send('OK');
});

app.all('*', (req, res, next) => {
  const err = utils.createError(404, 'Path not found');
  return next(err);
});

// error handling
app.use(middleware.handleError);

// start the server
app.listen(config.port, () => {
  console.log('Listening on port', config.port);
});

module.exports = app;
