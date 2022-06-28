const mongoose = require("mongoose");
const Schema = mongoose.Schema;
mongoose.Promise = require("bluebird");

const TutorSchema = new Schema({
  mon_status: Boolean,
  tues_status: Boolean,
  weds_status: Boolean,
  thurs_status: Boolean,
  fri_status: Boolean,
  sat_status:Boolean,
  sun_status:Boolean,
  morn_status: Boolean,
  noon_status: Boolean,
  evening_status: Boolean,
  subj_status: String,
  virt_status: Boolean
});

const TutorModelSchema = mongoose.model("Tutor", TutorSchema);

module.exports = TutorModelSchema;
