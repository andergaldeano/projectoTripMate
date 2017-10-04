const express = require('express');
const router  = express.Router();
const User    = require('../models/User');
const multer  = require('multer');
const upload  = multer({ dest: './public/uploads/' });

var member = express.Router();



/* EDIT a USER. */
// router.put('/editprofile/:id', (req, res) => {
//   console.log("ahi estamos")
//   const {country, details} = req.body;
//   const updates = {country, details};
//
//   User.findByIdAndUpdate(req.params.id, updates, {new:true})
//     .then(p => res.status(200).json(p))
//     .catch(e => res.status(500).json({error:e.message}));
// });

module.exports = member;
