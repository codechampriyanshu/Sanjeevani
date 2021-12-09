const express=require('express')
const app=express()

app.use(express.json())     //converts incoming json into js objects
app.use(function(req, res, next) {              //CORS
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
  });
app.post('/login',(req,res)=>{
    console.log(req.body.email,req.body.password)
    res.send("success")
})
app.listen(8000,()=>{console.log("server started")})