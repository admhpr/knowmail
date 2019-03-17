const mongoose = require("mongoose");
const {
  Schema
} = mongoose;

const user = new Schema({
  googleId: String,
  credits: {
    type: Number,
    default: 0
  },
});

// collection
mongoose.model("users", user);