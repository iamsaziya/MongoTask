const userSchema = {
  // userId: { type: "string" },
  // name: { type: "string" },
  email: { type: "string", required: true },
  password: { type: "string", required: true },
  // createdAt: { type: "object" }
};

module.exports = userSchema;
