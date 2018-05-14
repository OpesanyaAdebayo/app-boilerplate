const supertest = require('supertest');
const should = require('should');
const app = require('../app');

describe("homepage should be available", function () {
    it("should return a 200 response", function (done) {
        supertest(app)
            .get("/")
            .expect(200, done);
    });
});

describe("login should be available", function(){
    it("should return a 200 response", function(done) {
        supertest(app)
        .get("/login")
        .expect(200, done);
    });
});

describe("signup should be available", function(){
    it("should return a 200 response", function(done) {
        supertest(app)
        .get("/signup")
        .expect(200, done);
    });
});

describe("random route should be unavailable", function(){
    it("should return a 404 response", function(done) {
        supertest(app)
        .get("/random")
        .expect(404, done)
    });
});