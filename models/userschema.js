const mongoose = require("mongoose");

const userSchema = new mongoose.Schema(
    {
      username:{
        type:String,
      },
      
      email :{
         type: String,
  
      },
    },
    { timestamps: true }
  );
  const userschema = mongoose.model("user",userSchema);
  
  module.exports = userschema;