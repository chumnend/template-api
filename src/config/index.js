'use strict';

require('dotenv').config();

module.exports = {
  env: process.env.NODE_ENV || 'production',
  port: process.env.PORT || 8080,
};
