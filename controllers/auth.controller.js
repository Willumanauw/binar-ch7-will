const db = require('../models');
const User = db.User;
const passport = require('../lib/passport')

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

/* GET home page. */
const indexPage = asyncHandler(async (req,res) => {
  res.render('index', { title: 'Express' });
});

/* GET login page. */
const loginPage = asyncHandler(async (req,res) => {
    res.render('login', { title: 'Welcome to login page' });
  });

/* GET register page. */
const registerPage = asyncHandler(async (req,res) => {
  res.render('register', { title: 'Welcome to register Page' });
});

/* POST register page. */
const postRegister = asyncHandler(async (req, res) => {
    await User.register(req.body)
    .then(() => {
      res.redirect ('/login' )
      })
      .catch(err => next(err))
  });

const postLogin = asyncHandler (async(req,res) =>{
  await passport.authenticate('local', {
    successRedirect: '/',
    failureRedirect: '/login',
    failureFlash: true // Untuk mengaktifkan express flash
    })
})

  module.exports = {
    registerPage,
    postRegister,
    loginPage,
    postLogin,
    indexPage,
  }
