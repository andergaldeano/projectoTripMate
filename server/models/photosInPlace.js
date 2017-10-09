var mongoose = require('mongoose');
var Schema   = mongoose.Schema;


var photosInPlaceSchema = new Schema({
	'user' : {
    type:String,
    default:'no plan'
 },
 'userId' : {
   type:String,
   default:'no user'
 },
	'place' : {
    type:String,
    default:'no user'
 },
 'photo' : {
	 type:String,
	 default:'no user'
}

});

const PhotosInPlace = mongoose.model('PhotosInPlace', photosInPlaceSchema);
module.exports = PhotosInPlace;
