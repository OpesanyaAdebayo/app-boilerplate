var express = require('express');
var router = express.Router();
const login = require('../auth/login');
const userLogin = login.userLogin

/* GET home page. */

router.get('/', function(req, res, next) {
  res.render('signup', { title: 'Express' });
});

router.post('/', function(req, res, next) {
    userLogin(req.body).then(function(result) {
        res.json(result);
    });
});



module.exports = router;
