var express = require('express');
var router = express.Router();
const login = require('../auth/login');
const processInput = login.processFormInput

/* GET home page. */

router.get('/', function(req, res, next) {
  res.render('signup', { title: 'Express' });
});

router.post('/', function(req, res, next) {
    processInput(req.body).then(function(result) {
        res.json(result);
    });
});



module.exports = router;
