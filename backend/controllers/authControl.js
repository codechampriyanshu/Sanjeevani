const User=require('../models/user')
const jwt=require('jsonwebtoken')
require("dotenv").config()
const JWT_SECRET=process.env.JWT_SECRET

//creating errors
const handleErrors=(err)=>{
    console.log(err.message,err.code)
    let errors={email:'',password: ''}
    if(err.message==='incorrect email'){
        errors.email='the email is not registered'
    }
    if(err.message=='incorrect password'){
        errors.password='incorrect password'
    }

    if(err.code===11000){
        errors.email='email is already registered'
        return errors
    }
    if(err.message.includes('user validation failed')){
        Object.values(err.errors).forEach(({properties})=>{
            errors[properties.path]=properties.message
        })
    }
    if(err.message.includes('PayloadTooLargeError')){
        errors.image="image file too large"
    }
    return errors
}
const maxAge= 3*24*60*60
const createToken=(id)=>{
    return jwt.sign({id}, JWT_SECRET,{
        expiresIn:maxAge
    })
}

//login ->
module.exports.login=async (req,res)=>{
    const {email, password}=req.body
    try{
        const user=await User.login(email,password)
        const token=createToken(user._id)
        res.cookie('jwtCookie',token,{httpOnly:true, maxAge:maxAge*1000})
        res.json({status:200,user:user._id}).end()
    }
    catch(err){
        const errors=handleErrors(err)
        res.json({status:400,errors}).end()
    }
}

//register ->
module.exports.register=async (req,res)=>{
    try{
        console.log(req.body)
        const user= await User.create({...req.body})
        const token=createToken(user._id)
        res.cookie('jwtCookie',token,{httpOnly:false, maxAge:maxAge*1000})
        res.json({status:201,user:user._id}).end()
    }
    catch(err){
        const errors=handleErrors(err)
        res.json({status:400,errors}).end()
    }
}

//logout ->
module.exports.logout=(req,res)=>{
    res.cookie('jwtCookie','',{maxAge:1})
    res.json({status:200, message:"successfully logged out"}).end()
}
