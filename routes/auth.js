var express = require('express');
var router = express.Router();

const controller = require('../controllers/auth.controller');
const restrict = require('../middlewares/restrict');

router.get('/', controller.indexPage);
router.get('/register', controller.registerPage);
router.post('/register', controller.postRegister);
router.get('/login', controller.loginPage);
router.post('/login', controller.postLogin);
// router.get('/whoami', restrict, controller.whoami)

module.exports = router;