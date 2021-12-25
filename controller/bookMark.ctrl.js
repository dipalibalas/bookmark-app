//Import required pacakges
const Bookmark = require("../model/bookmark");

const createBookmark = async (req, res) => {
  try {
    const { url, description } = req.body;
    const newBookmark = new Bookmark({
      url,
      description,
    });
    await newBookmark.save();
    return res.status(200).json({ message: "Bookmark saved successfully." });
  } catch (err) {
    console.log("error: ", err);
    return res.status(422).json({ msg: err.message });
  }
};

const getBookmark = async (req, res) => {
  try {
    const bookmark = await Bookmark.find();
    console.log(typeof bookmark);
    if (Object.keys(bookmark).length === 0)
      return res.status.json({ message: "No any bookmark added." });
    return res.status(200).json({ data: bookmark });
  } catch (err) {
    return res.status(500).json({ msg: err.message });
  }
};

const updateBookmark = async (req, res) => {
  try {
    const { url, description } = req.body;
    await User.findOneAndUpdate(
      { _id: req.params.id },
      {
        url,
        description,
      }
    );
    return res.status(200).json({ message: "Bookmark updated successfully." });
  } catch (err) {
    console.log("error: ", err);
    return res.status(422).json({ msg: err.message });
  }
};

const deleteBookmark = async (req, res) => {
  try {
    const bookmark = await Bookmark.findByIdAndDelete(req.body.id);
    if (!bookmark)
      return res.status(200).json({ message: "Bookmark not found." });
    res.status(200).json({ message: "Bookmark deleted successfully." });
  } catch (err) {
    console.log("error: ", err);
    return res.status(422).json({ msg: err.message });
  }
};

module.exports = {
  createBookmark,
  getBookmark,
  updateBookmark,
  deleteBookmark,
};
