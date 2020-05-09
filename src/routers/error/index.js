'use strict';

const router = require('express').Router();
const funcs = require('./functions');

router.route('*')
  .all(funcs.notFound);

module.exports = router;
