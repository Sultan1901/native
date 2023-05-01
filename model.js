const mongoose = require("mongoose");
const user = new mongoose.Schema({
  password: { type: String },
  username: { type: String },
});
module.exports = mongoose.model("User", user);
