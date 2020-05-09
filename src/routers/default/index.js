'use strict';

const router = require('express').Router();
const funcs = require('./functions');

router.route('/')
  .get(funcs.ready);

module.exports = router;
