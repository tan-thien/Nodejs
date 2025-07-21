const router = require('express').Router();
const NewsController = require('../controllers/News.controller');
const authenticateToken = require('../middlewares/authenticateToken');
const authorizeRole = require('../middlewares/authorizeRole');

router.post('/news/create', authenticateToken, authorizeRole('admin'), NewsController.create);
router.get('/news/getall', NewsController.getAll);
router.get('/news/getbyid/:id', NewsController.getById);
router.put('/news/update/:id', authenticateToken, authorizeRole('admin'), NewsController.update);
router.delete('/news/delete/:id', authenticateToken, authorizeRole('admin'), NewsController.remove);

module.exports = router;
