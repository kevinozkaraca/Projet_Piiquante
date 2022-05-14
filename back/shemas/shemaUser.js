const mongoose = require("mongoose");
const mongooseUniqueValidator = require("mongoose-unique-validator");
// shema user pour la BD
const userSchema = mongoose.Schema({
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
});
// un seul compte par mail
userSchema.plugin(mongooseUniqueValidator);
module.exports = mongoose.model("User", userSchema);
