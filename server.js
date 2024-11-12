const express = require("express");
const fs = require("fs");
const path = require("path");

const app = express();
const PORT = process.env.PORT || 4000;

// Middleware (if any)
app.use(express.json()); // For parsing application/json

// Dynamically import all route files from the routes folder
app.use(express.static(path.join(__dirname, "src")));

// routes
app.use("/users", require("./routes/users.js"));
app.use("/projects", require("./routes/projects.js"));
app.use("/projects/:projectId/tasks", require("./routes/tasks.js"));


// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
