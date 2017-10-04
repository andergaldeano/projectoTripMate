const mongoose = require('mongoose');
const Schema   = mongoose.Schema;

const userSchema = new Schema({
  username: String,
  password: String,
  details: {
    type:String,
    default:'Ningun detalle aun'
 },
  country: {
    type:String,
    default:'Ningun pais de residencia'
 },
  friends: {
    type:Array,
    default:'Ningun amigo aun'
 },
  goingTo: {
    type:String,
    default:'Ningun destino venidero'
 },
  proposals: {
    type:String,
    default:'Ningun plan aun'
 }


  // pic_path: {
  //   type: String,
  //   default: '/uploads/66af7a224082f315c0756cf974ecad64'
  // },
}, {
  timestamps: {
    createdAt: 'created_at',
    updatedAt: 'updated_at'
  }

});


const User = mongoose.model('User', userSchema);
module.exports = User;
