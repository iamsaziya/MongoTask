const sdk = require("node-appwrite");

// Init SDK
const client = new sdk.Client();

const databases = new sdk.Databases(client);

client
  .setEndpoint("https://cloud.appwrite.io/v1") // Your API Endpoint
  .setProject(process.env.PROJECT_ID) // Your project ID
  .setKey(process.env.APPWRITE_API_KEY); // Your secret API key

const saveUserToDb = async (data) => {
  try {
    const res = await databases.createDocument(
      process.env.DATABASE_ID,
      process.env.USER_COLLECTION_ID,
      sdk.ID.unique(),
      data
    );
    console.log(res);
    return res;
  } catch (err) {
    console.error("Error saving user to database:", err);
  }
};

module.exports = { saveUserToDb };
