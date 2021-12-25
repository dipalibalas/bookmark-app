const express = require("express");
const app = express();
const PORT = 3000;

app.use(express.json()); // for read the json data

app.listen(PORT, () => {
  console.log("server is running on", PORT);
});