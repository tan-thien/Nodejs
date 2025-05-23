// src/routers/Genre.router.js
const router = require('express').Router();
const GenreController = require('../controllers/Genre.controller');

router.post('/genre/create', GenreController.create);
router.get('/genre/getall', GenreController.getAll);
router.get('/genre/getbyid/:id', GenreController.getById);
router.put('/genre/update/:id', GenreController.update);
router.delete('/genre/delete/:id', GenreController.remove);

module.exports = router;
