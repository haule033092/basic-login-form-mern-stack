const router = require("express").Router();
const User = require("../model/user.model");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");
const { registerValidation, loginValidation } = require("../helper/validation");

// Register account
router.post("/register", async (req, res) => {
  //Validate
  const { error } = registerValidation(req.body);
  if (error) return res.status(400).send(error.details[0].message);

  //Validate username
  const usernameExist = await User.findOne({ username: req.body.username });
  if (usernameExist) return res.status(400).send("Email exist!");

  //Validate password
  const passwordExist = await User.findOne({ password: req.body.password });
  if (passwordExist) return res.status(400).send("Password exist!");

  //Hash password
  const salt = await bcrypt.genSalt(10);
  const hashedPassword = await bcrypt.hash(req.body.password, salt);

  const user = new User({
    username: req.body.username,
    password: hashedPassword,
  });

  try {
    await user.save();
    res.send({ user: user._id });
  } catch (err) {
    res.status(400).send(err);
  }
});

//Login
router.post("/login", async (req, res) => {
  const { error } = loginValidation(req.body);

  if (error) return res.status(400).send(error.details[0].message);

  const foundUser = await User.findOne({ username: req.body.username });
  if (!foundUser) return res.status(400).send("User not found!");

  const validPassword = await bcrypt.compare(
    req.body.password,
    foundUser.password
  );

  if (!validPassword) return res.status(400).send("Wrong password!");

  // Create token
  const token = jwt.sign({ _id: foundUser._id }, process.env.TOKEN_SECRET, {
    expiresIn: "8h",
  });

  foundUser.token = token;
  res.status(200).json(foundUser);
});

module.exports = router;
