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

