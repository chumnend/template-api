'use strict';

require('dotenv').config();

// ensure required environment variables exist
const required = [
  'NODE_ENV',
  'PORT'
];
required.forEach( (name) => {
  if(!process.env[name]) {
    throw new Error(`environment variable ${name} not found`);
  } 
});

// load configuration file
let config = {}
switch(process.env.NODE_ENV) {
  case 'development':
    Object.assign(config, {
      env: 'development',
      port: process.env.PORT || 3000
    });
    break;
  case 'test': 
    Object.assign(config, {
      env: 'test',
      port: 4000
    });
    break;
  case 'production':
    Object.assign(config, {
      env: 'production',
      port: process.env.PORT || 3000
    })
}

module.exports = config;
