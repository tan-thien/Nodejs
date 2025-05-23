// src/routers/Movie.router.js
const router = require('express').Router();
const MovieController = require('../controllers/Movie.controller');

router.post('/movie/create', MovieController.create);
router.get('/movie/getall', MovieController.getAll);
router.get('/movie/getbyid/:id', MovieController.getById);
router.put('/movie/update/:id', MovieController.update);
router.delete('/movie/delete/:id', MovieController.remove);

module.exports = router;
