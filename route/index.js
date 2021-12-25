//Import required pacakges
const express = require("express");
const router = express.Router();

//Import controller
const { signup, login, updateDetails } = require("../controller/user.ctrl");
const {
  createBookmark,
  getBookmark,
  updateBookmark,
  deleteBookmark,
} = require("../controller/bookMark.ctrl");
const Auth = require("../middleware/auth");

// user routes
router.post("/signup", signup);
router.post("/login", login);
router.put("/profile", Auth, updateDetails);

// bookmark routes
router.post("/create", createBookmark);
router.get("/getbookmark", getBookmark);
router.put("/update", updateBookmark);
router.delete("/delete", deleteBookmark);

module.exports = router;
