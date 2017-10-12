var express = require('express');
var router = express.Router();
const Plan = require('../models/Plan');
const Comment = require('../models/Comment');
const JoinThePlan = require('../models/Joinedplan');


var planRoutes = express.Router();

// GET UNIC PLAN

planRoutes.get('/unicPlan/:id', (req, res, next) => {
  console.log("estamos buscando el plan que queremos")
Plan.findById(req.params.id, (err, plan) => {
  if (err)   { return res.status(500).json(err); }
  if (!plan)  { return res.status(404).json(new Error("404")) }

  return res.json(plan);
});
});

// CREATE COMMENT ON THIS SPECIFIC PLAN

planRoutes.post('/comment', (req, res, next) => {
console.log("estamos en el ultimo de los comentarios")

const comment = new Comment ({
  comment: req.body.comment,
  planId: req.body.planId,
  userId: req.body.userId
});

comment.save().then(
            comment => {
              console.log(" el comentario es " + comment.comment)
              return res.json(comment)
            })
              .catch( e => res.json(e));
});


// GET COMMENTS ON THIS SPECIFIC PLAN


planRoutes.get('/comment/:planId', (req, res, next) => {
  Comment.find({planId : req.params.planId})
  .populate('userId')
  .populate('planId')
  .then (comments => res.json(comments));
});

// CREATE NEW CONEXION USER - PLAN

planRoutes.post('/joinThePlan', (req, res, next) => {

const joinThePlan = new JoinThePlan ({
  userId: req.body.userId,
  planId: req.body.planId

});

joinThePlan.save().then(
            conexion => {
              console.log("la conexion esta hecha entre  " + conexion.plan + " y " + conexion.user)
              return res.json(conexion)
            })
              .catch( e => res.json(e));
});

// GET USERS ON THIS SPECIFIC PLAN


planRoutes.get('/user/:planId', (req, res, next) => {

    JoinThePlan.find({planId :  req.params.planId})
    .populate('userId')
    .populate('planId')
    .then (users => res.json(users));


});

//FIND IF THE USER IS GOING TO THE PLAN OR ngOnInit

planRoutes.get('/isHeGoing/:planId/:userId', (req, res, next) => {
  console.log("ENTRO EN DONDE QUIERO SABER")
  JoinThePlan.find({planId :req.params.planId, userId: req.params.userId})
    .then (users =>  res.json(users));
});



module.exports = planRoutes;
