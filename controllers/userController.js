const { loginUser, saveUserToDb, getUserSession } = require("../lib/db");
const { validate } = require("../lib/validation");
const { userSchema } = require("../schemas/userSchema");
const crypto = require("crypto");

const userIdGenerator = crypto.randomUUID();

const register = async (req, res) => {
  try {
    // Validate request body against schema
    req.body.userId = userIdGenerator;
    // validate(req.body, userSchema);
    // Save user to database
    await saveUserToDb(req.body);
    res.status(201).json({
      success: true,
      message: "User created successfully"
    });
  } catch (err) {
    // Handle both validation and database errors
    const statusCode = err.name === "ValidationError" ? 400 : 500;
    res.status(statusCode).json({
      success: false,
      message: err.message
    });
  }
};

const login = async (req, res) => {
  try {
    // Authenticate user with database
    const user = await loginUser(req.body);

    // Generate a session ID and save it to the database
    const sessionId = await getUserSession(user.userId);

    res.json({
      success: true,
      sessionId: sessionId
    });
  } catch (err) {
    res.status(500).send({ message: "Error logging in user" });
  }
};

module.exports = { login, register };
