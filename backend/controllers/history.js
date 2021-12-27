const History = require("../models/mediHistory")

//it is for adding a new report or data to the patient history.
//remember we have given a patient id to each document and that is stored in the session Storage so we are getting it from
// the frontend and then accessing the document
module.exports.editHistory=async function(req,res){
    const id=req.params.id
    History.create({...req.body,patient_id:id},(e,doc)=>{
        if(e)   res.json({status:404,message:"something went wrong\nTry again later.."})
        else    res.json({status:201,message:"added successfully"})
    })
}

//for getting patient history
module.exports.getHistory=async function(req,res){
    const id=req.params.id
    History.find({patient_id:id},(e,docs)=>{
        if(e){
            res.json({status:404,message:"not found"})
        }
        else res.json({status:200,histories:docs})
    })
}