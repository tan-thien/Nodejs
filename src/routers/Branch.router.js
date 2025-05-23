const router = require('express').Router();
const BranchController = require('../controllers/Branch.controller');

// Create
router.post('/branch/create', BranchController.create);

// Read all
router.get('/branch/getall', BranchController.getAll);

// Read one
router.get('/branch/getbyid/:id', BranchController.getById);

// Update
router.put('/branch/update/:id', BranchController.update);

// Delete
router.delete('/branch/delete/:id', BranchController.remove);

module.exports = router;
