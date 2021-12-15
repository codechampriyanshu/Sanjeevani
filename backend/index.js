const express=require('express')
const mongoose=require('mongoose')
const app=express()
const {register,login} = require('./controllers/authControl')
require('dotenv').config()
const MONGO_URI=process.env.MONGO_URI

app.use(express.json())   
app.use(function(req, res, next) {             
  res.setHeader("Access-Control-Allow-Origin", "*")
  res.setHeader('Access-Control-Allow-Methods', '*')
  res.setHeader("Access-Control-Allow-Headers", "*")
  next()
  })

  mongoose.connect(MONGO_URI)
  .then(()=>console.log("connected to database"))
  .catch((e)=>console.log(e))

app.post('/register',(req,res)=>register(req,res))

app.post('/login',(req,res)=>login(req,res))

//l90m7KdXFej4Ed4G
app.listen(8080,()=>{console.log("server started")})