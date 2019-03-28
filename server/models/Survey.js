const mongoose = require("mongoose");
const {
    Schema
} = mongoose;
const Recipient = require('./Recipient');
const survey = new Schema({
    title: String,
    body: String,
    subject: String,
    recipients: [Recipient],
    yes: {
        type: Number,
        default: 0
    },
    no: {
        type: Number,
        default: 0
    },
    dateSent: Date,
    lastResponded: Date,
    _user: {
        type: Schema.Types.ObjectId,
        ref: 'User'
    }
});

// collection
mongoose.model("surveys", survey);