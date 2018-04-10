var express = require('express');
var router = express.Router();
const signup = require('../auth/signup');
const tokenController = require('../auth/token');

/* GET home page. */

router.get('/', function (req, res, next) {
    res.render('signup', {
        title: 'Express'
    });
});

router.post('/', function (req, res, next) {
    let userObject = {
        firstName: (req.body.firstName.charAt(0).toUpperCase() + req.body.firstName.slice(1)).trim(),
        lastName: (req.body.lastName.charAt(0).toUpperCase() + req.body.firstName.slice(1)).trim(),
        email: req.body.email.trim(),
        password: req.body.password
      };

      signup
        .processFormInput(userObject)
        .then(profile => tokenController.assignToken(profile))
        .then(token => {
          res.json({
            token: token
          });
        })
        .catch((err) => res.status(400).json({
          error: err.message.toString()
        }));
});

module.exports = router;