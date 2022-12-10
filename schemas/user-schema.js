const mongoose = require("mongoose");
const Schema = mongoose.Schema;
mongoose.Promise = require("bluebird");

const UserSchema = new Schema({
  person_username: String,
  person_password: String,
  person_email: String,
});

const UserModelSchema = mongoose.model("User", UserSchema);

module.exports = UserModelSchema;
