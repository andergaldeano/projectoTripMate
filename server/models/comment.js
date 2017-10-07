var mongoose = require('mongoose');
var Schema   = mongoose.Schema;


var commentSchema = new Schema({
	'comment' : {
    type:String,
    default:'no hay comentario'
 },
	'user' : {
    type:String,
    default:'no user'
 },
	'place' :{
    type:String,
    default:'general'
 }
});

const Comment = mongoose.model('Comment', commentSchema);
module.exports = Comment;
