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
    const token=await req.cookies.jwtCookie
    if(token){
        jwt.verify(token,JWT_SECRET,async(err,decodedToken)=>{
            if(err){
                console.log(err.message)
                res.json({user:""})
                return;           
            }
            else{
                let user=await User.findById(decodedToken.id)
                res.json({user:user._id})
                return;
            }
        })
    }
    else{
        res.json({user:""})
        return;           
    }
}


module.exports={requireAuth,checkUser}