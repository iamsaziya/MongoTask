const {
  saveProjectToDb,
  getProjectById,
  getProjects
} = require("../lib/db.js");
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
  console.log("Project data:", projectId);

  try {
    const projectData = await getProjectById(projectId);
    console.log("Project data:", projectId);
    if (projectData.length > 0) {
      res.status(200).json({ success: true, data: projectData });
    } else {
      res.status(404).json({ success: false, message: "Project not found" });
    }
  } catch (err) {
    res.status(500).json({ success: false, message: err.message });
    console.error("Error fetching project:", err.message);
  }
};

const getAllProjectsByUserId = async (req, res) => {
  const userId = req.params.userId;
  try {
    const projectsData = await getProjects(userId);
    console.log("Projects data:", projectsData);
    if (projectsData.length > 0) {
      res.status(200).json({ success: true, data: projectsData });
    } else {
      res.status(404).json({ success: false, message: "No projects found" });
    }
  } catch (err) {
    res.status(500).json({ success: false, message: err.message });
    console.error("Error fetching projects:", err.message);
  }
};

module.exports = { saveProject, getProjectByProjectId, getAllProjectsByUserId };
