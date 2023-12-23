const mongoose=reqire('mongoose');

const annonceSchema=new mongoose.Schema(
    {
        titre:{
            type:String,
        },
        date_depot:{
            type:Date,
        },
        kg_dispo:{
            type:Number,
        },
        prix_kg:{
            type:Number,
        },
        date_limite:{
            type:Date,
        }
    },
    {
        timestamps:true,
    }
);

module.exports=mongoose.model('Annonce',annonceSchema);