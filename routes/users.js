const express = require("express");
const path = require("path");
const { validate } = require("../lib/validation");
const userSchema = require("../schemas/userSchema");
const { saveUserToDb } = require("../lib/db");
const router = express.Router();
router.use(express.static(path.join(__dirname, "../src")));
// Route to serve the login.html file
router.all("/login", (req, res) => {
  if ((req.method = "POST")) {
    if (validate(req.body, userSchema)) {
      saveUserToDb(req.body)
        .then(() => {
          res.status(201).send({ message: "User created successfully" });
          // res.sendFile(path.join(__dirname, "../src/dashboard.html"));
        })
        .catch((err) => {
          res.status(400).send({ message: err });
        });
    } else {
      res.status(400).send({ message: "Invalid user data" });
    }
  }
  // console.log(userSchema);
  res.sendFile(path.join(__dirname, "../src/login.html")); // Adjust the path as necessary
});

module.exports = router;
