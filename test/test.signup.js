const supertest = require('supertest');
const should = require('should');

let server = supertest.agent("http://localhost:3000");

describe("signup tests", function () {
    it("should return a JSON 200 response when user signs up", function (done) {
        server.post("/signup")
        .send({
            email: "newforuber3@yahoo.com",
            password: "megaton@1234"
        })
        .expect("Content-type", /json/)
        .expect(200)
        .end(function (err, res) {
            res.status.should.equal(200);
            if (err) return done(err);
            done();
        });
    });
});