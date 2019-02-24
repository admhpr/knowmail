const express = require('express');
const mongoose = require('mongoose');
const keys = require('./config/keys');

// services
require('./services/passport');

// models
require('./models/User');

// setup
mongoose.connect(keys.mongoURI, {
    useNewUrlParser: true
});

const app = express();
require('./routes/auth')(app)


const PORT = process.env.PORT || 5000;
app.listen(PORT);