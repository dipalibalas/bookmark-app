const mongoose = require("mongoose");

const bookMarkSchema = new mongoose.Schema(
  {
    url: {
      type: String,
      required: true,
    },
    description: {
      type: String,
    },
  },
  { timestamps: { createdAt: "created_at" } }
);

module.exports = BookMark = mongoose.model("BookMark", bookMarkSchema);
