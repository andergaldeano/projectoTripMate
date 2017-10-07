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

// CREATE COMMENT ON THIS SPECIFIC PLAN

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


// GET COMMENTS ON THIS SPECIFIC PLAN


planRoutes.get('/comment/:plan', (req, res, next) => {

  console.log("vamos a buscar todos los comentarios de este plan " + req.params.plan)

  Comment.find({planid : req.params.plan}, (err, comments) => {
    if (err) { return res.json(err).status(500); }

    return res.json(comments);
  });
});


module.exports = planRoutes;
