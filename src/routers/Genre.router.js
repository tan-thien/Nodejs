// src/routers/Genre.router.js
const router = require('express').Router();
const GenreController = require('../controllers/Genre.controller');
const authenticateToken = require('../middlewares/authenticateToken');
const authorizeRole = require('../middlewares/authorizeRole');

router.post('/genre/create', authenticateToken, authorizeRole('admin'), GenreController.create);
router.get('/genre/getall', GenreController.getAll);
router.get('/genre/getbyid/:id', GenreController.getById);
router.put('/genre/update/:id', authenticateToken, authorizeRole('admin'), GenreController.update);
router.delete('/genre/delete/:id', authenticateToken, authorizeRole('admin'), GenreController.remove);

module.exports = router;
