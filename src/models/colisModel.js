const mongoose=require("mongoose");

const colisSchema=new mongoose.Shchema(
    {
        libelle_coli:{
            type:String,
        },
        poids:{
            type:Number,
        },
        description:{
            type:String,
        }
    },
    {
        timestamps:true,
    }
);

module.exports=mongoose.model('Colis',colisSchema);