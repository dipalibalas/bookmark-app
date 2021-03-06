const jwt = require("jsonwebtoken");
const { JWT_SECRET } = require("../key");
const User = require("../model/user");

module.exports = (req, res, next) => {
  const { authorization } = req.headers; // string type
  // authorization === Bearer tokenvalue
  if (!authorization) {
    return res.status(401).json({ error: "You must be logged in!" });
  }

  const token = authorization.replace("Bearer ", "");

  // verify the token
  jwt.verify(token, JWT_SECRET, (err, payload) => {
    if (err) {
      return res.status(401).json({ error: "You must be logged in!" });
    }

    const { _id } = payload;
    User.findById(_id).then((userdata) => {
      req.user = userdata;
      next();
    });
  });
};
