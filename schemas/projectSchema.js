const projectSchema = {
  projectId: { type: 'string', required: true },
  name: { type: 'string', required: true },
  description: { type: 'string' },
  createdAt: { type: 'object' },
  createdBy: { type: 'string', required: true },
  active: { type: 'boolean', required: true },
  tasks: { type: 'object', required: true },
  deadline: { type: 'object', required: true },
  status: {
    type: 'string',
    required: true,
    enum: ["PENDING", "INPROGRESS", "COMPLETED"]
  }
};


module.exports = projectSchema;