import mongoose from 'mongoose';
//import 'mongoose-type-email'
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
    type:String,
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
  investment:{
    type:Array,
    required:false
  },
  pending:{
    type:Array,
    required:false
  },
  withdrawal:{
    type:Array,
    required:false,
  },
  bomber:{
    type:String,
    required:false,
  }

});

mongoose.models = {};

var users = mongoose.model('users', user);

export default users;