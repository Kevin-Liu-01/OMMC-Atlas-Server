const mongoose = require("mongoose");
const Schema = mongoose.Schema;
mongoose.Promise = require("bluebird");

const QuestionSchema = new Schema({
  question_name: String,
  question_position: String,
  question_level: String,
  question_topic: String,
  question_comp: String,
});

const QuestionModelSchema = mongoose.model("Question", QuestionSchema);

module.exports = QuestionModelSchema;
