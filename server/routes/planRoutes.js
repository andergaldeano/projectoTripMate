var express = require('express');
var router = express.Router();
const Plan = require('../models/plan');
const Comment = require('../models/comment');




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

// CREATE COMMENT
planRoutes.post('/comment', (req, res, next) => {
console.log("estamos en el ultimo de los comentarios")

const comment = new Comment ({
  comment: req.body.comment,
  planid: req.body.planid,
  user: req.body.user
});

comment.save().then(
            comment => {
              console.log(" el comentario es " + comment.comment)

            })
              .catch( e => res.json(e));

});






module.exports = planRoutes;
