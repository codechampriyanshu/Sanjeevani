const mongoose=require('mongoose')
const {isEmail}=require('validator')
const Schema=mongoose.Schema
const bcrypt=require('bcrypt')

const userSchema= new Schema({
    firstName:{type:String, required:[true,'please enter your name']},
    lastName:{type:String, required:[true,'please enter your name']},
    email:{type:String,
        required:[true, 'please enter email'],
        unique:true,
        lowercase:true,
        validate:[isEmail,'Please enter a valid email']
        },
    password: { type: String, 
        required: [true, 'please enter password'], 
        minlength: [6, 'password should be atleast 6 characters long'] 
    },
    userType:{type:String, required:[true,'please choose who you are..']},
    bloodGroup:{type:String},
    height:{type:String},
    weight:{type:String},
    license:{type:String},
    gender:{type:String},
    state:{type:String, required:[true,'please enter your state']},
    zip:{type:String,required:[true,'enter your zip number']},
    city:{type:String}
})

userSchema.pre('save',async function (next){
    const salt= await bcrypt.genSalt()
    this.password= await bcrypt.hash(this.password,salt)
    next();
})

userSchema.statics.login=async function(email,password){
    const user=await this.findOne({email})
    if(user){
        const auth=await bcrypt.compare(password,user.password)
        if(auth){
            return user
        }else{
            throw Error('incorrect password')
        }
    }else{
        throw Error('incorrect email')
    }
}
const User=mongoose.model('user',userSchema)
module.exports=User;