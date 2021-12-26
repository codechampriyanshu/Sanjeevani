const express=require('express')
const mongoose=require('mongoose')
const cookieParser=require('cookie-parser')
const app=express()
const {register,login, logout} = require('./controllers/authControl')
const {getUser} = require('./controllers/userController')
const {checkUser} =require('./middlewares/authMiddleware')
const {getDoctors}= require('./controllers/mapController')
const { confirmEmail } = require('./controllers/confirmEmail')
require('dotenv').config()
const MONGO_URI=process.env.MONGO_URI

app.use(cookieParser())
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
app.get('/logout',(req,res)=>logout(req,res))
app.get('/user/:id',(req,res)=>getUser(req,res))
app.post('/doctors',(req,res)=>getDoctors(req,res))
app.get('/verify/:code',(req,res)=>confirmEmail(req,res))

//l90m7KdXFej4Ed4G
app.listen(8080,()=>{console.log("server started")})