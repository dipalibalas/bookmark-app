const mongoose = require("mongoose");

const bookmarkSchema = new mongoose.Schema(
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

module.exports = Bookmark = mongoose.model("Bookmark", bookmarkSchema);
