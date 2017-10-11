var mongojs = require('mongojs');
var db = mongojs('adebayo:bayoopesanya@ds135534.mlab.com:35534/personal', ['mycollection']) // Replace with credentials from .env file
var bcrypt = require('bcryptjs');
var salt = bcrypt.genSaltSync(10);

const deleteUser = (formInput) => {
    return new Promise((resolve, reject) => {
        db.collection('backofficeusers').remove({
            email: formInput.email
        }, req.body, function (err, result) {
            if (err) {
                return next(err);
            }
            else{
                // depending on result from Mongo, determine what the respons will be if deletion is successful
                //use below code if you're deleting by id

                //     db.collection('backofficeusers').remove({
                //         _id: mongojs.ObjectId(req.params.id)
                //     }, function (err, result) {
                //         res.sendStatus(200);
                //     })
            }
        });
    });
}

module.exports = {
    deleteUSer: deleteUser
};