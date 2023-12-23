const express=require("express");
const cors=require("cors");
const dotenv=require("dotenv").config();
const connectDB=require('./src/configs/dbConfig')
const morgan=require("morgan");
const cookieParser=require("cookie-parser");
const bodyParser=require('body-parser');

const app=express(); //creer l'application api
const PORT=5000;//port d'ouverture de l'api

app.use(bodyParser.urlencoded({extended:false}));


//les middlewares
app.use(express.json());
//connection a la BD
connectDB();

//http get request
app.get('/',(req,res)=>{
    res.status(201).json('Bienvenu sur notre api')
})

//demarrer le sereur
app.listen(PORT,()=>console.log('le serveur a demarrer sur le port '+PORT))