const express=require('express')
const mongoose=require('mongoose')
const app=express()
const {register,login} = require('./controllers/authControl')
require('dotenv').config()
const MONGO_URI=process.env.MONGO_URI

app.use(express.json())   
app.use(function(req, res, next) {             
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
  });

  mongoose.connect(MONGO_URI)
  .then(()=>console.log("register"))
  .catch((e)=>console.log("error: "+e.message))

app.post('/register',(req,res)=>register(req,res))

app.post('/login',(req,res)=>login(req,res))

//X3wsQTbvx3BAuOSH
app.listen(8080,()=>{console.log("server started")})