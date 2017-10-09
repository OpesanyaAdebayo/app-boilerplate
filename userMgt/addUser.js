var mongojs = require('mongojs');
var db = mongojs('adebayo:bayoopesanya@ds135534.mlab.com:35534/personal', ['mycollection']) // Replace with credentials from .env file
var bcrypt = require('bcryptjs');
var salt = bcrypt.genSaltSync(10);

const addUser = (formInput) => {
    return new Promise((resolve, reject) => {
        db.backofficeusers.findOne({
            email: formInput.email
        }, (err, profile) => {
            if (err) {
                return next(err);
            } else if (profile === null) {
                let password = bcrypt.hashSync(formInput.password, salt);
                formInput.password = password;
                db.users.save(formInput, function (err, savedUser) {
                    resolve(savedUser);
                });
            } else {
                errormsg = "Someone already registered with this email"
                resolve(errormsg);
            }
        });
    });
}

const updateUser = (formInput) => {
    return new Promise((resolve, reject) => {
        db.collection('backofficeusers').update({
            email: req.body.email
        }, req.body, function (err, updatedUser) {
            console.log(updatedUser);
            res.json(updatedUser);
        });
    });
}

const deleteUser = (formInput) => {
    return new Promise((resolve, reject) => {
        db.collection('backofficeusers').remove({
            email: req.body.email
        }, req.body, function (err, result) {
            // depending on result from Mongo, determine what the respons will be if deletion is successful
            //use below code if you're deleting by id

            //     db.collection('backofficeusers').remove({
            //         _id: mongojs.ObjectId(req.params.id)
            //     }, function (err, result) {
            //         res.sendStatus(200);
            //     })
        });
    });
}


module.exports = {
    addUser: addUser,
    updateUser: updateUser,
    deleteUSer: deleteUser
};