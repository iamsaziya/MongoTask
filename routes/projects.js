const express = require("express");
const path = require("path");
const {
  saveProject,
  getProjectByProjectId,
  getAllProjectsByUserId
} = require("../controllers/projectsController");
const router = express.Router();
router.use(express.static(path.join(__dirname, "../src")));
// Route to serve the login.html file
router.get(
  "/api/:userId",
  async (req, res) => await getAllProjectsByUserId(req, res)
);

router.post("/create", async (req, res) => await saveProject(req, res));
router.get("/:projectId", (req, res) => {
  const projectId = req.params.projectId;
  if (!projectId) {
    return res.status(400).json({ message: "Invalid project ID" });
  }
  res.sendFile(path.join(__dirname, "../src/project-details.html")); // Adjust the path as necessary
});
router.get(
  "/api/:projectId",
  async (req, res) => await getProjectByProjectId(req, res)
);

module.exports = router;
