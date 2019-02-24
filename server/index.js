const express = require('express');
const cookieSession = require('cookie-session');
const passport = require('passport');
const mongoose = require('mongoose');
const keys = require('./config/keys');

// models
require('./models/User');

// services
require('./services/passport');


// setup
mongoose.connect(keys.mongoURI, {
    useNewUrlParser: true
});

// init app
const app = express();

// session management
app.use(cookieSession({
    maxAge: 30 * 24 * 60 * 60 * 1000,
    keys: [keys.cookieKey]
}))
app.use(passport.initialize());
app.use(passport.session())

// routes

// auth
require('./routes/auth')(app)


const PORT = process.env.PORT || 5000;
app.listen(PORT);