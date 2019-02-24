const mongoose = require('mongoose');
const {
    Schema
} = mongoose;

const user = new Schema({
    googleId: String
})

// collection
mongoose.model('users', user)