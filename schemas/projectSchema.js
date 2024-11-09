const projectSchema = {
  projectId: { type: 'string', required: true },
  name: { type: 'string', required: true },
  description: { type: 'string' },
  createdAt: { type: 'string' },
  createdBy: { type: 'string', required: true },
  active: { type: 'boolean', required: true },
  tasks: { type: 'object', required: true },
  deadline: { type: 'string', required: true },
  status: {
    type: 'string',
    required: true,
    enum: ["PENDING", "INPROGRESS", "COMPLETED"]
  }
};


module.exports = projectSchema;