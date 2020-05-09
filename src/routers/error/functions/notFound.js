'use strict';

module.exports = function(req, res, next) {
  return next({
    status: 404,
    message: 'path not found'
  });
};
