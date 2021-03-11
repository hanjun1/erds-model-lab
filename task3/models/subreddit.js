const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const subredditSchema = new Schema({
  name: String,
  user: [{ type: Schema.Types.ObjectId, ref: "User" }],
  post: [{ type: Schema.Types.ObjectId, ref: "Post" }],
});

module.exports = mongoose.model("Subreddit", subredditSchema);
