const mongoose=require('mongoose')
const Schema=mongoose.Schema

const appointSchema= new Schema({
    applied:{type:String,default: new Date()},
    institute:{type:String,required:true},
    preferredDate:String,
    preferredTime:{type:String},
    appointedDate:{type:String,default:""},
    disease:{type:String,required:true},
    comments:{type:String},
    patient_id:{type:String,required:true}
})

const Appointment=mongoose.model('appointment',appointSchema)
module.exports=Appointment;