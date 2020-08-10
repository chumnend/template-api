'use strict';

const express = require('express');
const cors = require('cors');
const helmet = require('helmet');
const morgan = require('morgan');
const middleware = require('./middleware');
const config = require('./config');

// configure the application
const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cors());
app.use(helmet());
if (config.env !== 'test') {
  app.use(morgan('common')); // middleware deactivated in testing mode
}

// setup routes
app.get('/status', (req, res, next) => {
  res.send('OK');
});

app.all('*', (req, res, next) => {
  res.status(404).json({ message: 'path not found' });
});

// error handling
app.use(middleware.handleError);

// start the server
app.listen(config.port, () => {
  console.log('listening on port', config.port);
});

module.exports = app;
