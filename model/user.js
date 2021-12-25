const mongoose = require("mongoose");

const userSchema = new mongoose.Schema(
  {
    firstName: {
      type: String,
      required: true,
    },
    lastName: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
    },
    phone: {
      type: Number,
      required: true,
      unique: true,
    },
    profilePic: {
      type: String,
      //   required: true,
    },
  },
  { timestamps: { createdAt: "created_at" } }
);

module.exports = User = mongoose.model("User", userSchema);
