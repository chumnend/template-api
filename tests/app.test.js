'use strict';

process.env.NODE_ENV = 'test';

const app = require('../src');
const chai = require('chai');
const expect = chai.expect;
const chaiHttp = require('chai-http');
chai.use(chaiHttp);

describe('APP INTEGRATION TEST', function() {
  describe('GET /status', function() {
    it('expects to recieve okay status', function(done) {
      chai.request(app)
        .get('/status')
        .end((err, res) => {
          expect(err).to.be.null;
          expect(res).to.have.status(200);
          done();
        });
    });
  });
  
  describe('GET /not-a-path', function () {
    it("expects to encounter 404", function(done) {
      chai.request(app)
        .get('/not-a-path')
        .end( (err, res) => {
          expect(err).to.be.null;
          expect(res).to.have.status(404);
          expect(res.body).to.have.property('message');
          done();    
        });
    });
  });
});
