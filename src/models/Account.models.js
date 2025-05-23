const mongoose = require('mongoose');
const bcrypt = require("bcrypt");
const db = require('../configs/db');

const { Schema } = mongoose;

const AccountSchema = new Schema({
    TenTK: String,
    pass: String,
    role:{
      type: String,
      default: 'user'
    }, 
    email: String,
    trangthai: {
      type: Boolean,
      default: true
    }
  }); 

//Hash mat khau truoc khi luu
AccountSchema.pre('save',async function(){
  try{
    var user = this;
    const salt = await(bcrypt.genSalt(10)); 
    const hashpass = await bcrypt.hash(user.pass,salt);
    user.pass = hashpass;
  }catch(error){
    throw error;
  }
});

const accountModel = db.model('Account',AccountSchema);

module.exports = accountModel;