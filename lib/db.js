const sdk = require("node-appwrite");
const dotenv = require("dotenv");
dotenv.config();

// Init SDK
const client = new sdk.Client();
const permissions = [
  sdk.Permission.read(sdk.Role.any()),
  sdk.Permission.write(sdk.Role.any()), // Fallback if userId is invalid
  sdk.Permission.update(sdk.Role.any()),
  sdk.Permission.delete(sdk.Role.any())
];
client
  .setSession("")
  .setEndpoint("https://cloud.appwrite.io/v1") // API Endpoint
  .setProject(process.env.PROJECT_ID) // Project ID
  .setKey(process.env.APPWRITE_API_KEY); // API Key

const databases = new sdk.Databases(client);
const account = new sdk.Account(client);
// Log in the user
const loginUser = async (data) => {
  try {
    const res = await account.createEmailPasswordSession(
      data.email,
      data.password
    );
    console.log("User logged in successfully:", res);
    return res;
  } catch (err) {
    console.error("Error logging in user:", err.message);
    throw new Error("Login failed");
  }
};
const saveProjectToDb = async (data) => {
  if (!data) {
    throw new Error("Invalid project data provided");
  }
  // save project data to the database, with userId get it from user Data
  try {
    return await databases.createDocument(
      process.env.DATABASE_ID,
      process.env.PROJECTS_COLLECTION_ID,
      sdk.ID.unique(),
      data,
      permissions
    );
  } catch (err) {
    console.log("Error saving project to db:", err.message);
    return err.message;
  }
};
// Save user data to the database
const saveUserToDb = async (data) => {
  console.log(data);
  if (!data) {
    throw new Error("Invalid user data provided");
  }

  try {
    // Check if user already exists
    let existingUser;
    try {
      existingUser = await databases.listDocuments(
        process.env.DATABASE_ID,
        process.env.USER_COLLECTION_ID,
        [sdk.Query.equal("email", data.email)]
      );
    } catch (err) {
      console.log("Error checking existing user:", err.message);
    }

    let res;
    if (!existingUser?.documents?.length) {
      res = await databases.createDocument(
        process.env.DATABASE_ID,
        process.env.USER_COLLECTION_ID,
        sdk.ID.unique(),
        data,
        permissions
      );
    } else {
      res = existingUser.documents[0];
    }
    console.log("User saved to database:", res);
    return res;
  } catch (err) {
    console.error("Error saving user to database:", err.message);
    throw new Error("Database save failed");
  }
};

async function logoutUser(sessionId) {
  try {
    await account.deleteSession(sessionId);
    console.log("User logged out successfully");
  } catch (error) {
    console.error("Error logging out user:", error);
  }
}

async function getUserSession() {
  try {
    const response = await account.get();
    console.log("User session:", response);
    return response;
  } catch (error) {
    console.error("Error retrieving user session:", error);
  }
}

const getUserByEmail = async (email) => {
  // Fetch user data from the database
  try {
    const user = await databases.listDocuments(
      process.env.DATABASE_ID,
      process.env.USER_COLLECTION_ID,
      [sdk.Query.equal("email", email)]
    );
    console.log("User data:", user);
    return user[0];
  } catch (err) {
    console.error("Error fetching user data:", err.message);
    throw new Error("Failed to fetch user data");
  }
};

const getProjectById = async (projectId) => {
  console.log(projectId);
  try {
    const project = await databases.listDocuments(
      process.env.DATABASE_ID,
      process.env.PROJECTS_COLLECTION_ID,
      [sdk.Query.equal("projectId", projectId)]
    );
    return project.documents;
  } catch (err) {
    console.error("Error fetching project data:", err.message);
    throw new Error("Failed to fetch project data");
  }
};

const getProjects = async (userId) => {
  try {
    const projects = await databases.listDocuments(
      process.env.DATABASE_ID,
      process.env.PROJECTS_COLLECTION_ID,
      [sdk.Query.equal("userId", userId)]
    );
    console.log("Projects data:", projects);
    return projects.documents;
  } catch (err) {
    console.error("Error fetching project data:", err.message);
    throw new Error("Failed to fetch project data");
  }
};

const saveTaskToDb = async (data) => {
  if (!data) {
    throw new Error("Invalid task data provided");
  }
  try {
    let res;
    if (data.taskId) {
      res = await databases.updateDocument(
        process.env.DATABASE_ID,
        process.env.TASKS_COLLECTION_ID,
        data.taskId,
        data
      );
    } else {
      res = await databases.createDocument(
        process.env.DATABASE_ID,
        process.env.TASKS_COLLECTION_ID,
        sdk.ID.unique(),
        data,
        permissions
      );
    }
    console.log("Task saved to database:", res);
    return res;
  } catch (e) {
    console.error("Error saving task to database:", e.message);
    throw new Error("Database save failed");
  }
};

const getTasks = async (data) => {
  // get list of tasks with user and projectID
  try {
    const tasks = await databases.listDocuments(
      process.env.DATABASE_ID,
      process.env.TASKS_COLLECTION_ID,
      [
        sdk.Query.equal("userId", data.userId),
        sdk.Query.equal("projectId", data.projectId)
      ]
    );
    console.log("Task data:", tasks);
    return tasks;
  } catch (err) {
    console.error("Error fetching task data:", err.message);
    throw new Error("Failed to fetch task data");
  }
};

module.exports = {
  saveUserToDb,
  getUserSession,
  logoutUser,
  loginUser,
  saveProjectToDb,
  getUserByEmail,
  getProjectById,
  getProjects,
  saveTaskToDb,
  getTasks
};
