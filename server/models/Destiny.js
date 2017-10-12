var mongoose = require('mongoose');
var Schema   = mongoose.Schema;


var whoToWhereSchema = new Schema({
	'place' : {
    type:String,
    default:'no place'
 },
 'userId' : {
	 type: Schema.Types.ObjectId,
		ref: 'User'
}
});

const WhoToWhere = mongoose.model('WhoToWhere', whoToWhereSchema);
module.exports = WhoToWhere;
