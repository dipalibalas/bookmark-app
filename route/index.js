//Import required pacakges
const express = require("express");
const router = express.Router();

//Import controller
const { signup, login, updateDetails } = require("../controller/user.ctrl");
const Auth = require("../middleware/auth");

// user routes
router.post("/signup", signup);
router.post("/login", login);
router.put("/", Auth, updateDetails);

module.exports = router;
