import mongoose from 'mongoose';
import 'mongoose-type-email'
var Schema = mongoose.Schema;

var user = new Schema({
  firstname: {
    type: String,
    required: false
  },
  lastname:{
    type:String,
    required:false
  },
  email: {
    type: mongoose.SchemaTypes.Email,
    required: false
  },
  password: {
    type: String,
    required: false
  },
  username:{
      type:String,
      required:false
  },
  phone:{
      type:String,
      required:false
  },
  balance:{
    type:Number,
    required:false,
  },

});

mongoose.models = {};

var users = mongoose.model('users', user);

export default users;