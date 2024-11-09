const taskSchema = {
  taskId: { type: 'string', required: true },
  projectId: { type: 'string', required: true },
  name: { type: 'string', required: true },
  description: { type: 'string' },
  priority: { type: 'string', enum: ["LOW", "MEDIUM", "HIGH"] },
  deadline: { type: 'string', required: true },
  createdBy: { type: 'string', required: true },
  createdAt: { type: 'string' },
  status: { type: 'string', enum: ["PENDING", "INPROGRESS", "COMPLETED"] }
};

module.exports = taskSchema;
