var express = require('express');
var router = express.Router();
// var userController = require('../controllers/userController.js');
const User = require('../models/User');




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

/*
 * GET
 */

// router.get('/allusers', userController.list);
// userRoutes.get('/allusers', (req, res, next) => {
//   User.find({}, (err, travellers) => {
//     if (err) { return res.json(err).status(500); }
//
//     return res.json(travellers);
//   });
// });


// /*
//  * GET
//  */
// router.get('/:id', userController.show);
//
// /*
//  * POST
//  */
// router.post('/', userController.create);
//
// /*
//  * PUT
//  */
// router.put('/:id', userController.update);
//
// /*
//  * DELETE
//  */
// router.delete('/:id', userController.remove);

module.exports = userRoutes;
