const userSchema = require("../schemas/userSchema");
const taskSchema = require("../schemas/taskSchema");
const validate = (data, schema) => {
  // console.log(data, schema);
  const schemaKeys = Object.keys(schema);
  for (const key of schemaKeys) {
    if (
      (key == "status" || key == "priority") &&
      !schema[key].enum?.includes(data[key])
    ) {
      // console.log(key, data[key]);
      throw new Error(
        `Invalid value for field: ${key}. Expected one of: ${schema[
          key
        ].enum?.join(", ")}`
      );
    }
    if (schema[key].required && !(key in data)) {
      throw new Error(`Missing required field: ${key}`);
    }
    if (key in data && typeof data[key] !== schema[key].type) {
      throw new Error(
        `Invalid type for field: ${key}. Expected ${schema[key].type}`
      );
    }
  }
  return true;
};

let userData = {
  userId: "2324",
  name: "John Doe",
  email: "johndoe@example.com",
  password: "password123",
  lastLoggedIn: true,
  createdAt: new Date()
};

let task = {
  taskId: "1234",
  projectId: "2324",
  name: "Task Title",
  description: "Task Description",
  status: "INPROGRESS",
  priority: "HIGH",
  deadline: "5354",
  createdAt: "new Date()",
  createdBy: "4335"
};

try {
  console.log(validate(userData, userSchema));
  console.log(validate(task, taskSchema));
} catch (error) {
  console.error(error);
}

module.exports = validate;
