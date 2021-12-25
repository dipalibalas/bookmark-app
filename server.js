//Import required pacakges
const express = require("express");
const app = express();
require("./database/database");
const PORT = 3000;

app.use(express.json()); // for read the json data
const apiRoute = require("./route/index");
app.use(apiRoute);

app.listen(PORT, () => {
  console.log("server is running on", PORT);
});
