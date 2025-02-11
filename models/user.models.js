<<<<<<< HEAD
// 1 import mongoose
const mongoose = require("mongoose");

// 2 create schema by mongoose.schema

const userSchema = new mongoose.Schema(
  {
    username: {
      type: string,
      required: true,
      unique: true,
    },
    email: {
      type: string,
      required: true,
      unique: true,
      lowercase: [true, "email should be in lowercase"],
    },
    password: {
      type: string,
      required: true,
      min: [6, "Must be atleast 6, got {value}"],
      max: 12,
    },
    confirmPassword: {
      type: string,
      required: true,
      min: [6, "Must be atleast 6, got {value}"],
      max: 12,
    },
  },
  {
    timestamps: true,
  }
);

// export model
const Users = mongoose.model("Users", userSchema);
module.exports = Users;
=======
const mongoose= require("mongoose")

const user={
    username:{
        type:string,
        required:true,
        unique:true
    },
    email:{
        type:string,
        required:true,
        unique:true,
        lowercase:[true,"email should be in lowercase"]
    },
    password:{
        type:string,
        required:true,
        min:[6,"Must be atleast 6, got {value}"],
        max:12
    }
    ,
    confirmPassword:{
        type:string,
        required:true,
        min:[6,"Must be atleast 6, got {value}"],
        max:12
    }
}

const userModel= mongoose.model("userModel",user)
module.exports=userModel

>>>>>>> 035174deb196e6d44e7c09b5791c50f8ebb9ee44
