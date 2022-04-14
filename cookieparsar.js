const express=require("express")
const cookie=require("cookie-parser")
var app=express();
app.use(cookie());
app.get("/",function(req,res){
    res.cookie("cookies1","pooja pichad").send("cookie has been set")
})

app.get("/show",function(req,res){
    res.send(req.cookies)
    
})

app.get("/delete",function(req,res){
    // res.clearCookie("cookies1").send("cookie1 has been delete")
    res.send(req.send)
})

app.listen(3000)