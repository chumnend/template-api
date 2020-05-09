'use strict';

const express = require('express');
const cors = require('cors');
const morgan = require('morgan');
const middleware = require('./middleware');
const routers = require('./routers');
const config = require('../config');

// configure the application
const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cors());
if(config.env !== 'test') {
  app.use(morgan('common'));  // middleware deactivated in testing mode
}

// setup routers
app.use('/', routers.default);
/*
  NEW ROUTERS GO HERE
*/
app.all('*', routers.error);

// error handling
app.use(middleware.handleError); 

module.exports = app;
