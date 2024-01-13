const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  email: {
    type: String,
    match: [/^[A-Za-z]+@[A-Za-z]+\.[A-Za-z]+$/g, "Ivalid email"],
    required: true,
  },
  password: {
    type: String,
    required: true,
    minLength: 5,
  },
  firstName: {
    type: String,
    required: true,
    minLength: [1, "First name cannot be empty."],
  },
  lastName: {
    type: String,
    required: true,
    minLength: [1, "Last name cannot be empty."],
  },
});

const User = mongoose.model("User", userSchema);

module.exports = User;
