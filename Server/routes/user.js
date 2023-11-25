const express = require("express");
const router = express.Router();
const User = require("../models/userModel");
const jwt = require("jsonwebtoken");

const createToken = (_id) => {
  return jwt.sign({ _id }, process.env.SECRET, { expiresIn: "1d" });
};

router.post("/signup", async (req, res) => {
  const { firstname, surname, email, phone, personalID, password, reTypePass } =
    req.body;

  try {
    const user = await User.signup(
      firstname,
      surname,
      email,
      personalID,
      phone,
      password,
      reTypePass
    );

    const token = createToken(user._id);

    res.status(200).json({ user, token });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

//login
router.post("/login", async (req, res) => {
  const { identifier, password } = req.body;

  try {
    const user = await User.login(identifier, password);

    // Create token
    const token = createToken(user._id);

    res.status(200).json({ user, token });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

module.exports = router;
