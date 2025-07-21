const router = require('express').Router();
const ServiceController = require('../controllers/Service.controller');
const authenticateToken = require('../middlewares/authenticateToken');
const authorizeRole = require('../middlewares/authorizeRole');

router.post('/service/create', authenticateToken, authorizeRole('admin'), ServiceController.create);
router.get('/service/getall', ServiceController.getAll);
router.get('/service/getbyid/:id', ServiceController.getById);
router.put('/service/update/:id', authenticateToken, authorizeRole('admin'), ServiceController.update);
router.delete('/service/delete/:id', authenticateToken, authorizeRole('admin'), ServiceController.remove);

module.exports = router;
