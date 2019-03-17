const express = require('express');
const cookieSession = require('cookie-session');
const passport = require('passport');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');


require('dotenv').config()
// models
require('./models/User');

// services
require('./services/passport');


// setup
mongoose.connect(process.env.MONGO_URI, {
    useNewUrlParser: true
});

// init app
const app = express();
app.use(bodyParser.json());


// session management
app.use(cookieSession({
    maxAge: 30 * 24 * 60 * 60 * 1000,
    keys: [process.env.COOKIE_KEY]
}))
app.use(passport.initialize());

// tell passport to pull the id from the session
app.use(passport.session())

// routes

// setup auth
require('./routes/auth')(app)
require('./routes/payments')(app)


const PORT = process.env.PORT || 5000;
console.log(`Started server on port: ${PORT}`)
app.listen(PORT);