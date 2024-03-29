const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
    min: 2,
    max: 50,
  },
  password: {
    type: String,
    required: true,
    min: 5,
  },
  pokemon: {
    type: Array,
    default: [],
  },
});

UserSchema.statics.createUser = function createUser(data, hash) {
  const newUser = new User({
    username: data.username,
    password: hash,
    pokemon: data.pokemon,
  });
  return newUser.save();
};

UserSchema.statics.findOneByUsername = function findOneByUsername(username) {
  const user = User.findOne({ username: username });
  if (!user) throw new Error({ msg: "User does not exist. " });
  return user;
};

const User = mongoose.model("User", UserSchema);
module.exports = User;
