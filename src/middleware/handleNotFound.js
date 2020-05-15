'use strict';

// if hit this middleware, route was not found
module.exports = function(req, res, next) {
  res
    .status(404)
    .json({
      message: 'path not found',
    });
};
