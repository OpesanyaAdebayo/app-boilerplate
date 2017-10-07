var mongojs = require('mongojs');
var db = mongojs('adebayo:bayoopesanya@ds135534.mlab.com:35534/personal', ['mycollection']) // Replace with mlab credentials from .env file
var bcrypt = require('bcryptjs');
var salt = bcrypt.genSaltSync(10);
let errormsg = ""

const processFormInput = (formInput) => {
    return new Promise((resolve, reject) => {
        db.users.findOne({
            email: formInput.email
        }, (err, profile) => {
            if (err) {
                return next(err);
            } else if (profile === null) {
                let password = bcrypt.hashSync(formInput.password, salt);
                formInput.password = password;
                db.users.save(formInput, function (err, savedprofile) {
                    resolve(savedprofile);
                });
            } else {
                errormsg = "Someone already registered with this email"
                resolve(errormsg);
            }
        });
    });
}


module.exports = {
    processFormInput: processFormInput
};