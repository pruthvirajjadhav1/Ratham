const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  universityId: { type: String, required: true },
  password: { type: String, required: true },
  role: { type: String, enum: ['student', 'dean'], required: true },
});

module.exports = mongoose.model('User', userSchema);
