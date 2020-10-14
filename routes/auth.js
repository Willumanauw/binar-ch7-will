var express = require('express');
var router = express.Router();

const controller = require('../controllers/auth.controller');

router.get('/', controller.indexPage);
router.get('/register', controller.registerPage);
router.post('/register', controller.postRegister);
router.get('/login', controller.loginPage);
router.post('/login', controller.postLogin);



module.exports = router;