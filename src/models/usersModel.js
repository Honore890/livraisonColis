const mongoose=require("mongoose");

const userSchema=new mongoose.Schema(
    {
        name:{
            type:String,
        },
        firstname:{
            type:String,
        },
        tel:{
            type:String,
        },
        address:{
            type:String,
        },
        password:{
            type:String,
        }

    },
    {
        timestamps:true,//enregistre les date automatiquement
    }
);

module.exports=mongoose.model('users',userSchema);