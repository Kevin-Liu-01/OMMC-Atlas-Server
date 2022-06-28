const express = require("express");

var TutorModelMethods = require("../Models/tutor.model");

// questionRoutes is an instance of the express router.
// We use it to define our routes.
// The router will be added as a middleware and will take control of requests starting with path /record.
const tutorRoutes = express.Router();

//This will help us connect to the database

// This section will help you get a list of all the records.
tutorRoutes.route("/tutor").get(TutorModelMethods.Displayall);

// This section will help you create a new record.
tutorRoutes.route("/tutor/add").post(TutorModelMethods.Create);

// This section will help you update a record by id.
tutorRoutes.route("/update/:id").post(TutorModelMethods.Update);

// This section will make a request
tutorRoutes.route("/tutor/:id").get(TutorModelMethods.DisplayOne);

// This section will make a request
tutorRoutes.route("/:id").get(TutorModelMethods.GetQuestion);

// This section will help you delete a record
tutorRoutes.route("/:id").delete(TutorModelMethods.DeleteQuestion);

tutorRoutes.route("/delete/:id").post(TutorModelMethods.DeleteQuestion);

module.exports = tutorRoutes;
