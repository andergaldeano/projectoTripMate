var express = require('express');
var router = express.Router();
const Place = require('../models/placeModel');
const Plan = require('../models/plan');
const WhoToWhere = require('../models/whoToWhere');
const PlanInMap = require('../models/planInMap');
const PhotosInPLace = require('../models/photosInPlace');
const upload = require('../config/multer');



var placeRoutes = express.Router();


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
  planName: req.body.planName

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


// CREATE PHOTOS ON THIS SPECIFIC PLACE

placeRoutes.post('/photoPlace', upload.single('file'), function(req, res) {
  console.log("estamos en el ultimo para poner fotos")

  const photo = new PhotosInPLace ({
    user: req.body.user,
    userId: req.body.userId,
    place: req.body.place,
    photo: `/uploads/${req.file.filename}`,
  });

  photo.save().then(
          photo2 => {
            console.log("el que ha subido la photo2 es " + photo2.userId)
            res.status(200).json(photo2);
          })
            .catch( e => res.json(e));
});


// GET ALL PHOTOS ON THIS SPECIFIC PLACE


placeRoutes.get('/allphotos/:place', (req, res, next) => {

  console.log("vamos a buscar todas las fotitos que en este lugar " + req.params.place)

  PhotosInPLace.find({place : req.params.place}, (err, photos) => {
    if (err) { return res.json(err).status(500); }
    console.log("hay alguna fotito  " + photos)
    return res.json(photos);
  });
});





module.exports = placeRoutes;
