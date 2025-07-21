const router = require('express').Router();
const AccountController = require("../controllers/Account.controller");

router.post('/registration',AccountController.register);
router.post('/login', AccountController.login);
router.get('/getall', AccountController.getAll);
router.get('/getbyid/:id', AccountController.getById);


module.exports = router;