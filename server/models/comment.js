var mongoose = require('mongoose');
var Schema   = mongoose.Schema;


var commentSchema = new Schema({
	'comment' : {
    type:String,
    default:'no hay comment'
 },
 'planid' : {
	 type:String,
	 default:'no hay descripcion'
 },
	'user' : {
    type:String,
    default:'no user'
 }
});

const Comment = mongoose.model('Comment', commentSchema);
module.exports = Comment;
