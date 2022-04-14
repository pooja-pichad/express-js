const express=require("express")
var app=express();
var bodyparsar=require("body-parser");
app.use(bodyparsar.json());
app.use(bodyparsar.urlencoded({extended:true}));  ///body paser is a middle ware its use for parse the cliet requst
//urlencoding is helps to parse ASCII data 
app.get("/resister",(req,res)=>{
    res.sendFile(__dirname+'/resister.html')      //dirname means directory name

});
app.post('/from-submit',(req,res)=>{
    res.send(req.body.email)
});
app.listen(4000)