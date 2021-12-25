//Import required pacakges
const mongoose = require("mongoose");

const mongoURI =
  "mongodb+srv://dipali:0ou4paqiwGUBN9uk@cluster0.tjcwj.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";

// connect to mongoDB

mongoose
  .connect(mongoURI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("Database connected."))
  .catch((err) => console.log(err));
