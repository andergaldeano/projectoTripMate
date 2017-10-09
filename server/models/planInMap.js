var mongoose = require('mongoose');
var Schema   = mongoose.Schema;


var planInMapSchema = new Schema({
	'lat' : {
    type:Number,
    default:1
 },
 'lng' : {
	 type:Number,
	 default:2
 },
	'planName' :{
    type:String,
    default:'no plan Name'
 }

});

const PlanInMap = mongoose.model('PlanInMap', planInMapSchema);
module.exports = PlanInMap;
