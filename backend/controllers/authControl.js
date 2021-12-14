const User=require('../models/user')
const jwt=require('jsonwebtoken')
require("dotenv").config()
const JWT_SECRET=process.env.JWT_SECRET
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
    return errors
}
const maxAge= 3*24*60*60
const createToken=(id)=>{
    return jwt.sign({id}, JWT_SECRET,{
        expiresIn:maxAge
    })
}

module.exports.login=async (req,res)=>{
    const {email, password}=req.body
    try{
        const user=await User.login(email,password)
        const token=createToken(user._id)
        res.cookie('jwtCookie',token,{httpOnly:true, maxAge:maxAge*1000})
        res.status(200).json({user:user._id})
    }
    catch(err){
        const errors=handleErrors(err)
        res.status(400).json({errors})
    }
}
module.exports.register=async (req,res)=>{
    //const{name, email, password,userType,bloodGroup,height,weight,licence, gender,state,zip,city}=req.body
    try{
        console.log(req.body)
        const user= await User.create({...req.body})
        const token=createToken(user._id)
        res.cookie('jwtCookie',token,{httpOnly:true, maxAge:maxAge*1000})
        res.status(201).json({user:user._id})
    }
    catch(err){
        const errors=handleErrors(err)
        res.status(400).json({errors})
    }
}
module.exports.logout=(req,res)=>{
    res.cookie('jwtCookie','',{maxAge:1})
    res.redirect('/')
}
