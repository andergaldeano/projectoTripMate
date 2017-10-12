var mongoose = require('mongoose');
var Schema   = mongoose.Schema;


var joinThePlanSchema = new Schema({

 'userId' : {
	 type: Schema.Types.ObjectId,
		ref: 'User'
},
'planId' : {
	type: Schema.Types.ObjectId,
 	ref: 'Plan'
}

});

const JoinThePlan = mongoose.model('JoinThePlan', joinThePlanSchema);
module.exports = JoinThePlan;
