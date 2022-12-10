const UserModelSchema = require("../schemas/user.schema.js");

/* Create */
UserModelSchema.Create = async function (req, res) {
  console.log("Function Create called");

  const myObj = new UserModelSchema({
    person_username: req.body.person_username,
    person_password: req.body.person_password,
    person_email: req.body.person_email,
  });

  try {
    let result = await myObj.save();
    res.setHeader("Set-Cookie", "loggedIn=true;");

    console.log(myObj);
    return res.json(result);
  } catch (err) {
    return res.json(error);
  }
};

UserModelSchema.UpdateUser = function (req, res) {
  console.log("Function Update called");

  return UserModelSchema.findOneAndUpdate(
    {
      person_username: req.params.person_username,
      password_password: req.params.person_basswortd,
    },
    {
      $set: {
        person_username: req.body.person_username,
        person_password: req.body.person_password,
        person_email: req.body.person_email,
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

UserModelSchema.ReturnUser = (req, res) => {
  console.log("Returning User");
  UserModelSchema.findOne({
    person_username: req.body.person_username,
    person_password: req.body.person_password,
    person_email: req.body.person_email,
  })
    .then((result) => {
      console.log(
        "REQ PARAMS: " + req.body.person_username,
        req.body.person_password,
        req.body.person_email
      );
      if (Boolean(result)) {
        res.setHeader("Set-Cookie", "loggedIn=true;");
        return console.log(res.json(result));
      } else {
        console.log(res.json({ error: "User not found" }));
        return "User not found";
      }
    })
    .catch((error) => {
      return res.json(error);
    });
};

UserModelSchema.DeleteUser = (req, res) => {
  console.log("Document deleting: " + req.params.id);
  return UserModelSchema.findByIdAndRemove(req.params.id)
    .exec()
    .then((result) => {
      return res.json(result);
    })
    .catch((error) => {
      return res.json(error);
    });
};

module.exports = UserModelSchema;
