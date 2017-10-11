var mongojs = require('mongojs');
var db = mongojs('adebayo:bayoopesanya@ds135534.mlab.com:35534/personal', ['mycollection']) // Replace with credentials from .env file
var bcrypt = require('bcryptjs');
var salt = bcrypt.genSaltSync(10);

const updateUser = (formInput) => {
    return new Promise((resolve, reject) => {
        db.collection('backofficeusers').update({
            email: formInput.email
        }, req.body, function (err, updatedUser) {
            if (err) {
                return next(err);
            }
            else {
                console.log(updatedUser);
                res.json(updatedUser);
            }
        });
    });
}

module.exports = {
    updateUser: updateUser
};