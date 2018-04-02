var express = require('express');
var router = express.Router();
const login = require('../auth/login');
const tokenController = require('../auth/token');

/* GET home page. */

router.get('/', function(req, res, next) {
  res.render('signup', { title: 'Express' });
});

router.post('/', function(req, res, next) {
    let userObject = {
        email: req.body.email,
        password: req.body.password
      };

    login
    .processFormInput(userObject)
    .then(profile => tokenController.assignToken(profile))
    .then(token => res.json({
      token: token
    }))
    .catch((err) => res.status(401).json({
      error: err.message.toString()
    }));
});



module.exports = router;
