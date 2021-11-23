const mongoose = require("mongoose");


const userSchema = new mongoose.Schema({
    userName: { type: String, required: true,unique: true },
    email: { type: String, required:true,unique: true },
    password: { type: String, required: true},
    score: { type: Number, default: 0,},
    isDeleted: { type: Boolean, default: false },
  });


  module.exports = mongoose.model("User", userSchema);
