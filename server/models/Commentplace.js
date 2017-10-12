var mongoose = require('mongoose');
var Schema   = mongoose.Schema;


var commentplaceSchema = new Schema({
	'comment' : {
    type:String,
    default:'no hay comment'
 },
 'place' : {
 	type: String,
  default:'no place'
 },
	'userId' : {
		type: Schema.Types.ObjectId,
	 	ref: 'User'
	}
});

const Commentplace = mongoose.model('Commentplace', commentplaceSchema);
module.exports = Commentplace;
