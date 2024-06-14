const mongoose = require('mongoose');   //calling from mongoose
const { Schema } = mongoose;
const CredSchema = new Schema({    // creating a schema or model for mongoose models
    name:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true,
        
    },
    password:{
        type:String,
        required:true
    },
    date:{
        type:Date,
        default:Date.now 
    }
  });

  module.exports = mongoose.model('Creden', CredSchema)   //1st model--name , 2nd schema--name