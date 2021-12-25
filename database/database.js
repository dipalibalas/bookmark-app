//Import required pacakges
const mongoose = require("mongoose");

const { MONGO_URI } = require("../key.js");

// connect to mongoDB
mongoose
  .connect(MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("Database connected."))
  .catch((err) => console.log(err));
