const { MongoClient } = require("mongodb");
const Db = process.env.API_KEY;
const client = new MongoClient(Db, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});
var mongoose = require("mongoose");
mongoose.Promise = require("bluebird");

const option = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useFindAndModify: false,
};

mongoose
  .connect(Db, option)
  .then(() => {
    console.log("Mongoose init SUCCESS: Database connection successful");
  })
  .catch((err) => {
    console.log("Mongoose init ERROR: " + err);
  });
