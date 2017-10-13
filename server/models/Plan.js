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
 },
 placeName :{
	 type:String,
	 default:'general'
},
 year :{
	 type:String,
	 default:'general'
},
month : {
	type:String,
	default:'general'
},
day : {
	type:String,
	default:'general'
},
'lat' : {
	type:Number,
	default:1
},
'lng' : {
 type:Number,
 default:2
}


});

const Plan = mongoose.model('Plan', planSchema);
module.exports = Plan;
