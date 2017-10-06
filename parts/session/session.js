var session = require('express-session');

// Connect to mongodb store
const MongoStore = require('connect-mongo')(session);

app.use(session({
   secret: 'foo',
   store: new MongoStore(options)
}));