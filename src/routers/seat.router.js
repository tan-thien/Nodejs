const express = require('express');
const router = express.Router();
const seatController = require('../controllers/seat.controller');

router.post('/generate', seatController.generateSeats);

router.get('/getbycinema/:cinemaId', seatController.getByCinema);

module.exports = router;
