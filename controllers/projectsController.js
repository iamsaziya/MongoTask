const { saveProjectToDb } = require("../lib/db.js");
const saveProject = async (req, res) => {
  const project = req.body;
  try {
    await saveProjectToDb(project);
    console.log("Project saved successfully");
    res
      .status(201)
      .json({ success: true, message: "Project saved successfully" });
  } catch (err) {
    res.status(500).json({ success: false, message: "Error saving project" });
    console.error("Error saving project:", err.message);
  }
};

module.exports = { saveProject };
