const router = require('express').Router();
const AccountController = require("../controllers/Account.controller");

router.post('/registration',AccountController.register);
router.post('/login', AccountController.login);


module.exports = router;