const { saveProjectToDb, getProjectById } = require("../lib/db.js");
const saveProject = async (req, res) => {
  const project = req.body;
  try {
    const resFromController = await saveProjectToDb(project);
    if (resFromController.name) {
      res
        .status(201)
        .json({ success: true, message: "Project saved successfully" });
    } else {
      res.status(400).json({ success: false, message: resFromController });
    }
  } catch (err) {
    res.status(500).json({ success: false, message: err.message });
    console.error("Error saving project:", err.message);
  }
};

const getProjectByProjectId = async (req, res) => {
  const projectId = req.params.projectId;
  try {
    const projectData = await getProjectById(projectId);
    console.log("Project data:", projectData);
    if (projectData.length > 0) {
      res.status(200).json({ success: true, data: projectData });
    } else {
      res.status(404).json({ success: false, message: "Project not found" });
    }
  } catch (err) {
    res.status(500).json({ success: false, message: err.message });
    console.error("Error fetching project:", err.message);
  }
} 

module.exports = { saveProject, getProjectByProjectId };
