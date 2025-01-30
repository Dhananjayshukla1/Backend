const mongoose= require("mongoose")

const user={
    name:{
        type:string,
        required:true
    },
    email:{
        type:string,
        required:true,
        unique:true
    },
    password:{
        type:string,
        required:true
    }
    ,
    confirmPassword:{
        type:string,
        required:true
    }
}

const userModel= mongoose.model("userModel",user)
module.exports=userModel

