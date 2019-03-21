const mongoose = require("mongoose");
const {
    Schema
} = mongoose;

const recipient = new Schema({
    email: String,
    responded: {
        type: Boolean,
        responded: false
    }
});

// collection
module.exports = recipient;