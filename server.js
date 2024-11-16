const express = require("express");
const fs = require("fs");
const path = require("path");
const { getUserSession } = require("./lib/db.js");
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

// check if user is authenticated then only render index.html on dashboard route otherwise redirect to login page

app.get("/dashboard", async (req, res) => {
  console.log(await getUserSession());
  // if (req.session.user) {
  res.sendFile(path.join(__dirname, "src/index.html"));
  // } else {
  //   res.redirect("/users/login");
  // }
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
