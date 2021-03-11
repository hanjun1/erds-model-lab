const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const albumSchema = new Schema({
  name: String,
  artist: String,
  // note: artist would be another model
});

module.exports = mongoose.model("Album", albumSchema);
