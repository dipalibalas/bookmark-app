//Import required pacakges
const Bookmark = require("../model/bookmark");

const createBookmark = async (req, res) => {
  try {
    const { url, description } = req.body;
    const newBookmark = new Bookmark({
      url,
      description,
    });
    await newBookMark.save();
    return res.status(200).json({ message: "Bookmark saved successfully" });
  } catch (err) {
    console.log("error: ", err);
    return res.status(422).json({ msg: err.message });
  }
};

module.exports = {
  createBookmark,
};
