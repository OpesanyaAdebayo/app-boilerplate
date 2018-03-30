var mongojs = require('mongojs');
var db = mongojs(process.env.MLAB_URL); // Replace with credentials from .env file
var bcrypt = require('bcryptjs');
var salt = bcrypt.genSaltSync(10);
let errormsg = "";

const userLogin = (formInput) => {
    return new Promise((resolve, reject) => {
        db.users.findOne({
            email: formInput.email
        }, (err, profile) => {
            if (err) {
                return reject(Error(err));
            } else if (profile === null) {
                errormsg = "This email address has not been registered.";
                resolve(errormsg);
            } else {
                if( bcrypt.compareSync(formInput.password, profile.password)) {
                    resolve("User Succesfully logged in.");
                }
                resolve("Incorrect password.");
            }
        });
    });
};


module.exports = {
    userLogin: userLogin
};