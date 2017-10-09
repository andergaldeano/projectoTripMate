const express = require('express');
const passport = require('passport');
const path = require('path');
const User = require('../models/User');
const bcrypt = require('bcrypt');
const debug = require('debug')("angularauth:"+path.basename(__filename).split('.')[0]);
const upload = require('../config/multer');


var authRoutes = express.Router();
var loggedUser;

/* SING UP POST */
authRoutes.post('/signup', (req, res, next) => {
  const {username, password} = req.body;

  if (!username || !password)
    return res.status(400).json({ message: 'Provide username and password' });

  debug('Find user in DB');

  User.findOne({ username },'_id').exec().then(user =>{
    console.log("vamos a crear")
    if(user)
      return res.status(400).json({ message: 'The username already exists' });

    const salt     = bcrypt.genSaltSync(10);
    const hashPass = bcrypt.hashSync(password, salt);
    debug('creating user');
    const theUser = new User({
      username,
      password: hashPass,

    });
    return theUser.save()
    .then(user =>{
      console.log(user)
      req.login(user, (err) => {
        if (err)
          return res.status(500).json({ message: 'Something went wrong' });

        res.status(200).json(req.user);
      });
    })
  })
  .catch(e => {
    console.log(e);
    res.status(400).json({ message: 'Something went wrong' })
  });
});

//LOGIN POST

authRoutes.post('/login', (req, res, next) => {
  passport.authenticate('local', (err, user, failureDetails) => {
    if (err)
      return res.status(500).json({ message: 'Something went wrong' });

    if (!user)
      return res.status(401).json(failureDetails);

    req.login(user, (err) => {
      if (err)
        return res.status(500).json({ message: 'Something went wrong' });

      loggedUser = req.user;
      // We are now logged in (notice req.user)
      res.status(200).json(req.user);
      User.findByIdAndUpdate(req.user._id, {firstTime: false}, {new:true})
        .then(p => req.user);
    });
  })(req, res, next);
});

// GET USER
authRoutes.get('/user', (req, res, next) => {
  User.findById(loggedUser._id, (err, user) => {
    if (err)   { return res.status(500).json(err); }
    if (!user)  { return res.status(404).json(new Error("404")) }

    return res.json(user);
  });
});



// UPDATE PROFILE POST

  authRoutes.post('/editprofile/:id', upload.single('file'), (req, res) => {
    console.log("ahi estamos")
    // const {country, details} = req.body;
    const updates = {country: req.body.country,
                    details: req.body.details,
                    photo: `/uploads/${req.file.filename}`}

    User.findByIdAndUpdate(req.params.id, updates, {new:true})
      .then(p => {res.status(200).json(p)})
      .catch(e => res.status(500).json({error:e.message}));
    });

  // // GET ALL USERS
  //
  // authRoutes.get('/allusers', (req, res, next) => {
  //   User.find({}, (err, travellers) => {
  //     if (err) { return res.json(err).status(500); }
  //
  //     return res.json(travellers);
  //   });
  // });

//   // GET UNIC USER
//
//   authRoutes.get('/traveller/:id', (req, res, next) => {
//   User.findById(req.params.id, (err, user) => {
//     if (err)   { return res.status(500).json(err); }
//     if (!user)  { return res.status(404).json(new Error("404")) }
//
//     return res.json(user);
//   });
// });




//LOGOUT POST

authRoutes.post('/logout', (req, res, next) => {
  console.log("han llamao???")
  req.logout();
  res.status(200).json({ message: 'Success' });
});

//LOGGED IN FORM

authRoutes.get('/loggedin', (req, res, next) => {
  if (req.isAuthenticated())
    return res.status(200).json(req.user);
  res.status(403).json({ message: 'Unauthorized' });
});


module.exports = authRoutes;
