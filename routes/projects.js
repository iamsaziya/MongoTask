const express = require("express");
const path = require("path");

const router = express.Router();
router.use(express.static(path.join(__dirname, "../src")));
// Route to serve the login.html file
router.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "../src/login.html")); // Adjust the path as necessary
});

module.exports = router;
