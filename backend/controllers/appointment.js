const Appointment=require('../models/appointments')
module.exports.newAppointment=async function(req,res){
    const patient_id=req.params.id
    const appointment= await Appointment.create({...req.body,patient_id})
    if(!appointment){
        return res.json({status:404,message:"appointment not scheduled"})
    }
    return res.json({status:200,appointment})
}

module.exports.getAppointments=async function(req,res){
    const id=req.params.id
    const appointments=await Appointment.find({patient_id:id}).sort({applied:"desc"})
    console.log(appointments)
    if(!appointments){
        return res.json({status:404,message:"not found"})
    }
    return res.json({status:200,appointments})
}

module.exports.deleteAppointment=async function (req,res){
    const id=req.params.id
    const delApp = await Appointment.findByIdAndDelete(id)
    if(!delApp)
        return res.json({status:404,message:"can not delete"})
    return res.json({status:204,message:"successfully deleted"})
}