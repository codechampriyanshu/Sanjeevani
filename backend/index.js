const express=require('express')
const mongoose=require('mongoose')
const app=express()
const {register,login} = require('./controllers/authControl')
const {checkUser} =require('./middlewares/authMiddleware')
require('dotenv').config()
const MONGO_URI=process.env.MONGO_URI

app.use(express.json())   
app.use(function(req, res, next) {             
  res.setHeader("Access-Control-Allow-Origin", "http://localhost:3000")
  res.setHeader('Access-Control-Allow-Methods', '*')
  res.setHeader("Access-Control-Allow-Headers", "Content-type")
  res.setHeader("Access-Control-Allow-Credentials",true)
  next()
  })

  mongoose.connect(MONGO_URI)
  .then(()=>console.log("connected to database"))
  .catch((e)=>console.log(e))

app.get('/checkUser',(req,res)=>checkUser(req,res))
app.post('/register',(req,res)=>register(req,res))

app.post('/login',(req,res)=>login(req,res))

//l90m7KdXFej4Ed4G
app.listen(8080,()=>{console.log("server started")})