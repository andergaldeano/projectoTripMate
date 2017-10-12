var mongoose = require('mongoose');
var Schema   = mongoose.Schema;


var commentSchema = new Schema({
	'comment' : {
    type:String,
    default:'no hay comment'
 },
 'planId' : {
 	type: Schema.Types.ObjectId,
  	ref: 'Plan'
 },
	'userId' : {
		type: Schema.Types.ObjectId,
	 	ref: 'User'
	}
});

const Comment = mongoose.model('Comment', commentSchema);
module.exports = Comment;
