const express = require('express');
const router = express.Router();
const authController = require('../controllers/authController');
const slotController = require('../controllers/slotController');

router.post('/student/login', authController.studentLogin);

// Dean login
router.post('/dean/login', authController.deanLogin);

// Get available slots for students
router.get('/slots', slotController.getAvailableSlots);

// Book a slot by student
router.post('/slots/book', slotController.bookSlot);

// Get pending sessions for dean
router.get('/dean/pending-sessions', slotController.getPendingSessions);

// Simulate past slot time
router.put('/dean/simulate-past-slot/:slotId', slotController.simulatePastSlot);

// Get pending sessions for dean after slot start time
router.get('/dean/pending-sessions-after-slot', slotController.getPendingSessionsAfterSlotStart);



module.exports = router;