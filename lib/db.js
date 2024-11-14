const sdk = require("node-appwrite");
const dotenv = require("dotenv");
dotenv.config();

// Init SDK
const client = new sdk.Client();
const databases = new sdk.Databases(client);
const account = new sdk.Account(client);

client
  .setEndpoint("https://cloud.appwrite.io/v1") // API Endpoint
  .setProject(process.env.PROJECT_ID) // Project ID
  .setKey(process.env.APPWRITE_API_KEY); // API Key

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

// Save user data to the database
const saveUserToDb = async (data) => {
  if (!data) {
    throw new Error("Invalid user data provided");
  }

  try {
    const isLogin = await loginUser(data);
    if (!isLogin || !isLogin.userId) {
      console.error("Login failed or returned invalid session:", isLogin);
      throw new Error("Failed to login user");
    }

    console.log("User ID:", isLogin.userId); // Debugging userId

    // Temporarily simplified permissions for testing
    const permissions = [
      sdk.Permission.read(sdk.Role.any()),
      sdk.Permission.write(sdk.Role.any()), // Fallback if userId is invalid
      sdk.Permission.update(sdk.Role.any()),
      sdk.Permission.delete(sdk.Role.any())
    ];

    const res = await databases.createDocument(
      process.env.DATABASE_ID,
      process.env.USER_COLLECTION_ID,
      sdk.ID.unique(),
      data,
      permissions
    );
    console.log("User saved to database:", res);
    return res;
  } catch (err) {
    console.error("Error saving user to database:", err.message);
    throw new Error("Database save failed");
  }
};

module.exports = { saveUserToDb };
