const router = require('express').Router();
const BranchController = require('../controllers/Branch.controller');
const authenticateToken = require('../middlewares/authenticateToken');
const authorizeRole = require('../middlewares/authorizeRole');
// Create
router.post('/branch/create', authenticateToken,authorizeRole('admin'), BranchController.create);

// Read all
router.get('/branch/getall', BranchController.getAll);

// Read one
router.get('/branch/getbyid/:id', BranchController.getById);

// Update
router.put('/branch/update/:id', authenticateToken,authorizeRole('admin'), BranchController.update);

// Delete
router.delete('/branch/delete/:id', authenticateToken,authorizeRole('admin'), BranchController.remove);

module.exports = router;
