const express = require("express");

var QuestionModelMethods = require("../models/question-model.js");

// questionRoutes is an instance of the express router.
// We use it to define our routes.
// The router will be added as a middleware and will take control of requests starting with path /record.
const questionRoutes = express.Router();

//This will help us connect to the database

// This section will help you get a list of all the questions.
questionRoutes.route("/question").get(QuestionModelMethods.Displayall);

// This section will help you create a new question.
questionRoutes.route("/question/add").post(QuestionModelMethods.Create);

// This section will help you update a question by id.
questionRoutes.route("/update/:id").post(QuestionModelMethods.Update);

// This section will make a request
questionRoutes.route("/question/:id").get(QuestionModelMethods.DisplayOne);

// This section will make a request
questionRoutes.route("/:id").get(QuestionModelMethods.GetQuestion);

// This section will help you delete a question
questionRoutes.route("/:id").delete(QuestionModelMethods.DeleteQuestion);

questionRoutes.route("/delete/:id").post(QuestionModelMethods.DeleteQuestion);

module.exports = questionRoutes;
