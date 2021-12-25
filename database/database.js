//Import required pacakges
const mongoose = require("mongoose");

const { MONGOURI } = require("../key.js");

// connect to mongoDB
mongoose
  .connect(MONGOURI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("Database connected."))
  .catch((err) => console.log(err));
