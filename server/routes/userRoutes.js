var express = require('express');
var router = express.Router();
// var userController = require('../controllers/userController.js');
const User = require('../models/User');
const Plan = require('../models/plan');



// GET ALL USERS

var userRoutes = express.Router();

userRoutes.get('/allusers', (req, res, next) => {
  User.find({}, (err, travellers) => {
    if (err) { return res.json(err).status(500); }

    return res.json(travellers);
  });
});

// GET UNIC USER

userRoutes.get('/traveller/:id', (req, res, next) => {
User.findById(req.params.id, (err, user) => {
  if (err)   { return res.status(500).json(err); }
  if (!user)  { return res.status(404).json(new Error("404")) }

  return res.json(user);
});
});

// GET PLANS FOR THIS USER


userRoutes.get('/plan/:user', (req, res, next) => {

  Plan.find({user : req.params.user}, (err, plans) => {
    if (err) { return res.json(err).status(500); }
      console.log("hemos llegado hasta aqui")
    return res.json(plans);
  });
});

module.exports = userRoutes;
