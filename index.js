const express = require("express");
const app = express();
const cors = require("cors");
const port = process.env.PORT || 3000;
app.use(cors());
app.use(express.json());
app.use(require("./Routes/question.js"));
app.use(require("./Routes/user.js"));

// get driver connection
const dbo = require("./db/conn.js");

app.listen(port, () => {
  // perform a database connection when server starts
  // dbo.connectToServer(function (err) {
  //   if (err) console.error(err);

  // });
  console.log(`Server is currently running on PORT: ${port}`);
});
