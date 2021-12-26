const User=require('../models/user')
const jwt=require('jsonwebtoken')
require("dotenv").config()
const nodemailer=require('nodemailer')
const {JWT_SECRET,ADMIN_MAIL,ADMIN_MAIL_PASSWORD}=process.env

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
        if(!user.verified)
            return res.json({status:404,message:"account not verified"})
        const token=createToken(user._id)
        res.cookie('jwtCookie',token,{httpOnly:false, maxAge:maxAge*1000})
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
        // console.log(req.body)
        const characters = '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
        let code = '';
        for (let i = 0; i < 25; i++) {
            code += characters[Math.floor(Math.random() * characters.length )];
        }
        const user= await User.create({...req.body,confirmationCode:code})
        const transport = nodemailer.createTransport({
            service: "Gmail",
            auth: {
              user: ADMIN_MAIL,
              pass: ADMIN_MAIL_PASSWORD,
            },
          })
          transport.sendMail({
            from: ADMIN_MAIL,
            to: req.body.email,
            subject: "Please confirm your account",
            html: `<h1>Email Confirmation</h1>
                <h2>Hello ${req.body.name}</h2>
                <p>Thank you for subscribing. Please confirm your email by clicking on the following link</p>
                <a href=http://localhost:8080/verify/${code}> Click here</a>
                </div>`,
          }).catch(err => console.log(err));
          res.json({status:201,message:"We've just sent an email... verify your account"})
        /* const token=createToken(user._id)
        res.cookie('jwtCookie',token,{httpOnly:false, maxAge:maxAge*1000})
        res.json({status:201,user:user._id}).end() */
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
