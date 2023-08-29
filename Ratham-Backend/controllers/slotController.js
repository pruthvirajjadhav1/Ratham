const Slot = require('../models/Slot');

// Get available slots
exports.getAvailableSlots = async (req, res) => {
  try {
    const slots = await Slot.find({ status: 'available' });
    res.json(slots);
  } catch (error) {
    res.status(500).json({ message: 'Internal server error' });
  }
};

// Book a slot
exports.bookSlot = async (req, res) => {
  try {
    const { userId } = req.user; 
    const { slotId } = req.body;
    const slot = await Slot.findById(slotId);

    if (!slot || slot.status !== 'available') {
      return res.status(400).json({ message: 'Invalid slot' });
    }

    slot.status = 'booked';
    slot.bookedBy = userId;
    await slot.save();

    res.json({ message: 'Slot booked successfully' });
  } catch (error) {
    res.status(500).json({ message: 'Internal server error' });
  }
};

// Get pending sessions for dean
exports.getPendingSessions = async (req, res) => {
    try {
      const { userId } = req.user; // Extracted from JWT token
      const slots = await Slot.find({ dean: userId, status: 'booked' })
        .populate('bookedBy', 'universityId')
        .populate('dean', 'universityId');
        
      res.json(slots);
    } catch (error) {
      res.status(500).json({ message: 'Internal server error' });
    }
  };
  
  // Simulate past slot for Dean's scenario
  exports.simulatePastSlot = async (req, res) => {
    try {
      const { slotId } = req.params;
      const slot = await Slot.findById(slotId);
  
      if (!slot) {
        return res.status(404).json({ message: 'Slot not found' });
      }
  
      // Manually set the start time to a past time
      slot.startTime = new Date('2023-08-01T09:00:00Z'); // Example past time
      await slot.save();
  
      res.json({ message: 'Slot time changed successfully' });
    } catch (error) {
      res.status(500).json({ message: 'Internal server error' });
    }
  };

// Get pending sessions for dean after slot start time
exports.getPendingSessionsAfterSlotStart = async (req, res) => {
    try {
      const { userId } = req.user; // Extracted from JWT token
      const now = new Date();
      
      const slots = await Slot.find({
        dean: userId,
        status: 'booked',
        startTime: { $lt: now }
      })
      .populate('bookedBy', 'universityId')
      .populate('dean', 'universityId');
      
      res.json(slots);
    } catch (error) {
      res.status(500).json({ message: 'Internal server error' });
    }
  };
  