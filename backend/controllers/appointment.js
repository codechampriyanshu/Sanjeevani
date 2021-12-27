const Appointment=require('../models/appointments')     //appointment model

//function to add new appointment to appointments collection, having patient id same as the id of patient in users collection
module.exports.newAppointment=function(req,res){
    const patient_id=req.params.id
    Appointment.create({...req.body,patient_id},(e,appointment)=>{
        if(e){
            res.json({status:404,message:"appointment not scheduled"})
        }
        else res.json({status:200,appointment})
    })
}

//each appointment has patient id same as user id of patient so we can query and sort and then display..
module.exports.getAppointments=function(req,res){
    const id=req.params.id
    Appointment.find({patient_id:id}).sort({applied:"desc"}).exec(function(e,appointments){
        if(e){
            res.json({status:404,message:"not found"})
        }
        else res.json({status:200,appointments})
    })
}


//since we have sent the whole appointment document (including id) to the frontend, so we can get the id back in the url and then delete corresponding appointment
module.exports.deleteAppointment=function (req,res){
    const id=req.params.id
    Appointment.findByIdAndDelete(id).exec(function(e,delApp){
        if(e)   res.json({status:404,message:"can not delete"})
        else    res.json({status:204,message:"successfully deleted"})
    })
}