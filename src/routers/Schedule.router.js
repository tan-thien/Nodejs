const router = require('express').Router();
const ScheduleController = require('../controllers/Schedule.controller');
const authenticateToken = require('../middlewares/authenticateToken');
const authorizeRole = require('../middlewares/authorizeRole');

router.post('/schedule/create', authenticateToken, authorizeRole('admin'), ScheduleController.create);
router.get('/schedule/getall', ScheduleController.getAll);
router.get('/schedule/getbyid/:id', ScheduleController.getById);
router.put('/schedule/update/:id', authenticateToken, authorizeRole('admin'), ScheduleController.update);
router.delete('/schedule/delete/:id', authenticateToken, authorizeRole('admin'), ScheduleController.remove);
router.get('/schedule/by-movie/:movieId', ScheduleController.getByMovieId);
router.get('/schedule/by-cinema/:cinemaId', ScheduleController.getByCinemaId);


module.exports = router;
