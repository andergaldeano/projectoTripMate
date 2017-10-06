var mongoose = require('mongoose');
var Schema   = mongoose.Schema;
const findOrCreate = require('mongoose-find-or-create')

var placeSchema = new Schema({
	'name' : {
    type:String,
    default:'Ningun detalle aun'
 },
	'activities' : {
    type:String,
    default:'Ningun detalle aun'
 },
	'people' :{
    type:String,
    default:'Ningun detalle aun'
 },
	'pictures': {
    type:String,
    default:'Ningun detalle aun'
 },
	'identification': String
});

placeSchema.plugin(findOrCreate)


const Place = mongoose.model('Place', placeSchema);
module.exports = Place;
