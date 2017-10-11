var express = require('express');
var router = express.Router();
const Place = require('../models/Place');
const Plan = require('../models/Plan');
const WhoToWhere = require('../models/Destiny');
const PhotosInPLace = require('../models/Photos');
const upload = require('../config/multer');
const Commentplace = require('../models/Commentplace');




var placeRoutes = express.Router();


// GET SPECIFIC PLACE

placeRoutes.get('/holiday/:id', (req, res, next) => {
  Place.findOrCreate({ identification: req.params.id }, (err, place) => {

      if (err)   { return res.status(500).json(err); }
      return res.json(place);
  });

});


// CREATE PLAN ON THIS SPECIFIC PLACE

placeRoutes.post('/plan', function(req, res) {

  const plan = new Plan ({
    plan: req.body.plan,
    details: req.body.details,
    user: req.body.user,
    place: req.body.place,
    year: req.body.year,
    month: req.body.month,
    day: req.body.day,
    lat: req.body.lat,
    lng: req.body.lng
  });

  plan.save().then(
          plan => {
            res.status(200).json(plan);
          })
            .catch( e => res.json(e));
});


// GET PLANS ON THIS SPECIFIC PLACE


placeRoutes.get('/plan/:place/:sYear/:sMonth/:sDay/:fYear/:fMonth/:fDay', (req, res, next) => {
  console.log("llegamos aqui")
  Plan.find({place : req.params.place, /*month: {  $gt : (req.params.sMonth - 1), $lt : (req.params.fMonth + 1) },*/ day: { $gt : (req.params.sDay - 1), $lt : (req.params.fDay + 1)}})
   .then(plans => res.status(200).json(plans))
   .catch(e => res.status(500).json({
     error:e.message
   }))
});


// GET PLANS ON THIS SPECIFIC PLACE


placeRoutes.get('/allplans', (req, res, next) => {
  Plan.find()
  .then(plans => res.status(200).json(plans))
  .catch(e => res.status(500).json({
    error: e.message
  }));
});


// CREATE NEW CONEXION USER - PLACE

placeRoutes.post('/whoToWhere', (req, res, next) => {

const whoToWhere = new WhoToWhere ({
  place: req.body.place,
  userId: req.body.userId
});

whoToWhere.save().then(
            conexion => {
              return res.json(conexions);

            })
              .catch( e => res.json(e));
});


// GET CONEXIONS USER - PLACE ON THIS SPECIFIC PLACE


placeRoutes.get('/conexion/:place', (req, res, next) => {
  WhoToWhere.find({place : req.params.place})
  .populate('userId')
  .then (user => res.json(user));

});


// CREATE NEW CONEXION PLAN - MAP

placeRoutes.post('/planToMap', (req, res, next) => {

const planToMap = new PlanInMap ({
  lat: Number(req.body.lat),
  lng: Number(req.body.lng),
  planId : req.body.planId

});

planToMap.save().then(
            conexion => {
              return res.json(conexion)
            })
              .catch( e => res.json(e));
});



// GET ALL POINTS IN THE MAP

placeRoutes.get('/pointFainder', (req, res, next) => {
  PlanInMap.find()
  .populate('planId')
  .then (plan => res.json(plan));
});



// CREATE PHOTOS ON THIS SPECIFIC PLACE

placeRoutes.post('/photoPlace', upload.single('file'), function(req, res) {

  const photo = new PhotosInPLace ({
    user: req.body.user,
    userId: req.body.userId,
    place: req.body.place,
    photo: `/uploads/${req.file.filename}`,
  });

  photo.save().then(
          photo2 => {
            return res.status(200).json(photo2);
          })
            .catch( e => res.json(e));
});


// GET ALL PHOTOS ON THIS SPECIFIC PLACE


placeRoutes.get('/allphotos/:place', (req, res, next) => {
  PhotosInPLace.find({place : req.params.place}, (err, photos) => {
    if (err) { return res.json(err).status(500); }
    return res.json(photos);
  });
});

//FIND IF THE USER IS GOING TO THE PLACE OR ngOnInit

placeRoutes.get('/isHeGoing/:place/:userId', (req, res, next) => {
  console.log("ENTRO EN DONDE QUIERO SABER")
  WhoToWhere.find({place :req.params.place, userId: req.params.userId})
    .then (users =>  res.json(users));
});

// CREATE COMMENT ON THIS SPECIFIC PLACE

placeRoutes.post('/comment', (req, res, next) => {
console.log("estamos en el ultimo de los comentarios")

const comment = new Commentplace ({
  comment: req.body.comment,
  plan: req.body.place,
  userId: req.body.userId
});

comment.save().then(
            comment => {
              console.log(" el comentario es " + comment.comment)
              return res.json(comment)
            })
              .catch( e => res.json(e));
});


// GET COMMENTS ON THIS SPECIFIC PLACE


placeRoutes.get('/comment/:place', (req, res, next) => {
  Commentplace.find({place : req.params.place})
  .populate('userId')
  .then (comments => res.json(comments));
});




module.exports = placeRoutes;
