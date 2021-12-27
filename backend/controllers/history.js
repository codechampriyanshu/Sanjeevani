const History = require("../models/mediHistory")

module.exports.editHistory=async function(req,res){
    const id=req.params.id
    History.create({...req.body,patient_id:id})
    .then(()=>
        res.json({status:201,message:"added successfully"}))
    .catch(()=>
        res.json({status:404,message:"something went wrong\nTry again later.."}))
}

module.exports.getHistory=async function(req,res){
    const id=req.params.id
    History.find({patient_id:id},(e,docs)=>{
        if(e){
            return res.json({status:404,message:"not found"})
        }
        return res.json({status:200,histories:docs})
    })
}