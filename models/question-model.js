const QuestionModelSchema = require("../schemas/question.schema.js");

/* Create */
QuestionModelSchema.Displayall = function (req, res) {
  console.log("Function Displayall called");

  QuestionModelSchema.find({})
    .exec()
    .then((result) => {
      console.log("result" + result);
      return res.json(result);
    })
    .catch((error) => {
      return res.json(error);
    });
};
/* Retrieve */
QuestionModelSchema.Create = async function (req, res) {
  console.log("Function Create called");

  const myObj = new QuestionModelSchema({
    question_name: req.body.question_name,
    question_position: req.body.question_position,
    question_level: req.body.question_level,
    question_topic: req.body.question_topic,
    question_comp: req.body.question_comp,
  });

  try {
    let result = await myObj.save();

    console.log("Time");

    // await new Promise(resolve => setTimeout(resolve, 5000));

    return res.json(result);
  } catch (err) {
    return res.json(error);
  }
};

QuestionModelSchema.Update = function (req, res) {
  console.log("Function Update called");

  return QuestionModelSchema.findOneAndUpdate(
    { _id: req.params.id },
    {
      $set: {
        question_name: req.body.question_name,
        question_position: req.body.question_position,
        question_level: req.body.question_level,
        question_topic: req.body.question_topic,
        question_comp: req.body.question_comp,
      },
    }
  )
    .exec()
    .then((result) => {
      return res.json(result);
    })
    .catch((error) => {
      return res.json(error);
    });
};

QuestionModelSchema.DisplayOne = (req, res) => {
  console.log("returning");
  return QuestionModelSchema.findById(req.params.id)
    .then((result) => {
      return console.log(res.json(result));
    })
    .catch((error) => {
      return res.json(error);
    });
};

QuestionModelSchema.GetQuestion = (req, res) => {
  // const id = req.params.id;
  // console.log("/:id is called with id=" + id)
  // let db_connect = dbo.getDb("employees");
  // var myquery = { id: req.body.id };
  // db_connect.collection("records").findOne(myquery, function (err, obj) {
  //   if (err) {
  //   console.log("get failed" + err);
  //   throw err;
  // }
  // console.log("obj : " + obj)
  //   // res.json(obj);
  //   console.log("/:id was called with id=" + id)
  //   return res.json(obj);
  // });
};

QuestionModelSchema.DeleteQuestion = (req, res) => {
  console.log("Document deleting: " + req.params.id);
  return QuestionModelSchema.findByIdAndRemove(req.params.id)
    .exec()
    .then((result) => {
      return res.json(result);
    })
    .catch((error) => {
      return res.json(error);
    });
};

module.exports = QuestionModelSchema;
