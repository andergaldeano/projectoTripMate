var express = require('express');
var router = express.Router();
// var placeController = require('../controllers/placeController.js');
const Place = require('../models/placeModel');
const Plan = require('../models/plan');
// const User = require('../models/User');



var placeRoutes = express.Router();
// var commentRoutes = express.Router();


// GET UNIC PLACE

placeRoutes.get('/holiday/:id', (req, res, next) => {
console.log("estamos en el ultimo paso para buscar o crear")
  Place.findOrCreate({ identification: req.params.id }, (err, place) => {

      if (err)   { return res.status(500).json(err); }
      return res.json(place);
  });

});


// CREATE PLAN
placeRoutes.post('/plan', (req, res, next) => {
console.log("estamos en el ultimo de los planes")

const plan = new Plan ({
  plan: req.body.plan,
  details: req.body.details,
  user: req.body.user,
  place: req.body.place
});

plan.save().then(
            plan => {
              console.log("el que ha hecho el plan es " + plan.place)
              // const plansPlace = plan.place;
              // const updates = {'activities': plan.plan}
              // Place.findOneAndUpdate({place: plansPlace}, updates, {new:true})
              //   .then(p => {res.status(200).json(p)})
              //   .catch(e => res.status(500).json({error:e.message}));

            })
              .catch( e => res.json(e));

});


// GET PLANS HERE


placeRoutes.get('/plan/:place', (req, res, next) => {

  console.log("vamos a buscar todos los planes de este lugar" + req.params.place)

  Plan.find({place : req.params.place}, (err, plans) => {
    if (err) { return res.json(err).status(500); }

    return res.json(plans);
  });
});







module.exports = placeRoutes;
