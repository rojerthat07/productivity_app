const express = require("express");
const router = express.Router();
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

const { check, validationResult } = require("express-validator");
const User = require("../models/User");
const tokenSecret = process.env.TOKEN_SECRET;

router.get("/", (req, res) => {
  User.find()
    .then((users) => res.send(users))
    .catch((err) => {
      if (err) throw err;
    });
  //   res.json({ message: "successfuly" });
});

router.post(
  "/register",
  [
    check("username", "Username is required")
      .not()
      .isEmpty(),
    check("password", "Password is required")
      .not()
      .isEmpty(),
  ],
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      //Send errors
      return res.status(400).json({ errors: errors.array() });
    }
    const { username, password } = req.body;
    try {
      let existingUser = await User.findOne({ username: username });

      if (existingUser) {
        return res.status(400).send("Username Already Taken");
      }
      const newUser = new User({ username, password });
      const salt = await bcrypt.genSalt(10);
      newUser.password = await bcrypt.hash(password, salt);

      await newUser
        .save()
        .then((user) => res.json(user))
        .catch((err) => {
          if (err) {
            throw err;
          }
        });
    } catch (error) {
      console.error(error);
      res.status(400).send("Bad request");
    }
  }
);
router.post(
  "/login",
  [
    check("username", "Please enter a username")
      .not()
      .isEmpty(),
    check("password", "Please enter 6 or more characters")
      .not()
      .isEmpty(),
  ],
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    const { username, password } = req.body;
    try {
      let user = await User.findOne({ username: username });

      const isMatch = await bcrypt.compare(password, user.password);
      if (!user || !isMatch) {
        return res
          .status(400)
          .json({ errors: [{ msg: "Invalid Credentials" }] });
      }

      jwt.sign({ user }, tokenSecret, { expiresIn: 3600 }, (err, token) => {
        if (err) {
          throw err;
        } else {
          res.json({ token });
        }
      });
    } catch (err) {
      console.error(err);
      res.status(500).send("Server Error");
    }
  }
);

function verifyToken(req, res, next) {}

module.exports = router;
