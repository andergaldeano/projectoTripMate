var express = require('express');
var router = express.Router();
const Plan = require('../models/plan');



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






module.exports = planRoutes;
