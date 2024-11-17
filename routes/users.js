const express = require("express");
const path = require("path");
const { login, register } = require("../controllers/userController");
const router = express.Router();
router.use(express.static(path.join(__dirname, "../src")));
// Route to serve the login.html file
router.get("/login", (req, res) => {
  try {
    res.sendFile(path.join(__dirname, "../src/login.html"));
  } catch (err) {
    res.status(500).send({ message: "Error serving login page" });
  }
});

router.get("/signup", (req, res) => {
  try {
    res.sendFile(path.join(__dirname, "../src/signup.html"));
  } catch (err) {
    res.status(500).send({ message: "Error serving signup page" });
  }
});

router.post("/login", async (req, res) => await login(req, res));
router.post("/signup", async (req, res) => await register(req, res));

module.exports = router;
