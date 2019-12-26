const app = require("../server");
const chai = require("chai");
const expect = chai.expect;
const chaiHttp = require("chai-http");
chai.use(chaiHttp);

describe("APP INTEGRATION TEST", function() {
    describe("/", function () {
        it("expects to be ready to serve", function(done) {
            chai.request(app)
                .get("/")
                .end( (err, res) => {
                    expect(err).to.be.null;
                    expect(res).to.have.status(200);
                    done();
                });
        });
    });

    describe("/not-a-path", function () {
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
});
