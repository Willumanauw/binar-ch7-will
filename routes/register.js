var express = require('express');
var router = express.Router();
const db = require('../models/');
const User = db.User;

/* Handler function to wrap each route. */
function asyncHandler(cb){
    return async(req, res, next) => {
      try {
        await cb(req, res, next)
      } catch(error){
        // Forward error to the global error handler
        next(error);
      }
    }
  }

/* GET create page. */
router.get('/', asyncHandler( async (req, res) => {
    res.render('register', { title: 'Welcome to register Page' });
  }) );

/* POST register page. */
router.post('/', asyncHandler(async (req, res) => {
    await User.create({
      username: req.body.username,
      password: req.body.password
      }) 
    res.send(`user is created`);
  }));

module.exports = router;
