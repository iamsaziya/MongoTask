const express = require("express");
const path = require("path");
const { validate } = require("../lib/validation");
const userSchema = require("../schemas/userSchema");
const { saveUserToDb } = require("../lib/db");
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

router.post("/login", async (req, res) => {
  try {
    // Validate request body against schema
    // validate(req.body, userSchema);
    
    // Save user to database
    await saveUserToDb(req.body);
    res.status(201).json({ 
      success: true,
      message: "User created successfully" 
    });

  } catch (err) {
    // Handle both validation and database errors
    const statusCode = err.name === 'ValidationError' ? 400 : 500;
    res.status(statusCode).json({
      success: false, 
      message: err.message
    });
  }
});

module.exports = router;
