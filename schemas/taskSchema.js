const taskSchema = {
  taskId: { type: "string", required: true },
  projectId: { type: "string", required: true },
  name: { type: "string", required: true },
  description: { type: "string" },
  priority: { type: "string", enum: ["LOW", "MEDIUM", "HIGH"] },
  deadline: { type: "object", required: true },
  status: { type: "string", enum: ["PENDING", "INPROGRESS", "COMPLETED"] },
  createdBy: { type: "string", required: true },
  createdAt: { type: "object" },
};

module.exports = taskSchema;
