'use strict';

const chai = require('chai');
const expect = chai.expect;
const sinon = require('sinon');
const ready = require('../ready');

describe('DEFAULT UNIT TEST - READY', function() {
  it('expects to respond back to be ready', function() {
    // setup test
    let req = {};
    let res = {
      send: function() {}
    };
    let next = sinon.spy();
    let mock = sinon.mock(res);
    mock.expects('send').once();
    
    // start test
    ready(req, res, next);
    expect(next.notCalled).to.be.true;
    mock.verify();
  });
});
