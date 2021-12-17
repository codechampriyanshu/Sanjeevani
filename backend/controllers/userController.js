const {User}=require('../models/user')

module.exports.getUser=(req,res)=>{
    const id=req.body.id
    User.findById(id,(e,doc)=>{
        if(e){
            res.status(404).json({error:"not found"});
            console.log(e)
        }
        else{
            console.log(doc)
            res.status(200).json({...doc})
        }
    })
}