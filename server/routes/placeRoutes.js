var express = require('express');
var router = express.Router();
// var placeController = require('../controllers/placeController.js');
const Place = require('../models/placeModel');
const Plan = require('../models/plan');
const WhoToWhere = require('../models/whoToWhere');
const PlanInMap = require('../models/planInMap');

// const User = require('../models/User');


var placeRoutes = express.Router();
// var commentRoutes = express.Router();


// GET SPECIFIC PLACE

placeRoutes.get('/holiday/:id', (req, res, next) => {
console.log("estamos en el ultimo paso para buscar o crear")
  Place.findOrCreate({ identification: req.params.id }, (err, place) => {

      if (err)   { return res.status(500).json(err); }
      return res.json(place);
  });

});


// CREATE PLAN ON THIS SPECIFIC PLACE

placeRoutes.post('/plan', function(req, res) {
console.log("estamos en el ultimo de los planes")

const plan = new Plan ({
  plan: req.body.plan,
  details: req.body.details,
  user: req.body.user,
  place: req.body.place,


});

plan.save().then(
            plan => {
              console.log("el que ha hecho el plan es " + plan.place)
              res.status(200).json(plan);
              return res.json(plan);

              // const plansPlace = plan.place;
              // const updates = {'activities': plan.plan}
              // Place.findOneAndUpdate({place: plansPlace}, updates, {new:true})
              //   .then(p => {res.status(200).json(p)})
              //   .catch(e => res.status(500).json({error:e.message}));

            })
              .catch( e => res.json(e));
});


// GET PLANS ON THIS SPECIFIC PLACE


placeRoutes.get('/plan/:place', (req, res, next) => {

  console.log("vamos a buscar todos los planes de este lugar" + req.params.place)

  Plan.find({place : req.params.place}, (err, plans) => {
    if (err) { return res.json(err).status(500); }

    return res.json(plans);
  });
});


// CREATE NEW CONEXION USER - PLACE

placeRoutes.post('/whoToWhere', (req, res, next) => {
console.log("estamos en el ultimo para crear conexion entre usuario y lugar")

const whoToWhere = new WhoToWhere ({
  place: req.body.place,
  user: req.body.user,
  userId: req.body.userId
});

whoToWhere.save().then(
            conexion => {
              console.log("la conexion esta hecha entre  " + conexion.place + " y " + conexion.user)
            })
              .catch( e => res.json(e));
});


// GET CONEXIONS USER - PLACE ON THIS SPECIFIC PLACE


placeRoutes.get('/conexion/:place', (req, res, next) => {

  console.log("vamos a buscar todos los usuarios que visitaran este lugar " + req.params.place)

  WhoToWhere.find({place : req.params.place}, (err, conexions) => {
    if (err) { return res.json(err).status(500); }
    console.log("hay alguna   " + conexions)
    return res.json(conexions);
  });
});


// CREATE NEW CONEXION PLAN - MAP

placeRoutes.post('/planToMap', (req, res, next) => {
console.log("estamos en el ultimo para crear conexion entre plan y mapa")

const planToMap = new PlanInMap ({
  lat: Number(req.body.lat),
  lng: Number(req.body.lng),
  planName: req.body.planName,
  planId: req.body.planId

});

planToMap.save().then(
            conexion => {
              console.log("el plan " + planToMap.planName + "se ha puesto en " + planToMap.lng)
            })
              .catch( e => res.json(e));
});



// GET ALL POINTS IN THE MAP

placeRoutes.get('/pointFainder', (req, res, next) => {

  console.log("vamos a buscar todos los puntitos ")

  PlanInMap.find((err, points) => {
    if (err) { return res.json(err).status(500); }
    return res.json(points);
  });
});




module.exports = placeRoutes;
