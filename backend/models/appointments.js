const mongoose=require('mongoose')
const Schema=mongoose.Schema

const appointSchema= new Schema({
    applied:{type:String,default: new Date()},  //date on which appointed was applied for
    institute:{type:String,required:true},      //hospital,clinic, or pathology lab
    preferredDate:String,                       //date preferred by patient
    preferredTime:{type:String},                
    appointedDate:{type:String,default:""},     //set by doctor
    disease:{type:String,required:true},        //although written disease, will store disease or testname
    comments:{type:String},                     //any notes or comments by patient
    patient_id:{type:String,required:true}      //set to map appointment with patients  
})

const Appointment=mongoose.model('appointment',appointSchema)
module.exports=Appointment;