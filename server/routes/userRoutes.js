var express = require('express');
var router = express.Router();
// var userController = require('../controllers/userController.js');
const User = require('../models/User');
const Plan = require('../models/plan');
const JoinThePlan = require('../models/joinThePlan');





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

// GET PLANS of THIS USER

userRoutes.get('/plan/:user', (req, res, next) => {

  Plan.find({user : req.params.user}, (err, plans) => {
    if (err) { return res.json(err).status(500); }
      console.log("hemos llegado hasta aqui")
    return res.json(plans);
  });
});


// GET PLANS WHERE THIS USER IS GOING

userRoutes.get('/goingPlan/:userId', (req, res, next) => {


    JoinThePlan.find({userId : req.params.userId}, (err, planes) => {
      if (err) { return res.json(err).status(500); }
        console.log("hemos llegado hasta aqui para buscar planres con el usuario")
      return res.json(planes);
    });
  });

module.exports = userRoutes;
