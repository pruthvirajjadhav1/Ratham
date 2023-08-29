const mongoose = require('mongoose');

const slotSchema = new mongoose.Schema({
  startTime: { type: Date, required: true },
  bookedBy: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
  dean: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
  status: { type: String, enum: ['available', 'booked'], default: 'available' },
});

module.exports = mongoose.model('Slot', slotSchema);
