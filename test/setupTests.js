const app = require("../app");

const chai = require("chai");
const expect = chai.expect;
const chaiHttp = require("chai-http");
chai.use(chaiHttp);

describe("SERVER", function() {
    it("expects to be ready to serve", function(done) {
        chai.request(app)
            .get("/")
            .end( (err, res) => {
               expect(err).to.be.null;
               expect(res).to.have.status(200);
               done();
            });
    });
    it("expects to encounter 404", function(done) {
        chai.request(app)
            .get("/not-a-path")
            .end( (err, res) => {
               expect(err).to.be.null;
               expect(res).to.have.status(404);
               done();    
            });
    });
});
