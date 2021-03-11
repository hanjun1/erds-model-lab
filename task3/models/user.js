const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const postSchema = new Schema({
  name: String,
  content: String,
});

const userSchema = new Schema({
  userName: String,
  post: [postSchema],
});

module.exports = mongoose.model("User", userSchema);
