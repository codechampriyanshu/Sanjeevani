const jwt=require('jsonwebtoken')
const User = require('../models/user')
require('dotenv').config()
JWT_SECRET=process.env.JWT_SECRET


const requireAuth=(req,res,next)=>{
    const token=req.cookies.jwtCookie
    console.log(token)
    if(token){
        jwt.verify(token,JWT_SECRET,async(err,decodedToken)=>{
            if(err){
                console.log(err.message)
                res.json({Error:"not logged in"})
            }else{
                let user=await User.findById(decodedToken.id)
                next()
            }
        })
    }else{
        res.redirect('/login')
    }
}

const checkUser=async(req,res)=>{
   // console.log(req.cookies)
    const token=await req.cookies.jwtCookie
    if(token){
        jwt.verify(token,JWT_SECRET,async(err,decodedToken)=>{
            if(err){
                console.log(err.message)
                res.status(404).json({user:""})
            }
            else{
                let user=await User.findById(decodedToken.id)
                res.status(200).json({user:user._id})
            }
        })
    }
    else{
        res.status(404).json({user:""})
    }
}


module.exports={requireAuth,checkUser}