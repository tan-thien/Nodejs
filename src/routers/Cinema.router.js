const express = require('express');
const router = express.Router();
const cinemaController = require('../controllers/Cinema.controller');
const authenticateToken = require('../middlewares/authenticateToken');
const authorizeRole = require('../middlewares/authorizeRole');

// Create Cinema
router.post('/cinema/create', authenticateToken, authorizeRole('admin'), cinemaController.create);

// Get all Cinemas
router.get('/cinema/getall', cinemaController.getAll);

// Get Cinema by ID
router.get('/cinema/getbyid/:id', cinemaController.getById);

// Update Cinema by ID
router.put('/cinema/update/:id', authenticateToken, authorizeRole('admin'), cinemaController.update);

// Delete Cinema by ID
router.delete('/cinema/delete/:id', authenticateToken, authorizeRole('admin'), cinemaController.remove);
module.exports = router;
