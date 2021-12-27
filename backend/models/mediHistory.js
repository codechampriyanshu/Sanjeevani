const mongoose=require('mongoose')
const Schema=mongoose.Schema

const historySchema= new Schema({           //TODO: upload reports/prescriptions too
    what:{type:String,required:true},       //disease or test name
    fromWhen:String,                        //when is he suffering from / when the test is done
    treated:{type:Boolean,required:true},    //whether patient is cured or still suffering
    institute:{type:String,required:true},     //hospital/clinic/pathology lab
    appointedDate:{type:String,default:""},    //when the test is done
    comments:{type:String},                     //any notes by patient
    patient_id:{type:String,required:true}        //to map history with corresponding patient
})

const History=mongoose.model('history',historySchema)
module.exports=History;