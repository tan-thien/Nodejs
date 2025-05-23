const express = require('express');
const router = express.Router();
const cinemaController = require('../controllers/Cinema.controller');

// Create Cinema
router.post('/cinema/create', cinemaController.create);

// Get all Cinemas
router.get('/cinema/getall', cinemaController.getAll);

// Get Cinema by ID
router.get('/cinema/getbyid/:id', cinemaController.getById);

// Update Cinema by ID
router.put('/cinema/update/:id', cinemaController.update);

// Delete Cinema by ID
router.delete('/cinema/delete/:id', cinemaController.remove);

module.exports = router;
