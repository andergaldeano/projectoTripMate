var express = require('express');
var router = express.Router();
// var placeController = require('../controllers/placeController.js');
const Place = require('../models/placeModel');
const Comment = require('../models/comment');


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


// CREATE COMMENT
placeRoutes.post('/comment', (req, res, next) => {
console.log("estamos en el ultimo de los comentarios")

const comment = new Comment ({
  comment: req.body.comment,
  user: req.body.user,
  place: req.body.place
});

comment.save().then(comment => {console.log(comment)})
              .catch( e => res.json(e));

});







module.exports = placeRoutes;
