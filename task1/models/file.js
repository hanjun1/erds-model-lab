const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const fileSchema = new Schema({
  name: String,
  size: String,
});

module.exports = mongoose.model("File", fileSchema);
