const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const playlistSchema = new Schema({
  name: String,
  user: userSchema,
  song: [{ type: Schema.Types.ObjectId, ref: "Song" }],
});

const userSchema = new Schema({
  userName: String,
  name: String,
  playlist: [playlistSchema],
});

module.exports = mongoose.model("User", userSchema);
