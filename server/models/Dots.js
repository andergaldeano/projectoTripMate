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
 'planId' :{
	 type: Schema.Types.ObjectId,
	ref: 'Plan'
}

});

const PlanInMap = mongoose.model('PlanInMap', planInMapSchema);
module.exports = PlanInMap;
