const router = require('express').Router();
const ScheduleController = require('../controllers/Schedule.controller');

router.post('/schedule/create', ScheduleController.create);
router.get('/schedule/getall', ScheduleController.getAll);
router.get('/schedule/getbyid/:id', ScheduleController.getById);
router.put('/schedule/update/:id', ScheduleController.update);
router.delete('/schedule/delete/:id', ScheduleController.remove);

module.exports = router;
