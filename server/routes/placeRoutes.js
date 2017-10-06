var express = require('express');
var router = express.Router();
// var placeController = require('../controllers/placeController.js');
const Place = require('../models/placeModel');


var placeRoutes = express.Router();


// GET UNIC PLACE

placeRoutes.get('/holiday/:id', (req, res, next) => {
console.log("estamos en el ultimo paso para buscar o crear")
  Place.findOrCreate({ identification: req.params.id }, (err, place) => {

      if (err)   { return res.status(500).json(err); }
      return res.json(place);
  });

});



module.exports = placeRoutes;
