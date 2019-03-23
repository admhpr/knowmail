const express = require('express');
const cookieSession = require('cookie-session');
const passport = require('passport');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');


require('dotenv').config()
// models
require('./models/User');
require('./models/Survey');

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

// additional routes
require('./routes/payments')(app)
require('./routes/survey')(app)



// send index.html if no route is found
if (process.env.NODE_ENV === "production") {
    console.log('here')
    const path = require('path');
    app.use(express.static(path.join(__dirname, 'client', 'build')));
    app.get('*', (req, res) => {
        res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'))
    })
}

const PORT = process.env.PORT || 5000;
console.log(`Started server on port: ${PORT}`)
app.listen(PORT);