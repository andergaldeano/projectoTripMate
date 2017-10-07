var mongoose = require('mongoose');
var Schema   = mongoose.Schema;


var planSchema = new Schema({
	'plan' : {
    type:String,
    default:'no hay plan'
 },
 'details' : {
	 type:String,
	 default:'no hay descripcion'
 },
	'user' : {
    type:String,
    default:'no user'
 },
	'place' :{
    type:String,
    default:'general'
 }
});

const Plan = mongoose.model('Plan', planSchema);
module.exports = Plan;
