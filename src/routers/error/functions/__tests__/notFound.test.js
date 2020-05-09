'use strict';

const chai = require('chai');
const expect = chai.expect;
const sinon = require('sinon');
const notFound = require('../notFound');

describe('ERROR UNIT TEST - NOTFOUND', function() {
  it('expects to respond back to be ready', function() {
    // setup test
    let req = {};
    let res = {
        send: function() {}
    };
    let next = sinon.spy();
    let mock = sinon.mock(res);
    mock.expects('send').never();
    
    // start test
    notFound(req, res, next);
    expect(next.calledOnce).to.be.true;
    mock.verify();
  });
});
