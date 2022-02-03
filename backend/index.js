const express=require('express') 
const mongoose=require('mongoose')
const cookieParser=require('cookie-parser')
const app=express()
const {register,login, logout} = require('./controllers/authControl')
const {getUser} = require('./controllers/userController')   //for getting the user details e.g. profile.
const {checkUser} =require('./middlewares/authMiddleware')    //for checking if the user is logged in or not.
const { confirmEmail } = require('./controllers/confirmEmail')    //for email verification
const {resetPassword, checkingOTP, updatePassword} = require('./controllers/resetPassword')
const { newAppointment, getAppointments,deleteAppointment } = require('./controllers/appointment')
const {editHistory,getHistory} = require('./controllers/history')     //patient medical history
const {updateProfile} =require('./controllers/updateProfile')

require('dotenv').config()
const MONGO_URI=process.env.MONGO_URI

app.use(cookieParser())   //to handle cookies
app.use(express.json())     //to convert json strings to javascript objects
app.use(function(req, res, next) {         //CORS           
  res.setHeader("Access-Control-Allow-Origin", "http://localhost:3000")
  res.setHeader('Access-Control-Allow-Methods', '*')
  res.setHeader("Access-Control-Allow-Headers", "Content-type")
  res.setHeader("Access-Control-Allow-Credentials",true)
  next()
  })

  mongoose.connect(MONGO_URI)       //connecting to database
  .then(()=>console.log("connected to database"))
  .catch((e)=>console.log(e))

    //TODO: we can create routes folder separately to handle these routes, in case this file grows large..
app.get('/checkUser',(req,res)=>checkUser(req,res))
app.post('/register',(req,res)=>register(req,res))
app.post('/login',(req,res)=>login(req,res))
app.get('/logout',(req,res)=>logout(req,res))
app.get('/user/:id',(req,res)=>getUser(req,res))
app.get('/verify/:code',(req,res)=>confirmEmail(req,res))
app.post('/patient/appointment/new/:id',(req,res)=>newAppointment(req,res))
app.get('/patient/appointments/get/:id',(req,res)=>getAppointments(req,res))
app.get('/patient/appointment/delete/:id',(req,res)=>deleteAppointment(req,res))
app.post('/patient/history/add/:id',(req,res)=>editHistory(req,res))
app.get('/patient/history/get/:id',(req,res)=>getHistory(req,res))
app.get('/resetPassword/:id',(req,res)=>resetPassword(req,res))
app.get('/checkOTP/:email/:code',(req,res)=>checkingOTP(req,res))
app.post('/update/password/:id/:otp',(req,res)=>updatePassword(req,res))
app.post('/update/profile/:id',(req,res)=>updateProfile(req,res));

app.listen(8080,()=>{console.log("server started")})