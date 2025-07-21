const express = require('express');
const router = express.Router();
const authenticateToken = require('../middlewares/authenticateToken');
const authorizeRole = require('../middlewares/authorizeRole');
const ScheduleSeatController = require('../controllers/ScheduleSeat.controller');

// API generate ghế cho lịch chiếu
router.post(
  '/schedule-seat/generate',
  authenticateToken,
  authorizeRole('admin'),
  ScheduleSeatController.generateSeatsForSchedule
);

// Lấy danh sách ghế theo ScheduleId
router.get('/schedule-seat/:scheduleId', ScheduleSeatController.getSeatsBySchedule);

module.exports = router;
