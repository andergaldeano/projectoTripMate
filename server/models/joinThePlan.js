var mongoose = require('mongoose');
var Schema   = mongoose.Schema;


var joinThePlanSchema = new Schema({
	'plan' : {
    type:String,
    default:'no plan'
 },
	'user' : {
    type:String,
    default:'no user'
 },
 'userId' : {
	 type:String,
	 default:'no user'
},
'planId' : {
  type:String,
  default:'no user'
},

});

const JoinThePlan = mongoose.model('JoinThePlan', joinThePlanSchema);
module.exports = JoinThePlan;
