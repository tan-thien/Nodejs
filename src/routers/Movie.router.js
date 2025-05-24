// src/routers/Movie.router.js
const router = require('express').Router();
const MovieController = require('../controllers/Movie.controller');
const authenticateToken = require('../middlewares/authenticateToken');
const authorizeRole = require('../middlewares/authorizeRole');

router.post('/movie/create', authenticateToken, authorizeRole('admin'), MovieController.create);
router.get('/movie/getall', MovieController.getAll);
router.get('/movie/getbyid/:id', MovieController.getById);
router.put('/movie/update/:id', authenticateToken, authorizeRole('admin'), MovieController.update);
router.delete('/movie/delete/:id', authenticateToken, authorizeRole('admin'), MovieController.remove);

module.exports = router;
