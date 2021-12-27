const mongoose=require('mongoose')
const Schema=mongoose.Schema

const historySchema= new Schema({           //TODO: upload reports/prescriptions too
    what:{type:String,required:true},
    fromWhen:String,
    treated:{type:Boolean,required:true},
    institute:{type:String,required:true},
    appointedDate:{type:String,default:""},
    comments:{type:String},
    patient_id:{type:String,required:true}
})

const History=mongoose.model('history',historySchema)
module.exports=History;