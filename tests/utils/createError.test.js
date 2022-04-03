'use strict';

const chai = require('chai');
const createError = require('../../src/utils/createError');

const expect = chai.expect;

describe('Utils - createError', () => {
  it('expects to get a created error object', () => {
    const error = createError(404, 'path not found', { test: 'some test' });
    expect(error).to.be.an('error');
    expect(error).to.have.property('status', 404);
    expect(error).to.have.property('message', 'path not found');
    expect(error).to.have.property('extra');
    expect(error.extra).to.have.property('test', 'some test');
  });

  it('expects to throw an error if no arguments provided', () => {
    expect(() => createError()).to.throw(Error);
  });

  it('expects to throw an error if no message provided', () => {
    expect(() => createError(400)).to.throw(Error);
  });
});
