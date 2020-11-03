'use strict';

const createError = (status, message, extra = null) => {
  if (status === undefined) {
    throw new Error('[createError] status code must be provided');
  }

  if (message === undefined) {
    throw new Error('[createError] message must be provided');
  }

  const error = new Error(message);
  error.status = status;
  error.extra = extra;

  return error;
};

module.exports = createError;
