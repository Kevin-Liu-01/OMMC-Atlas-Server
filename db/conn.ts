const { MongoClient } = require("mongodb");

const client = new MongoClient(
  "mongodb+srv://mern:mongodb@cluster0.prjff.mongodb.net/OMMCAtlas?retryWrites=true&w=majority",
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  }
);
var mongoose = require("mongoose");
mongoose.Promise = require("bluebird");

const option = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useFindAndModify: false,
};

mongoose
  .connect(
    "mongodb+srv://mern:mongodb@cluster0.prjff.mongodb.net/OMMCAtlas?retryWrites=true&w=majority",
    option
  )
  .then(() => {
    console.log("Mongoose init SUCCESS: Database connection successful");
  })
  .catch((err) => {
    console.log("Mongoose init ERROR: " + err);
  });
