const mongoose = require("mongoose");


const commentSchema = new mongoose.Schema({
    game: { type: Number, required:true },
    username: { type: String, required:true },
    comment: { type: String, required: true },
  },{
      timestamps: true
  });


  module.exports = mongoose.model("Comments", commentSchema);
