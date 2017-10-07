const supertest = require('supertest');
const should = require('should');

let server = supertest.agent("http://localhost:3000");

describe("homepage should be available", function(){
    it("should return a 200 response", function(done) {
        server.get("/").expect(200).end(function(err,res) {
            res.status.should.equal(200);
            // res.body.error.should.equal(false);
            done();
        });
    });
});

describe("login should be available", function(){
    it("should return a 200 response", function(done) {
        server.get("/login").expect(200).end(function(err,res) {
            res.status.should.equal(200);
            // res.body.error.should.equal(false);
            done();
        });
    });
});

describe("signup should be available", function(){
    it("should return a 200 response", function(done) {
        server.get("/signup").expect(200).end(function(err,res) {
            res.status.should.equal(200);
            // res.body.error.should.equal(false);
            done();
        });
    });
});

describe("signup should be available", function(){
    it("should return a 404 response", function(done) {
        server.get("/random").expect(404).end(function(err,res) {
            res.status.should.equal(404);
            // res.body.error.should.equal(false);
            done();
        });
    });
});

