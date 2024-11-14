const userSchema = {
  userId: { type: 'string', required: true },
  name: { type: 'string', required: true },
  email: { type: 'string', required: true },
  password: { type: 'string', required: true },
  createdAt: { type: 'object' }
};


module.exports = userSchema;
