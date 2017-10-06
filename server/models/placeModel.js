var mongoose = require('mongoose');
var Schema   = mongoose.Schema;
const findOrCreate = require('mongoose-find-or-create')

var placeSchema = new Schema({
	'name' : {
    type:String,
    default:'Por ahora no sabemos como se llama'
 },
	'activities' : {
    type:String,
    default:'No hay ninguna actividad propuesta aun, se el primero en hacer una propuesta'
 },
	'people' :{
    type:String,
    default:'Nadie quiere venir aqui, creo que te han engañado'
 },
	'pictures': {
    type:String,
    default:'debe estar feo el sitio, porque nadie ha subido fotos'
 },
	'identification': String
});

placeSchema.plugin(findOrCreate)


const Place = mongoose.model('Place', placeSchema);
module.exports = Place;
