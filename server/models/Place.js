var mongoose = require('mongoose');
var Schema   = mongoose.Schema;
const findOrCreate = require('mongoose-find-or-create')

var placeSchema = new Schema({
	'name' : {
    type:String,
    default:'Por ahora no sabemos como se llama'
 },
	'identification': String
});

placeSchema.plugin(findOrCreate)


const Place = mongoose.model('Place', placeSchema);
module.exports = Place;
