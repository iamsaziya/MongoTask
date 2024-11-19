const express = require("express");
const path = require("path");

const router = express.Router();
router.use(express.static(path.join(__dirname, "../src")));
// Route to serve the login.html file
router.get("/:projectId", (req, res) => {
  res.sendFile(path.join(__dirname, "../src/project-details.html")); // Adjust the path as necessary
});

router.post("/create", async (req, res) => await saveProject(req, res));

module.exports = router;
