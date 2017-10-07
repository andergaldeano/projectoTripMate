var mongoose = require('mongoose');
var Schema   = mongoose.Schema;


var whoToWhereSchema = new Schema({
	'place' : {
    type:String,
    default:'no place'
 },
	'user' : {
    type:String,
    default:'no user'
 },
 'userId' : {
	 type:String,
	 default:'no user'
}
});

const WhoToWhere = mongoose.model('WhoToWhere', whoToWhereSchema);
module.exports = WhoToWhere;
