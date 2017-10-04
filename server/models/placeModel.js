var mongoose = require('mongoose');
var Schema   = mongoose.Schema;

var placeSchema = new Schema({
	'name' : String,
	'activities' : Array,
	'people' : String,
	'pictures': String
});

module.exports = mongoose.model('place', placeSchema);
