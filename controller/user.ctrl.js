//Import required pacakges
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const User = require("../model/user");
const { JWT_SECRET } = require("../key");

const signup = async (req, res) => {
  try {
    const { firstName, lastName, email, phone, profile, password } = req.body;
    const user = await User.findOne({ email: email });
    if (user) return res.status(400).json({ msg: "Email already exists" });
    const hashPassword = await bcrypt.hash(password, 12);
    const newUser = new User({
      firstName,
      lastName,
      email,
      phone,
      profile,
      password: hashPassword,
    });
    await newUser.save();
    return res.status(200).json({ message: "User saved successfully" });
  } catch (err) {
    console.log("error: ", err);
    return res.status(422).json({ msg: err.message });
  }
};

const login = async (req, res) => {
  try {
    const { email, password } = req.body;

    if (!email || !password) {
      return res.status(404).json({ error: "Please add email or password" });
    }

    const user = await User.findOne({ email });
    // console.log("user: ", user.password);
    if (!user) {
      return res.status(400).json({ error: "User does not exist." });
    }
    // console.log("ismatch: ", User.findOne({ email }).select("+password"));
    const isMatch = await bcrypt.compare(password, user.password);

    if (isMatch) {
      const token = jwt.sign({ _id: user }, JWT_SECRET);
      const { _id, firstName, lastName, email, phone, profile } = user;
      res.json({
        token,
        user: { _id, firstName, lastName, email, phone, profile },
      });
    } else {
      return res.status(404).json({ error: "Invalid Email or Password" });
    }
  } catch (err) {
    console.log("error: ", err);
    return res.status(422).json({ msg: err.message });
  }
};

const updateDetails = async (req, res) => {
  try {
    const { firstName, lastName, email, phone, profile } = req.body;
    if (!profile)
      return res.status(400).json({ msg: "No profile image uploaded" });

    await User.findOneAndUpdate(
      { email: req.body.email },
      {
        firstName,
        lastName,
        phone,
        profile,
      }
    );

    res.status(200).json({ msg: "User details successfully updated!!" });
  } catch (err) {
    return res.status(422).json({ msg: err.message });
  }
};

module.exports = {
  signup,
  login,
  updateDetails,
};
