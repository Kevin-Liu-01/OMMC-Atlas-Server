const express = require("express");

var UserModelMethods = require("../models/user-model.js");

// questionRoutes is an instance of the express router.
// We use it to define our routes.
// The router will be added as a middleware and will take control of requests starting with path /record.
const userRoutes = express.Router();

//This will help us connect to the database

// This section will help you get a list of all the records.
userRoutes.route("/user/add").post(UserModelMethods.Create);

// This section will help you create a new record.
userRoutes.route("/user/update/:id").post(UserModelMethods.UpdateUser);

// This section will help you login
userRoutes.route("/user/login").post(UserModelMethods.ReturnUser);

// This section will make a request
userRoutes.route("/user/delete/:id").post(UserModelMethods.DeleteUser);

module.exports = userRoutes;
