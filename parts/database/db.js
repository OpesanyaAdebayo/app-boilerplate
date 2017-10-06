var mongojs = require('mongojs');
var db = mongojs('username:password@example.com/mydb', ['mycollection']) // Replace with mlab credentials from .env file