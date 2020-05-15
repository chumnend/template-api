'use strict';

const chai = require('chai');
const handleNotFound = require('../handleNotFound');
const expect = chai.expect;

describe('MIDDLEWARE UNIT TEST - HANDLENOTFOUND', function() {
  it('expects to return not found', function() {
    // setup test
    let req = {};
    let res = {
      statusCode: null,
      body: null,
      status: function(code) {
        this.statusCode = code;
        return this; 
      },
      json: function(data){
        this.body = data;
      },
    };
    let next = function() {};
    
    // start test
    handleNotFound(req, res, next);
    expect(res.statusCode).to.be.equal(404);
    expect(res.body).to.have.property('message', 'path not found');
  });
});
